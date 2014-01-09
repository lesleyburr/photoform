<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<title>Photography/Imaging Order Form</title>
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
<p><strong>*</strong> Required</p>
<form name="form1" method="post" action="response.asp" onSubmit="return(validateString(this.employee, 'Please enter your name') && validateString(this.phone, 'Please enter your phone number') && validateString(this.department, 'Please enter your department name') && validateNumber(this.account, 'Please enter a valid account number', 14, 15) && validateString(this.work, 'Please enter a work description') && validateString(this.keywords, 'Please enter keywords') && validateString(this.date, 'Please enter a due date'));">
<table class="tablewidth">
<tr>
	<td><h2><strong>*</strong>Name:</h2></td><td><input type="text" name="employee"></td>
</tr>
<tr>
	<td><h2><strong>*</strong> Phone:</h2></td><td> <input type="text" name="phone" maxlength="11"></td>
</tr>
<tr>
	<td><h2><strong>*</strong> Department:</h2></td><td> <input type="text" name="department"></td>
</tr>
<tr>
	<td><h2><strong>*</strong> Account Number:</h2></td><td> <input type="text" name="account"><br /><em>Enter full fourteen digit account number, excluding dashes.  If your request is not project-based, the last four digits will be 0000.</em> </td>
</tr>
</table>
<br /><br/ >
<h2><strong>* </strong>Work Type:</h2>
  See <a href="Common%20photo%20services.htm">price information</a><br />
  <br />
  <select name="type" size="5">
      <option value="Digital Camera Photos">Digital Camera Photos</option>
      <option value="Prints">Prints</option>
      <option value="Scans">Scans</option>
      <option value="Slides">Slides</option>
      <option value="4X5 Transparencies">4X5 Transparencies</option>
  </select>
  <br /><br />
  <h2>For print orders, please indicate the following:</h2>
  <h3>Color Type:</h3> 
  <input type="checkbox" name="color" value="B/W" checked>
  B/W 
  <input type="checkbox" name="color" value="Color"> 
  Color
  <br />
  <h3>Style:</h3>
  <input type="checkbox" name="style" value="Glossy" checked> 
  Glossy
  <input type="checkbox" name="style" value="Matte">
  Matte
  <br />
  <h3>Size:</h3>
  <input type="checkbox" name="size" value="4X6" checked>
  4X6 
  <input type="checkbox" name="size" value="5X7">
  5X7 
  <input type="checkbox" name="size" value="8X10">
  8X10
  <input type="checkbox" name="size" value="11X14">
  11X14
  <input type="checkbox" name="size" value="16X20">
  16X20
  <input type="checkbox" name="size" value="20X24">
  20X24
  <input type="checkbox" name="size" value="Mixed (detail below)"> 
  Mixed (detail below)
  <br />

  <br/ > 
  <h2><strong>* </strong>Work Description:</h2>
  <br />
  <textarea name="work" cols="60" rows="5" wrap="Physical"></textarea>
  <br />
  <br />
    <h2><strong>*</strong> Keywords:</h2>
    <br />
  <textarea name="keywords" cols="60" rows="5" wrap="Physical"></textarea>
    <br /><br />
  <h2><strong>*</strong> Due Date:</h2>
  <input type="text" name="date" maxlength="10">
  <br />
  <em><br />
  Standard turnaround time is two weeks. We will try to accommodate earlier deadlines if possible.
  </em><br />
  <br />
  <em>We require that you submit this form online. Print the completed 
  <br />form before submitting and keep for your records.
  </em><br />
  <br />
  <input type="submit" name="Submit" value="Submit">
</h2>
</form>
</div>
</body>
</html>