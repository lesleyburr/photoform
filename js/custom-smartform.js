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
  // *********
  // SERVICES
  // *********
    // NEW IMAGES
    // SHOW New Images Menu ON CHECK
    // UNCHECK all checked checkboxes, DELETE details, and HIDE New Images Menu ON UNCHECK
    $('#ServicesNew').click(function() {
      $("#ServicesNewMenu").slideToggle(this.checked)
                          .find('input[type=checkbox]:checked').removeAttr('checked')
                          .end()
                          .find("[id$=Details]").removeAttr('style').empty();
    });





$("#NewExibitionDoc").click(function() {
  if($(this).is(":checked")) {
    $( "#NewExhibitionDocDetails" ).html('<h1>IT WORKS?</h1>')
                                    .slideDown('slow');
  }
  else {
    $('#NewExhibitionDocDetails').slideUp('slow', function() {
      $( "#NewExhibitionDocDetails" ).empty();
    });
  }
});

    // Show Exhibition Documentation Details and
    // REINITIALIZE Abide
    // $("#NewExibitionDoc").click(function() {
    //   $( "#NewExhibitionDocDetails" ).html('<div class="field--text">\
    //                                           <label for="NewExhibitionDocTitle" class="label">\
    //                                             What is the exhibition title?\
    //                                             <small>required</small>\
    //                                           </label>\
    //                                           <input type="text" name="new_exdoc_title" placeholder="Chicago: Crossroads of America" id="NewExhibitionDocTitle" required>\
    //                                           <small class="error">\
    //                                             How should I refer to this exhibition?\
    //                                           </small>\
    //                                         </div>\
    //                                         <div class="field--date">\
    //                                           <label for="NewExhibitionDocDate" class="label">\
    //                                             When should the photography occur?\
    //                                           <small>required</small></label>\
    //                                           <input type="date" name="new_exdoc_date" id="NewExhibitionDocDate" required pattern="month_day_year">\
    //                                           <small class="error">\
    //                                             Use the MM/DD/YYYY date format.\
    //                                           </small>\
    //                                         </div>')
    //                                   .slideToggle('slow');
    //   $('#PhotoAndImagingRequest').foundation({bindings: 'events'});
    // });

    // Show Photography for Exhibition Details and
    // REINITIALIZE Abide
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
                                                    <label for="NewPhotoForExhibitionDate" class="label">\
                                                      When should the photography occur? \
                                                      <small>required</small>\
                                                    </label>\
                                                    <input type="date" name="new_photo_for_ex_date" id="NewPhotoForExhibitionDate" required pattern="month_day_year">\
                                                    <small class="error">Use the MM/DD/YYYY date format.</small>\
                                                  </div>')
                                    .slideToggle( 'slow');
      $('#PhotoAndImagingRequest').foundation({bindings: 'events'});
    });

    // Show Photography for Marketing Details and
    // REINITIALIZE Abide
    $("#NewPhotoForMarketing").click(function() {
      $( "#NewPhotoForMarketingDetails" ).html('<div class="field--description">\
                                                  <label class="label" for="NewPhotoForMarketingDescription">\
                                                    Provide Photography details:\
                                                    <small>required</small>\
                                                    <span data-tooltip class="has-tip tip-right" title="Objects, people, or locations to be photographed."><i class="fi-info"></i></span>\
                                                  </label>\
                                                  <textarea name="new_marketing_details" placeholder="Photograph someone in the hot dog suit standing in front of the Pioneer." id="NewPhotoForMarketing" required></textarea>\
                                                  <small class="error">What would you like photographed?</small>\
                                                </div>\
                                                <div class="field--date">\
                                                  <label for="NewPhotoForMarketingDate" class="label">\
                                                    When should the photography occur?\
                                                  <small>required</small>\
                                                  </label>\
                                                  <input type="date" name="new_marketing_date" id="NewPhotoForMarketingDate" required pattern="month_day_year">\
                                                  <small class="error">Use the MM/DD/YYYY date format.</small>\
                                                </div>')
                                  .slideToggle( 'slow');
      $('#PhotoAndImagingRequest').foundation({bindings: 'events'});
    });



    // EXISTING IMAGES
    // Show Existing Images Menu
    // SHOW New Images Menu ON CHECK
    // UNCHECK all checked checkboxes, DELETE details, and HIDE New Images Menu ON UNCHECK
    $('#ServicesExisting').click(function() {
      $("#ServicesExistingMenu").slideToggle(this.checked)
                          .find('input[type=checkbox]:checked').removeAttr('checked')
                          .end()
                          .find("[id$=Details]").removeAttr('style').empty();
    });

  // *********
  // USE
  // *********
  // SHOW description for other use ON CHECK and
  // REINITIALIZE Abide
  $("#UseOther").click(function() {
    $( "#OtherUseDetails" ).html('<div class="field--description">\
                                    <label class="label" for="OtherUseDescription">\
                                      What will these images be used for? \
                                      <small>required</small>\
                                    </label>\
                                    <textarea name="use_other_details" placeholder="The images will be used for the Peer Recogition awards." id="OtherUseDescription" required></textarea>\
                                    <small class="error">How do you plan to use these images?</small>\
                                  </div>')
                           .slideToggle( 'slow');
    $('#PhotoAndImagingRequest').foundation({bindings: 'events'});
  });

  // SHOW description for external client ON CHECK and
  // REINITIALIZE Abide
  $("#UseClientExternal").click(function() {
    $( "#UseClientExternalDetails" ).html('<div class="field--description">\
                                            <label class="label" for="ExternalClientName">\
                                              What is the name of the external client?\
                                              <small>required</small>\
                                            </label>\
                                            <input type="text" name="external_client_details" placeholder="Motorola" id="ExternalClientName" required>\
                                            <small class="error">Who is your external client?</small>\
                                          </div>')
                           .slideToggle( 'slow');
    $('#PhotoAndImagingRequest').foundation({bindings: 'events'});
  });
