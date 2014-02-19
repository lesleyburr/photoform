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

    // NEW IMAGES
    // Show New Images Menu
    $('#ServicesNew').click(function() {
      $("#ServicesNewMenu").slideToggle(this.checked);
    });

    // Show Exhibition Documentation Details
    $("#NewExibitionDoc").click(function() {
      $( "#NewExhibitionDocDetails" ).html('<div class="field--text">\
                                              <label for="NewExhibitionDocTitle" class="label">\
                                                What is the exhibition title?\
                                                <small>required</small>\
                                              </label>\
                                              <input type="text" name="new_exdoc_title" placeholder="Chicago: Crossroads of America" id="NewExhibitionDocTitle" required>\
                                              <small class="error">\
                                                How should I refer to this exhibition?\
                                              </small>\
                                            </div>\
                                            <div class="field--date">\
                                              <label for="NewExhibitionDocDate" class="label">\
                                                When should the photography occur?\
                                              <small>required</small></label>\
                                              <input type="date" name="new_exdoc_date" id="NewExhibitionDocDate" required pattern="month_day_year">\
                                              <small class="error">\
                                                Use the MM/DD/YYYY date format.\
                                              </small>\
                                            </div>')
                              .slideToggle( 'slow');
    });

    // Show Photography for Exhibition Details
    $("#NewPhotoForExhibition").click(function() {
      $( "#NewPhotoForExhibitionDetails" ).html('<div class="field--text">\
                                    <label for="NewPhotoForExhibitionTitle" class="label">\
                                        What is the exhibition title?\
                                        <small>required</small>\
                                    </label>\
                                    <input type="text" name="new_photo_for_ex_title" placeholder="Facing Freedom" id="NewPhotoForExhibitionTitle" required>\
                                    <small class="error">How should I refer to this exhibition?</small>\
                                </div>\
                                <div class="field--description">\
                                    <label class="label" for="NewPhotoForExhibitionDescription">\
                                        Provide Photography details:\
                                        <small>required</small>\
                                        <span data-tooltip class="has-tip tip-right" title="Objects, people, or locations to be photographed."><i class="fi-info"></i></span>\
                                    </label>\
                                    <textarea name="new_photo_for_ex_details" placeholder="Photograph the women&rsquo;s suffrage cutouts with people standing among them." id="NewPhotoForExhibitionDescription" required></textarea>\
                                    <small class="error">Please provide some context on the exhibition.</small>\
                                </div>\
                                <div class="field--date">\
                                    <label for="NewPhotoForExhibitionDate">\
                                        When should the photography occur? \
                                        <small>required</small>\
                                    </label>\
                                    <input type="date" name="new_photo_for_ex_date" id="NewPhotoForExhibitionDate" required pattern="month_day_year">\
                                    <small class="error">Use the MM/DD/YYYY date format.</small>\
                                </div>')
                              .slideToggle( 'slow');
    });



    // EXISTING IMAGES
    // Show Existing Images Menu
    $('#ServicesExisting').click(function() {
      $("#ServicesExistingMenu").slideToggle(this.checked);
    });