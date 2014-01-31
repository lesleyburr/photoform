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

If Request.Form("service_exhibition_documentation") <> "" then
	HTML = HTML & "<p>" & Request.Form("service_exhibition_documentation")
	Dim exhibition_documentation_details, exhibition_documentation_detail  
	exhibition_documentation_details = split(Request.Form("service_exhibition_documentation_details"),",")

	For Each exhibition_documentation_detail   in exhibition_documentation_details
		HTML = HTML & "<br />" & exhibition_documentation_detail
	Next
		HTML = HTML & "</p>" 
End If

If Request.Form("new_images") = "on" Then
	Dim new_images, new_image, new_image_details, new_image_detail
	new_images = split(Request.Form("photoservice_new"),",")
	new_image_details = split(Request.Form("photoservice_new_details"),",")

	HTML = HTML & "<h2>New Images Needed</h2>"

	For Each new_image in new_images
		HTML = HTML & "<p>" & new_image 
			For Each new_image_detail in new_image_details
				HTML = HTML & "<br />" & new_image_detail
			Next
			HTML = HTML & "</p>"
	Next
End If


'If Request.Form("photoservice_new") = "Other" Then
'	HTML = HTML & "<p>Description:</p>"
'	HTML = HTML & "<p>" & Request.Form("photoservice_new_other") & "</p>"
'End If

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
