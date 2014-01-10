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
objCDOMail.To = "photolab@chicagohistory.org, silvernell@chicagohistory.org"

strSubject = "#N" & atopic & "-" & Request.Form("employee")
objCDOMail.Subject = strSubject

HTML = "<HTML>"
HTML = HTML & "<HEAD>"
HTML = HTML & "</HEAD>"
HTML = HTML & "<BODY>"
HTML = HTML & "<FONT face=""verdana"" color=""black""  SIZE=""3"">"
HTML = HTML & "<B>" & "Request Number:" & "</B>" & "<FONT size=""3"">" & "N"
HTML = HTML & "<FONT size=""3"">" & atopic & "</FONT>"
HTML = HTML & "<BR>" & "<BR>"
HTML = HTML & "<B>" & "Requestor Name: " & "</B>"
HTML = HTML & "<FONT size=""3"">" & Request.Form("employee") & "</FONT>"
HTML = HTML & "<BR>" & "<BR>"
HTML = HTML & "<B>" & "Requestor Phone Number: " & "</B>"
HTML = HTML & "<FONT size=""3"">" & Request.Form("phone") & "</FONT>"
HTML = HTML & "<BR>" & "<BR>"
HTML = HTML & "<B>" & "Department Name: " & "</B>"
HTML = HTML & "<FONT size=""3"">" & Request.Form("department") & "</FONT>"
HTML = HTML & "<BR>" & "<BR>"
HTML = HTML & "<B>" & "Account Number to Charge: " & "</B>"
HTML = HTML & "<FONT size=""3"">" & Request.Form("account") & "</FONT>"
HTML = HTML & "<BR>" & "<BR>"
HTML = HTML & "<B>" & "Work Type: " & "</B>"
HTML = HTML & "<FONT size=""3"">" & Request.Form("type") & "</FONT>"
HTML = HTML & "<BR>" & "<BR>"
If Request.Form("type") = "Prints" Then
	HTML = HTML & "<B>" & "Color: " & "</B>"
	HTML = HTML & "<FONT size=""3"">" & Request.Form("color") & "</FONT>"
	HTML = HTML & "<BR>" & "<BR>"
	HTML = HTML & "<B>" & "Style: " & "</B>"
	HTML = HTML & "<FONT size=""3"">" & Request.Form("style") & "</FONT>"
	HTML = HTML & "<BR>" & "<BR>"
	HTML = HTML & "<B>" & "Size: " & "</B>"
	HTML = HTML & "<FONT size=""3"">" & Request.Form("size") & "</FONT>"
	HTML = HTML & "<BR>" & "<BR>"
End If

HTML = HTML & "<B>" & "Due Date: " & "</B>"
HTML = HTML & "<FONT size=""3"">" & Request.Form("date") & "</FONT>"
HTML = HTML & "<BR>" & "<BR>"
HTML = HTML & "<B>" & "Work Description: " & "</B><br /><br />"
HTML = HTML & "<FONT size=""3"">" & Replace(Request.form("work"),vbCrLf,"<br>") & "</FONT>"
HTML = HTML & "<BR>" & "<BR>"
HTML = HTML & "<B>" & "Keywords: " & "</B><br /><br />"
HTML = HTML & "<FONT size=""3"">" & Replace(Request.form("keywords"),vbCrLf,"<br>") & "</FONT>"
HTML = HTML & "</FONT>"
HTML = HTML & "</BODY>"
HTML = HTML & "</HTML>"

objCDOMail.BodyFormat = 0
objCDOMail.MailFormat = 0 

objCDOMail.Body = HTML
objCDOMail.Send
Set objCDOMail = Nothing



%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>Photo Order Submission Successful</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<script language="JavaScript" src="../js-bin/frmGenValidation.js">
</script>
<link rel="stylesheet" type="text/css" href="photoform.css">
</head>

<body>
<div class="container">
<img src="http://www.chicagohistory.org/pageimages/logos/CHM-LogoBlue.jpg" /><br />
<h1>Photography and Imaging Order Form</h1> 
</div>
<div class="container2">
<br />
<h2>Thank you for submitting your photo order.</h2>
<p>
Your order tracking number is <strong><% Response.Write atopic %></strong>.
<br /><br>Please keep this number for your records it will be the primary means of retrieving your digital images should you need them again.<br /><br/>

<br>Bring all necessary materials (books or prints to copy, etc.) to the photo studio as soon as possible in order to expedite your order. We will contact you when your order is complete.
<br><br>
Questions? <a href="Mailto:johna@chicagohistory.org">e-mail us</a>, or contact John Alderson (ext. 2075)  directly.<br><br><% Response.End %>
</p>
</div>
</body>
</html>