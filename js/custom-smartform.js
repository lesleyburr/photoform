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


// Show New Images menu
$('#ServicesNew').click(function() {
     $("#ServicesNewMenu").toggle(this.checked);
});

// Show Exhibition Documentation questions
$("#NewExibitionDoc").click(function(){
  $("#NewExhibitionDocDetails").html('<div class="field--text"><label for="NewExhibitionDocTitle" class="label">What is the name of the exhibition you want photographed?<small>required</small></label><input type="text" name="new_exdoc_title" placeholder="Chicago: Crossroads of America" id="NewExhibitionDocTitle" required><small class="error">How should I refer to this exhibition?</small></div><div class="field--date"><label for="NewExhibitionDocDate" class="label">When should the photography occur?<small>required</small></label><input type="date" name="new_exdoc_date" id="NewExhibitionDocDate" required pattern="month_day_year"><small class="error">Use the MM/DD/YYYY date format.</small></div>');
  	("#NewExibitionDoc").toggle(this.checked);
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