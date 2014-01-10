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

strSubject = "#N" & atopic & "-" & Request.Form("employee")
objCDOMail.Subject = strSubject

HTML = "<html>"
HTML = HTML & "<head></head>"
HTML = HTML & "<body>"

' Order Tracking
HTML = HTML & "<h1><strong>Order Number:" & "N" & atopic & "</h1>"

' User Information
HTML = HTML & "<h2><strong>Requested by:</strong></h2>" 
HTML = HTML & "<p>" & Request.Form("employee") & "</p>"
HTML = HTML & "<p>" & Request.Form("phone") & "</p>"
HTML = HTML & "<p>" & Request.Form("department") & "</p>"
HTML = HTML & "<p>Account #: " & Request.Form("account") & "</p>"


' Photography Services for New Images
HTML = HTML & "<h2>Photography Services for New Images</h2>"
HTML = HTML & "<p>" & Request.Form("photoservice_new") & "</p>"
If Request.Form("photoservice_new") = "Other" Then
	HTML = HTML & "<p>Description:</p>"
	HTML = HTML & "<p>" & Request.Form("photoservice_new_other") & "</p>"
End If

' Photography Services for Existing Images
HTML = HTML & "<h2>Photography Services for New Images</h2>"
HTML = HTML & "<p>" & Request.Form("photoservice_existing") & "</p>"
If Request.Form("photoservice_existing") = "Collections items" Then
	HTML = HTML & "<p>Collection IDs:</p>"
	HTML = HTML & "<p>" & Request.Form("photoservice_existing_collection_id") & "</p>"
End If

' Delivery Methods
HTML = HTML & "<h2>Delivery Methods</h2>"
HTML = HTML & "<p>" & Request.Form("delivery") & "</p>"
If Request.Form("delivery") = "Save on server" Then
	HTML = HTML & "<p>Server Path:</p>"
	HTML = HTML & "<p>" & Request.Form("folder_location") & "</p>"
End If
If Request.Form("delivery") = "E-mail" Then
	HTML = HTML & "<p>E-mail Address:</p>"
	HTML = HTML & "<p>" & Request.Form("e-mail") & "</p>"
End If
If Request.Form("delivery") = "Other" Then
	HTML = HTML & "<p>Delivery Description:</p>"
	HTML = HTML & "<p>" & Request.Form("deliver_other") & "</p>"
End If

' Digital File Specs
HTML = HTML & "<h2>File Specifications</h2>"
HTML = HTML & "<p>" & Request.Form("imgquality") & "</p>"
If Request.Form("imgquality") = "Other" Then
	HTML = HTML & "<p>File Spec Description:</p>"
	HTML = HTML & "<p>" & Request.Form("imgquality_other") & "</p>"
End If

' File Type
HTML = HTML & "<h3>File Type</h3>"
HTML = HTML & "<p>" & Request.Form("filetype") & "</p>"


'Planned Use
HTML = HTML & "<h2>Planned Use</h2>"
HTML = HTML & "<p>" & Request.Form("use") & "</p>"
If Request.Form("use") = "Other" Then
	HTML = HTML & "<p>Use Description:</p>"
	HTML = HTML & "<p>" & Request.Form("use_other") & "</p>"
End If

'Work Description
HTML = HTML & "<h2>Client</h2>"
HTML = HTML & "<p>" & Request.Form("client") & "</p>"
If Request.Form("client") = "External Client" Then
	HTML = HTML & "<p>External Client Name:</p>"
	HTML = HTML & "<p>" & Request.Form("external_client_name") & "</p>"
End If

' Due Date
HTML = HTML & "<h2>Duwe Date</h2>"
HTML = HTML & "<p>" & Request.Form("date") & "</p>"



HTML = HTML & "</body>"
HTML = HTML & "</html>"

objCDOMail.BodyFormat = 0
objCDOMail.MailFormat = 0 

objCDOMail.Body = HTML
objCDOMail.Send
Set objCDOMail = Nothing



%>
<html>
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