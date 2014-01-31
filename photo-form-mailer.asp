<%@ language=VBScript %>
<%option Explicit%>
<% Response.Buffer = True %>

<%
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

' Set up Constants
Const ForWriting = 2   ' Input OutPut mode
Const Create = True

' Dimension local variables
Dim MyFile
MyFile = strFilePath
Dim FSO
Dim TS  ' TextStreamObject

Set FSO = Server.CreateObject("Scripting.FileSystemObject")
Set TS = FSO.OpenTextFile(MyFile, ForWriting, Create)
TS.write nav + 1

' close TextStreamObject and destroy local variables to relase memory
TS.close
Set TS = Nothing
Set FSO = Nothing

' setup email
Dim objCDOMail, strSubject, HTML
Set objCDOMail = Server.CreateObject("CDONTS.NewMail")
objCDOMail.From = "photoworkrequest@chicagohistory.org"
objCDOMail.To = "gonzalez@chicagohistory.org, burr@chicagohistory.org"

strSubject = atopic & "-" & Request.Form("name")
objCDOMail.Subject = strSubject

HTML = "<html>"
HTML = HTML & "<head></head>"
HTML = HTML & "<body>"

' Order Tracking
HTML = HTML & "<h1><strong>Order Number: " & atopic & "</h1>"

' User Information
HTML = HTML & "<h2><strong>Requested by:</strong></h2>"
HTML = HTML & "<p>" & Request.Form("name") & " in " & Request.Form("department") & "<br />"
HTML = HTML &  "Phone: " & Request.Form("phone") & "<br />"
HTML = HTML & "Account: " & Request.Form("account") & "</p>"

' Photography Services

' - New Images Requested
If Request.Form("new_images") = "on" Then

	' -- 2D Collection Items
	If Request.Form("service_2d_collection") <> "" then
		HTML = HTML & "<p>" & Request.Form("service_2d_collection") & "</p>" 
	End If

	' -- 3D Collection Items
	If Request.Form("service_3d_collection") <> "" then
		HTML = HTML & "<p>" & Request.Form("service_3d_collection") & "</p>" 
	End If

	' -- Exhibition Documentation
	If Request.Form("service_exhibition_documentation") <> "" then
		HTML = HTML & "<p>" & Request.Form("service_exhibition_documentation")
		Dim exhibition_documentation_details, exhibition_documentation_detail  
		exhibition_documentation_details = split(Request.Form("service_exhibition_documentation_details"),",")

		For Each exhibition_documentation_detail in exhibition_documentation_details
			HTML = HTML & "<br />" & exhibition_documentation_detail
		Next
			HTML = HTML & "</p>" 
	End If

	' -- Photography for Exhibitions
	If Request.Form("service_photography_exhibitions") <> "" then
		HTML = HTML & "<p>" & Request.Form("service_photography_exhibitions")
		Dim exhibition_photography_details, exhibition_photography_detail  
		exhibition_documentation_details = split(Request.Form("service_photography_exhibitions_details"),",")

		For Each exhibition_photography_detail in exhibition_photography_details
			HTML = HTML & "<br />" & exhibition_photography_detail
		Next
			HTML = HTML & "</p>" 
	End If

	' -- Marketing Photography
	If Request.Form("service_marketing") <> "" then
		HTML = HTML & "<p>" & Request.Form("service_marketing")
		Dim marketing_details, marketing_detail  
		exhibition_documentation_details = split(Request.Form("service_marketing_details"),",")

		For Each marketing_detail in marketing_details  
			HTML = HTML & "<br />" & marketing_detail 
		Next
			HTML = HTML & "</p>" 
	End If

	' -- Event Photography
	If Request.Form("service_event") <> "" then
		HTML = HTML & "<p>" & Request.Form("service_event")
		Dim event_details, event_detail  
		event_details = split(Request.Form("service_event_details"),",")

		For Each event_detail in event_details  
			HTML = HTML & "<br />" & event_detail 
		Next
			HTML = HTML & "</p>" 
	End If

	' -- Other Photography
	If Request.Form("service_other") <> "" then
		HTML = HTML & "<p>" & Request.Form("service_other")
		Dim other_details, other_detail  
		other_details = split(Request.Form("service_other_details"),",")

		For Each other_detail in other_details  
			HTML = HTML & "<br />" & other_detail 
		Next
			HTML = HTML & "</p>" 
	End If

End If

' - Exhisting Images Requested

if Request.Form("existing_images") = "on" Then
	Dim existing_images, existing_image
	existing_images = split(Request.Form("photoservice_existing"),",")
	
	HTML = HTML & "<h2>Existing Images Needed</h2>"
	HTML = HTML & "<ul>"

	For Each existing_image in existing_images
		HTML = HTML & "<li>" & existing_image & "</li>"
	Next

	HTML = HTML & "</ul>"
End If

'If Request.Form("photoservice_existing") = "Collections items" Then
''	HTML = HTML & "<p>Collection IDs:</p>"
''	HTML = HTML & "<p>" & Request.Form("photoservice_existing_collection_id") & "</p>"
'End If


' Digital File Specs
HTML = HTML & "<h2>File Specifications</h2>"

HTML = HTML & "<h3>Image Quality</h3>"

dim quality
quality = Request.Form("imgquality")

If quality = "Other" Then
	HTML = HTML & "<p><em>" & Request.Form("imgquality_other") & "</em></p>"
Else
	HTML = HTML & "<p><em>" & quality & "</em></p>"
End If

' File Type
HTML = HTML & "<h3>File Type</h3>"
HTML = HTML & "<p><em>" & Request.Form("filetype") & "</em></p>"


'Planned Use
HTML = HTML & "<h2>Planned Use</h2>"

Dim uses, use
uses = split(Request.Form("use"),",")

HTML = HTML & "<ul>"

For Each use in uses
	HTML = HTML & "<li>" & use & "</li>"
Next

HTML = HTML & "</ul>"

'If Request.Form("use") = "Other" Then
''	HTML = HTML & "<p>Use Description:</p>"
''	HTML = HTML & "<p>" & Request.Form("use_other") & "</p>"
'End If

'Who is the Client?
HTML = HTML & "<h2>Client Information</h2>"

dim client
client = Request.Form("client")

If client = "external client" Then
	HTML = HTML & "<p>This is for <em>" & Request.Form("external_client_name") & "</em>, they are an external client.</p>"
Else
	HTML = HTML & "<p>This is for <em>" & client & "</em>.</p>"
End If


' Delivery Methods
HTML = HTML & "<h2>Delivery</h2>"

Dim delivery_methods, delivery_method
delivery_methods = split(Request.Form("delivery"),",")

HTML = HTML & "<ul>"

For Each delivery_method in delivery_methods
	HTML = HTML & "<li>" & delivery_method & "</li>"
Next

HTML = HTML & "</ul>"

'If Request.Form("delivery") = "Save on server" Then
''	HTML = HTML & "<p>Server Path:</p>"
''	HTML = HTML & "<p>" & Request.Form("folder_location") & "</p>"
'End If

'If Request.Form("delivery") = "E-mail" Then
''	HTML = HTML & "<p>E-mail Address:</p>"
''	HTML = HTML & "<p>" & Request.Form("e-mail") & "</p>"
'End If

'If Request.Form("delivery") = "Other" Then
''	HTML = HTML & "<p>Delivery Description:</p>"
''	HTML = HTML & "<p>" & Request.Form("deliver_other") & "</p>"
'End If


' Due Date
HTML = HTML & "<h2>Due Date</h2>"
HTML = HTML & "<p>" & Request.Form("date") & "</p>"



HTML = HTML & "</body>"
HTML = HTML & "</html>"

objCDOMail.BodyFormat = 0
objCDOMail.MailFormat = 0

objCDOMail.Body = HTML
objCDOMail.Send
Set objCDOMail = Nothing
%>

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
