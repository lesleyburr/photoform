// FORM NAVIGATION
$( "#GoToServices" ).click(function( event ) {
  event.preventDefault();
  $('#tab1-2').click();
});

$( "#GoToUse" ).click(function( event ) {
  event.preventDefault();
  $('#tab1-3').click();
});

$( "#GoToFiles" ).click(function( event ) {
  event.preventDefault();
  $('#tab1-4').click();
});




// CONDITIONAL SECTIONS 
// SERVICES




$('#ServicesNew').click(function() {
     $("#ServicesNewOptions").toggle(this.checked);
});


// ********************************
// OLD CODE DELETE LATER
// ********************************
//
// New Images
//
//

// $('#isnewimagesselected').click(function() {
//     $("#newchoices").toggle(this.checked);
// });

// $('#is2dselected').click(function() {
//     $("#txt2dinstructions").toggle(this.checked);
// });

// $('#is3dselected').click(function() {
//     $("#txt3dinstructions").toggle(this.checked);
// });

// $('#isexhibitiondocumentation').click(function() {
//     $("#labelfor_exhibitiondocumentation").toggle(this.checked);
// });

// $('#isexhibitiondocumentation').click(function() {
//     $("#exhibitiondocumentation").toggle(this.checked);
// });

// $('#isexhibitiondocumentation').click(function() {
//     $("#labelfor_datetime_exhibitiondoc").toggle(this.checked);
// });

// $('#isexhibitiondocumentation').click(function() {
//     $("#datetime_exhibitiondoc").toggle(this.checked);
// });



// $('#isotherserviceselected').click(function() {
//     $("#labelfor_photoservice_other_textarea").toggle(this.checked);
// });

// $('#isotherserviceselected').click(function() {
//     $("#photoservice_other_textarea").toggle(this.checked);
// });