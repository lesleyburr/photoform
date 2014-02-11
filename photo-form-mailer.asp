<%@ language=VBScript %>
<%option Explicit%>
<% Response.Buffer = True %>

<%
' *******************************************************
' Setup the order number counter and file storage for it.
' *******************************************************
dim dicKey, dicVal, dicObj, navfile, fileObj, strFilePath, nav, atopic
set dicObj = createobject("Scripting.Dictionary")
set fileObj = createobject("Scripting.FileSystemObject")
strFilePath = Server.Mappath("counter.txt")
if isobject(fileObj) then
	set navfile = fileObj.opentextfile(strFilePath)
end if
nav = navfile.readline
atopic = nav
navfile.close
set fileObj = nothing

' -Set up Constants
Const ForWriting = 2   ' Input OutPut mode
Const Create = True

' -Dimension local variables
Dim MyFile
MyFile = strFilePath
Dim FSO
Dim TS  ' TextStreamObject

Set FSO = Server.CreateObject("Scripting.FileSystemObject")
Set TS = FSO.OpenTextFile(MyFile, ForWriting, Create)
TS.write nav + 1

' -Close TextStreamObject and destroy local variables to relase memory
TS.close
Set TS = Nothing
Set FSO = Nothing



' *******************************************************
' Remove non-numeric characters from input
' *******************************************************
Dim regEx

  Function stripNonNumeric(inputString)
    Set regEx = New RegExp
     regEx.Global = True
     regEx.Pattern = "\D"
     stripNonNumeric = regEx.Replace(inputString,"")
  End Function

' *******************************************************
' Setup the Response HTML E-mail and Send it
' *******************************************************
Dim objCDOMail, strSubject, HTML
Set objCDOMail = Server.CreateObject("CDONTS.NewMail")
objCDOMail.From = "photoworkrequest@chicagohistory.org"
objCDOMail.To = "" & Request.Form("email") & ""
objCDOMail.Bcc = "gonzalez@chicagohistory.org, burr@chicagohistory.org"

strSubject = atopic & "-" & Request.Form("name")
objCDOMail.Subject = strSubject

HTML = "<html>"
HTML = HTML & "<head></head>"
HTML = HTML & "<body>"


' *************************************
' Order Tracking and User Information
' *************************************
HTML = HTML & "<section>"
HTML = HTML & "<header>"
HTML = HTML & "<h1><strong>Order Number: " & atopic & "</h1>"
HTML = HTML & "</header>"
HTML = HTML & "<p>Requested by <strong>" & Request.Form("name") & "</strong> in <strong>" & Request.Form("department") & "</strong>.<br />"
HTML = HTML &  "E-mail: " & Request.Form("email") & "<br />"
HTML = HTML &  "Phone: " & stripNonNumeric(Request.Form("phone")) & "<br />"
HTML = HTML & "Account: " & stripNonNumeric(Request.Form("account")) & "</p>"
HTML = HTML & "</section>"


' *************************************
' Photography Services
' *************************************
HTML = HTML & "<section>"
HTML = HTML & "<header>"
HTML = HTML & "<h1>Photography and Imaging Needs</h1>"
HTML = HTML & "</header>"
HTML = HTML & "<p><em><strong>*</strong> indicates a custom request.</em></p>"

' - New Images Requested
If Request.Form("new_images") = "on" Then
	HTML = HTML & "<h2>New Images</h2>"

	Dim new_image_services, new_image_service
	new_image_services = split(Request.Form("new_image_service"),",")

	For Each new_image_service in new_image_services

		Select Case Trim(new_image_service)

			Case "2D collection items"
				HTML = HTML & "<p>Photographs of 2D objects from the collection.</p>"

			Case "3D collection items"
				HTML = HTML & "<p>Photographs of 3D objects from the collection.</p>"

			Case "Exhibition documentation"
				HTML = HTML & "<h3>Exhibition Documentation</h3>"
				HTML = HTML & "<p>I need images that document the <em>" & Request.Form("new_exdoc_title") & "</em> exhibitiion.<br />"
				HTML = HTML & "Please photograph the gallery on " & Request.Form("new_exdoc_date") & ".</p>"

			Case "Photography for exhibitions"
				HTML = HTML & "<h3>Photography for Exhibitions</h3>"
				HTML = HTML & "<p>" & Request.Form("new_photo_for_ex_details")
				HTML = HTML & " for the <em>" & Request.Form("new_photo_for_ex_title") & "</em> exhibition.<br />"
				HTML = HTML & "the photography should take place on " & Request.Form("new_photo_for_ex_date") & ".</p>"

			Case "Marketing photography"
				HTML = HTML & "<h3>Marketing Photography</h3>"
				HTML = HTML & "<p>" & Request.Form("new_marketing_details") & " on " & Request.Form("new_marketing_date") & ".</p>"

			Case "Event photography"
				HTML = HTML & "<h3>Event Photography</h3>"
				HTML = HTML & "<p>" & Request.Form("new_event") & " on " & Request.Form("new_event_date") & ".</p>"

			Case "Other"
				HTML = HTML & "<p><strong>*</strong> " & Request.Form("new_other") & ".</p>"

			Case else
				HTML = HTML & "<p>" & new_image_service & ".</p>"

		End Select
	Next
End If

' - Existing Images Requested

If Request.Form("existing_images") = "on" Then

	HTML = HTML & "<h2>Existing Images</h2>"

	Dim existing_image_services, existing_image_service
	existing_image_services = split(Request.Form("existing_image_service"),",")

	For Each existing_image_service in existing_image_services

		Select Case Trim(existing_image_service)

			Case "Collections items"
				HTML = HTML & "<p>Photographs of the following collection items:<br />"
				HTML = HTML & Request.Form("collection_item_ids") & "</p>"

			Case "Non-collections items"
				HTML = HTML & "<p>Photographs of the following non-collection items:<br />"
				HTML = HTML & Request.Form("noncollection_item_description") & "</p>"

			Case else
				HTML = HTML & "<p>" & existing_image_service & ".</p>"

		End Select
	Next
End If
HTML = HTML & "</section>"



' *************************************
' Planned Use
' *************************************
HTML = HTML & "<section>"
HTML = HTML & "<header>"
HTML = HTML & "<h1>Planned Use</h1>"
HTML = HTML & "</header>"

Dim uses, use
uses = split(Request.Form("use"),",")

For Each use in uses
	If Trim(use) = "Other" Then
		HTML = HTML & "<p><strong>*</strong> " & Request.Form("use_other") & "</p>"
	Else
		HTML = HTML & "<p>" & use & "</p>"
	End If
Next


'Client Information
HTML = HTML & "<h2>Client Information</h2>"

dim client
client = Request.Form("client")

If client = "external client" Then
	HTML = HTML & "<p>This is for <em>" & Request.Form("external_client_name") & "</em>, they are an external client.</p>"
Else
	HTML = HTML & "<p>This is for <em>" & client & "</em>.</p>"
End If

HTML = HTML & "</section>"

' *************************************
' File Quality and File Type
' *************************************
HTML = HTML & "<section>"
HTML = HTML & "<header>"
HTML = HTML & "<h1>File Type</h1>"
HTML = HTML & "</header>"

dim quality
quality = Request.Form("imgquality")

If quality = "Other" Then
	HTML = HTML & "<p><em>" & Request.Form("imgquality_other") & ", " & Request.Form("filetype") & "</em>.</p>"
Else
	HTML = HTML & "<p><em>" & quality & ", " & Request.Form("filetype") &  "</em>.</p>"
End If
HTML = HTML & "</section>"

' *************************************
' File Delivery Methods
' *************************************
HTML = HTML & "<section>"
HTML = HTML & "<header>"
HTML = HTML & "<h1>File Delivery</h1>"
HTML = HTML & "</header>"

Dim delivery_methods, delivery_method
delivery_methods = split(Request.Form("delivery"),",")

For Each delivery_method in delivery_methods

	Select Case Trim(delivery_method)

	Case "Save on server"
		HTML = HTML & "<p>Save the files on the network at " & Request.Form("folder_location") & ".</p>"

	Case "E-mail"
		HTML = HTML & "<p>Email the files to " & Request.Form("delivery_email") & ".</p>"

	Case "Burn to disc"
		HTML = HTML & "<p>Burn the files to disc.</p>"

	Case "Other"
		HTML = HTML & "<p><strong>*</strong> " & Request.Form("delivery_other") & ".</p>"

	Case else
		HTML = HTML & "<p>" & delivery_method & ".</p>"

	End Select

Next
HTML = HTML & "</section>"


' *************************************
' Due Date
' *************************************
HTML = HTML & "<section>"
HTML = HTML & "<header>"
HTML = HTML & "<h1>Due Date</h1>"
HTML = HTML & "</header>"
HTML = HTML & "<p>" & Request.Form("date") & "</p>"
HTML = HTML & "</section>"


HTML = HTML & "</body>"
HTML = HTML & "</html>"

objCDOMail.BodyFormat = 0
objCDOMail.MailFormat = 0

objCDOMail.Body = HTML
objCDOMail.Send
Set objCDOMail = Nothing
%>


<!-- 
*******************************************************
Create the Response Web Page
******************************************************* 
-->

<html class="no-js" lang="en">
<head>
<title>Photo Order Submitted</title>
<link rel="stylesheet" href="css/foundation.css" />
<script src="js/modernizr.js"></script>
</head>

<body>
	<main>
    	<div class="row">
      		<div class="large-12 columns">
        		<header><h1>Photography and Imaging Orders</h1></header>
        		<p>Thank you for submitting your photo order.</p>
				<p>Your order tracking number is <strong><% Response.Write atopic %></strong>.</p>
				<p><em>Please keep this number for your records it will be the primary means of retrieving your digital images should you need them again.</em></p>
			</div>
		</div>
	</main>
<% Response.End %>
</body>
</html>
