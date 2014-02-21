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
                                                Use MM/DD/YYYY.\
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
                                                    <textarea class="field--description__input" name="new_photo_for_ex_details" placeholder="Photograph the women&rsquo;s suffrage cutouts with people standing among them." id="NewPhotoForExhibitionDescription" required></textarea>\
                                                    <small class="error">What would you like photographed.</small>\
                                                  </div>\
                                                  <div class="field--date">\
                                                    <label for="NewPhotoForExhibitionDate" class="label">\
                                                      When should the photography occur? \
                                                      <small>required</small>\
                                                    </label>\
                                                    <input type="date" name="new_photo_for_ex_date" id="NewPhotoForExhibitionDate" required pattern="month_day_year">\
                                                    <small class="error">Use MM/DD/YYYY.</small>\
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
                                                  <textarea class="field--description__input" name="new_marketing_details" placeholder="Photograph someone in the hot dog suit standing in front of the Pioneer." id="NewPhotoForMarketing" required></textarea>\
                                                  <small class="error">What would you like photographed?</small>\
                                                </div>\
                                                <div class="field--date">\
                                                  <label for="NewPhotoForMarketingDate" class="label">\
                                                    When should the photography occur?\
                                                  <small>required</small>\
                                                  </label>\
                                                  <input type="date" name="new_marketing_date" id="NewPhotoForMarketingDate" required pattern="month_day_year">\
                                                  <small class="error">Use MM/DD/YYYY.</small>\
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
                                                <input type="text" name="new_event_title" placeholder="Museum Christmas party." id="NewPhotoForEventTitle" required>\
                                                  <small class="error">How should I refer to this event?</small>\
                                              </div>\
                                              <div class="field--description">\
                                                <label class="label" for="NewPhotoForEventDescription">\
                                                  Provide Photography details:\
                                                  <small>required</small>\
                                                  <span data-tooltip class="has-tip tip-right" title="Objects, people, or locations to be photographed."><i class="fi-info"></i></span>\
                                                </label>\
                                                <textarea class="field--description__input" name="new_event_photo_description" placeholder="Photograph Abe Lincoln breakdancing." id="NewPhotoForEvent" required></textarea>\
                                                  <small class="error">What would you like photographed?</small>\
                                              </div>\
                                              <div class="field--date">\
                                                <label for="NewPhotoForEventDate" class="label">\
                                                  When should the photography occur?\
                                                  <small>required</small>\
                                                </label>\
                                                <input type="date" name="new_event_date" id="NewPhotoForEventDate" required pattern="month_day_year">\
                                                  <small class="error">Use MM/DD/YYYY.</small>\
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
                                                <textarea class="field--description__input" name="new_other_details" placeholder="Photograph the skyline from North Avenue beach in black and white." id="NewPhotoForOther" required></textarea>\
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
                                                    Provide the collection item IDs.\
                                                    <small>required</small>\
                                                    <span data-tooltip class="has-tip tip-right" title="ICHi, DN, SDN, or HB numbers.">\
                                                      <i class="fi-info"></i>\
                                                    </span>\
                                                  </label>\
                                                  <textarea class="field--description__input" name="existing_collection_ids" placeholder="ICHi-39255, DN-55555, and HB-12345" id="ExisitingCollectionNumber" required></textarea>\
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
                                                    <textarea class="field--description__input" name="existing_noncollection_description" placeholder="Photographs of wedding receptions in the Chicago Room." id="ExistingNonCollectionDescription" required></textarea>\
                                                      <small class="error">Tell me about the images.</small>\
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
                                      How will these images be used? \
                                      <small>required</small>\
                                    </label>\
                                    <textarea class="field--description__input" name="use_other_details" placeholder="The images will be used for the Peer Recogition awards." id="UseOtherDescription" required></textarea>\
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
 

  // CLIENTS
  // ON CHECK
  // HIDE details for all other client options,
  // SHOW details for external client, and
  // REINITIALIZE Abide
  $("#UseClientMuseum, #UseClientExternal").change(function() {
      if($(this).is(":checked") && $(this).val() == 'external client') {
        
        $('[id^=UseClient][id$=Details]').slideUp('slow', function() {
          $( "[id^=UseClient][id$=Details]" ).empty();
          });

        $( "#UseClientExternalDetails" ).html('<div class="field--description">\
                                            <label class="label" for="UseClientExternalName">\
                                              What is the name of the external client?\
                                              <small>required</small>\
                                            </label>\
                                            <input type="text" name="external_client_name" placeholder="Motorola" id="UseClientExternalName" required>\
                                            <small class="error">Who is the external client?</small>\
                                          </div>')
                                    .slideDown('slow');
       $('#PhotoAndImagingRequest').foundation({bindings: 'events'});
      }
      else {
        $('[id^=UseClient][id$=Details]').slideUp('slow', function() {
          $( "[id^=UseClient][id$=Details]" ).empty();
          });
        }
    });


  // *********
  // FILES
  // *********
    // ON CHECK
    // HIDE details for all other image quality options,
    // SHOW details for image quality other, and
  // REINITIALIZE Abide
  $("#FileQualityLowRes, #FileQualityEditorial, #FileQualityOther").change(function() {
      if($(this).is(":checked") && $(this).val() == 'Other') {
        
        $('[id^=FileQuality][id$=Details]').slideUp('slow', function() {
          $( "[id^=FileQuality][id$=Details]" ).empty();
          });

        $( "#FileQualityOtherDetails" ).html('<div class="field--description">\
                                                <label class="label" for="QualityOtherDescription">\
                                                  Describe the image quality needed.\
                                                  <small>required</small>\
                                                </label>\
                                                <textarea class="field--description__input" name="imgquality_other_details" placeholder="I need the files to be 600dpi." id="QualityOtherDescription" required></textarea>\
                                                <small class="error">What size and resolution is needed?</small>\
                                              </div>')
                                  .slideDown('slow');
       $('#PhotoAndImagingRequest').foundation({bindings: 'events'});
      }
      else {
        $('[id^=FileQuality][id$=Details]').slideUp('slow', function() {
          $( "[id^=FileQuality][id$=Details]" ).empty();
          });
        }
    });


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
                                                  <input type="text" name="delivery_network_path" placeholder="\\\\Ch-media\\Projects\\Unexpected Chicago\\2014" class="folder" id="FileFolderLocation" required>\
                                                    <small class="error">Use\\\\servername\\foldername</small>\
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
                                                <input type="email" name="delivery_email" placeholder="name@mail.com" required>\
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
                                                <textarea class="field--description__input" name="delivery_other" placeholder="Teleportation." id="FileDeliveryOtherDescription" required></textarea>\
                                                  <small class="error">Describe the delivery method.</small>\
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





  // *********
  // ALERTS
  // *********
      // NEW IMAGES
      // SHOW 2D Collection Items alert ON CHECK
      // HIDE 2D Collection Items alert ON UNCHECK
      $("#New2D").click(function() {
        $("#New2DAlert").fadeToggle( "slow", "linear" );
      });

      // SHOW 3D Collection Items alert ON CHECK
      // HIDE 3D Collection Items alert ON UNCHECK
      $("#New3D").click(function() {
        $("#New3DAlert").fadeToggle( "slow", "linear" );
      });

      // USE
      // SHOW Definite Restrictions alert when any new or exisiting collection items are CHECKED
      // HIDE Definite Restrictions alert ON UNCHECK
      $('#New2D, #New3D, #ExistingCollectionItem').click(function() {
        $("#CollectionsAlertDefinite").toggle(this.checked);
      });

      // SHOW Maybe Resctrictions alert when any new images that could be collections items are CHECKED
      // HIDE Maybe Restrictions alert ON UNCHECK
      $('#NewExibitionDoc, #NewPhotoForExhibition, #NewPhotoForMarketing, #NewPhotoForEvent, #NewPhotoForOther').click(function() {
        $("#CollectionsAlertMaybe").toggle(this.checked);
      });

      // FILE DELIVERY METHOD
      // SHOW Burn to Disc alert ON CHECK
      // HIDE Burn to Disc alert ON UNCHECK
      $("#FileDeliveryDisc").click(function() {
        $("#FileDiscAlert").fadeToggle( "slow", "linear" );
      });

      // FILE DELIVERY DATE
      // SHOW Large Batches alert IF New Images Service Menu is CHECKED
      // HIDE Large Batches alert ON UNCHECK
      $('#ServicesNew').click(function() {
        $("#LargeBatches").toggle(this.checked);
      });

