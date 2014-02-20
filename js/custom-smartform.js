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


    // Show Exhibition Documentation Details and REINITIALIZE Abide ON CHECK
    // HIDE and EMPTY Exhibition Documentation Details ON UNCHECK
    $("#NewExibitionDoc").click(function() {
      if($(this).is(":checked")) {
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
                                    .slideDown('slow');
       $('#PhotoAndImagingRequest').foundation({bindings: 'events'});
      }
      else {
        $('#NewExhibitionDocDetails').slideUp('slow', function() {
        $( "#NewExhibitionDocDetails" ).empty();
      });
      }
    });


    // Show Photography for Exhibition Details and REINITIALIZE Abide ON CHECK
    // HIDE and EMPTY Photography for Exhibition Details ON UNCHECK
    $("#NewPhotoForExhibition").click(function() {
      if($(this).is(":checked")) {
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
                                    .slideDown('slow');
      $('#PhotoAndImagingRequest').foundation({bindings: 'events'});
      }
      else {
        $('#NewPhotoForExhibitionDetails').slideUp('slow', function() {
        $( "#NewPhotoForExhibitionDetails" ).empty();
      });
      }
    });



    // Show Marketing Details and REINITIALIZE Abide ON CHECK
    // HIDE and EMPTY Marketing Details ON UNCHECK
    $("#NewPhotoForMarketing").click(function() {
      if($(this).is(":checked")) {
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
                                  .slideDown( 'slow');
      $('#PhotoAndImagingRequest').foundation({bindings: 'events'});
      }
      else {
        $('#NewPhotoForMarketingDetails').slideUp('slow', function() {
        $( "#NewPhotoForMarketingDetails" ).empty();
      });
      }
    });



    // Show Event Details and REINITIALIZE Abide ON CHECK
    // HIDE and EMPTY Event Details ON UNCHECK
    $("#NewPhotoForEvent").click(function() {
      if($(this).is(":checked")) {
        $( "#NewPhotoForEventDetails" ).html('<div class="field--text">\
                                                <label for="NewPhotoForEventTitle" class="label">\
                                                  What is the event name?\
                                                  <small>required</small>\
                                                </label>\
                                                <input type="text" name="new_photo_for_ex_title" placeholder="Museum Christmas party." id="NewPhotoForEventTitle" required>\
                                                  <small class="error">How should I refer to this exhibition?</small>\
                                              </div>\
                                              <div class="field--description">\
                                                <label class="label" for="NewPhotoForEventDescription">\
                                                  Provide Photography details:\
                                                  <small>required</small>\
                                                  <span data-tooltip class="has-tip tip-right" title="Objects, people, or locations to be photographed."><i class="fi-info"></i></span>\
                                                </label>\
                                                <textarea name="new_event_details" placeholder="Photograph Abe Lincoln breakdancing." id="NewPhotoForEvent"></textarea>\
                                                  <small class="error">Please provide some context on the exhibition.</small>\
                                              </div>\
                                              <div class="field--date">\
                                                <label for="NewPhotoForEventDate" class="label">\
                                                  When should the photography occur?\
                                                  <small>required</small>\
                                                </label>\
                                                <input type="date" name="new_marketing_date" id="NewPhotoForEventDate" required pattern="month_day_year">\
                                                  <small class="error">Use the MM/DD/YYYY date format.</small>\
                                              </div>')
                                .slideDown( 'slow');
      $('#PhotoAndImagingRequest').foundation({bindings: 'events'});
      }
      else {
        $('#NewPhotoForEventDetails').slideUp('slow', function() {
        $( "#NewPhotoForEventDetails" ).empty();
      });
      }
    });



    // Show New Other Details and REINITIALIZE Abide ON CHECK
    // HIDE and EMPTY New Other Details ON UNCHECK
    $("#NewPhotoForOther").click(function() {
      if($(this).is(":checked")) {
        $( "#NewPhotoForOtherDetails" ).html('<div class="field--description">\
                                                <label class="label" for="NewPhotoForOtherDescription">\
                                                  Describe the new images that you need.\
                                                  <small>required</small>\
                                                </label>\
                                                <textarea name="new_other_details" placeholder="Photograph the skyline from North Avenue beach in black and white." id="NewPhotoForOther" required></textarea>\
                                                  <small class="error">What would you like photographed?</small>\
                                                </div>\
                                                <div class="field--date">\
                                                  <label for="NewPhotoForOtherDate" class="label">\
                                                    When should the photography occur?\
                                                    <small>required</small>\
                                                  </label>\
                                                  <input type="date" name="new_other_date" id="NewPhotoForOtherDate" required pattern="month_day_year">\
                                                    <small class="error">Use the MM/DD/YYYY date format.</small>\
                                                  </div>')
                                    .slideDown( 'slow');
      $('#PhotoAndImagingRequest').foundation({bindings: 'events'});
      }
      else {
        $('#NewPhotoForOtherDetails').slideUp('slow', function() {
        $( "#NewPhotoForOtherDetails" ).empty();
      });
      }
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


    // Show Collection Item Details and REINITIALIZE Abide ON CHECK
    // HIDE and EMPTY Collection Item Details ON UNCHECK
    $("#ExistingCollectionItem").click(function() {
      if($(this).is(":checked")) {
        $( "#ExistingCollectionDetails" ).html('<div class="field--description">\
                                                  <label class="label" for="ExisitingCollectionNumber">\
                                                    Provide the ICHi, DN, SDN, or HB numbers.\
                                                    <small>required</small>\
                                                  </label>\
                                                  <textarea name="existing_collection_number_details" placeholder="ICHi-39255" id="ExisitingCollectionNumber" required></textarea>\
                                                    <small class="error">Provide collection IDs.</small>\
                                                </div>')
                                  .slideDown( 'slow');
      $('#PhotoAndImagingRequest').foundation({bindings: 'events'});
      }
      else {
        $('#ExistingCollectionDetails').slideUp('slow', function() {
        $( "#ExistingCollectionDetails" ).empty();
      });
      }
    });


    // Show Non-Collection Item Details and REINITIALIZE Abide ON CHECK
    // HIDE and EMPTY Non-Collection Item Details ON UNCHECK
    $("#ExistingNonCollectionItem").click(function() {
      if($(this).is(":checked")) {
        $( "#ExistingNonCollectionDetails" ).html('<div class="field--description">\
                                                    <label class="label" for="ExistingNonCollectionDescription">\
                                                      Describe the items.\
                                                      <small>required</small>\
                                                    </label>\
                                                    <textarea name="exisiting_non_collection_details" placeholder="Photographs of wedding receptions in the Chicago Room." id="ExistingNonCollectionDescription" required></textarea>\
                                                      <small class="error">What would you like photographed?</small>\
                                                  </div>')
                                    .slideDown( 'slow');
      $('#PhotoAndImagingRequest').foundation({bindings: 'events'});
      }
      else {
        $('#ExistingNonCollectionDetails').slideUp('slow', function() {
        $( "#ExistingNonCollectionDetails" ).empty();
      });
      }
    });



  // *********
  // USE
  // *********
  // SHOW description for other use ON CHECK and
  // REINITIALIZE Abide
    $("#UseOther").click(function() {
      if($(this).is(":checked")) {
        $( "#UseOtherDetails" ).html('<div class="field--description">\
                                    <label class="label" for="UseOtherDescription">\
                                      What will these images be used for? \
                                      <small>required</small>\
                                    </label>\
                                    <textarea name="use_other_details" placeholder="The images will be used for the Peer Recogition awards." id="UseOtherDescription" required></textarea>\
                                    <small class="error">How do you plan to use these images?</small>\
                                  </div>')
                                    .slideDown('slow');
       $('#PhotoAndImagingRequest').foundation({bindings: 'events'});
      }
      else {
        $('#UseOtherDetails').slideUp('slow', function() {
        $('#UseOtherDetails').empty();
      });
      }
    });

  

  // SHOW description for external client ON CHECK and
  // REINITIALIZE Abide
  $("#UseClientExternal").change(function() {
      if($(this).is(":checked")) {
        $( "#UseClientExternalDetails" ).html('<div class="field--description">\
                                            <label class="label" for="UseClientExternalName">\
                                              What is the name of the external client?\
                                              <small>required</small>\
                                            </label>\
                                            <input type="text" name="external_client_details" placeholder="Motorola" id="UseClientExternalName" required>\
                                            <small class="error">Who is your external client?</small>\
                                          </div>')
                                    .slideDown('slow');
       $('#PhotoAndImagingRequest').foundation({bindings: 'events'});
      }
      else {
        $('#UseClientExternalDetails').slideUp('slow', function() {
        $( "#UseClientExternalDetails" ).empty();
      });
      }
    });



  // *********
  // FILES
  // *********
    // DELIVERY METHOD
    // Show File Delivery Server Details and REINITIALIZE Abide ON CHECK
    // HIDE and EMPTY File Delivery Server Details ON UNCHECK
    $("#FileDeliveryServer").click(function() {
      if($(this).is(":checked")) {
        $( "#FileDeliveryServerDetails" ).html('<div class="field--description">\
                                                  <label for="FileFolderLocation" class="label">\
                                                    Provide the folder location.\
                                                    <small>required</small>\
                                                  </label>\
                                                  <input type="text" name="folder_location_details" placeholder="\\\\Ch-media\\Projects\\Unexpected Chicago\\2014" class="folder" id="FileFolderLocation" required>\
                                                    <small class="error">Where should we save the image files?</small>\
                                                </div>')
                                    .slideDown('slow');
       $('#PhotoAndImagingRequest').foundation({bindings: 'events'});
      }
      else {
        $('#FileDeliveryServerDetails').slideUp('slow', function() {
        $( "#FileDeliveryServerDetails" ).empty();
      });
      }
    });


    // Show File Delivery Email Details and REINITIALIZE Abide ON CHECK
    // HIDE and EMPTY File Delivery Email Details ON UNCHECK
    $("#FileDeliveryEmail").click(function() {
      if($(this).is(":checked")) {
        $( "#FileDeliveryEmailDetails" ).html('<div class="field--description">\
                                                <input type="email" name="delivery_email_details" placeholder="name@mail.com" required>\
                                                  <small class="error">What email address should we send the files to?</small>\
                                                </div>')
                                    .slideDown('slow');
       $('#PhotoAndImagingRequest').foundation({bindings: 'events'});
      }
      else {
        $('#FileDeliveryEmailDetails').slideUp('slow', function() {
        $( "#FileDeliveryEmailDetails" ).empty();
      });
      }
    });


    // Show File Delivery Other Details and REINITIALIZE Abide ON CHECK
    // HIDE and EMPTY File Delivery Other Details ON UNCHECK
    $("#FileDeliveryOther").click(function() {
      if($(this).is(":checked")) {
        $( "#FileDeliveryOtherDetails" ).html('<div class="field--description">\
                                                <label for="FileDeliveryOtherDescription" class="label">\
                                                  How would you like the files delivered?\
                                                  <small>required</small>\
                                                </label>\
                                                <textarea name="delivery_other_details" placeholder="I prefer carrier pigeon, but will for the Pony Express." id="FileDeliveryOtherDescription"></textarea>\
                                                  <small class="error">Describe how you need the files delivered.</small>\
                                              </div>')
                                    .slideDown('slow');
       $('#PhotoAndImagingRequest').foundation({bindings: 'events'});
      }
      else {
        $('#FileDeliveryOtherDetails').slideUp('slow', function() {
        $( "#FileDeliveryOtherDetails" ).empty();
      });
      }
    });











