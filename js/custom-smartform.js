// 
// 
// New Images
// 
// 

$('#isnewimagesselected').click(function() {
    $("#newchoices").toggle(this.checked);
});

$('#is2dselected').click(function() {
    $("#txt2dinstructions").toggle(this.checked);
});

$('#is3dselected').click(function() {
    $("#txt3dinstructions").toggle(this.checked);
});

$('#isexhibitiondocumentation').click(function() {
    $("#labelfor_exhibitiondocumentation").toggle(this.checked);
});

$('#isexhibitiondocumentation').click(function() {
    $("#exhibitiondocumentation").toggle(this.checked);
});

$('#isexhibitiondocumentation').click(function() {
    $("#labelfor_datetime_exhibitiondoc").toggle(this.checked);
});

$('#isexhibitiondocumentation').click(function() {
    $("#datetime_exhibitiondoc").toggle(this.checked);
});

$('#isphotographyexhibitions').click(function() {
    $("#labelfor_photographyexhibitions").toggle(this.checked);
});

$('#isphotographyexhibitions').click(function() {
    $("#photographyexhibitions").toggle(this.checked);
});

$('#isphotographyexhibitions').click(function() {
    $("#labelfor_photography_exhibitions_details").toggle(this.checked);
});

$('#isphotographyexhibitions').click(function() {
    $("#photography_exhibitions_details").toggle(this.checked);
});

$('#isphotographyexhibitions').click(function() {
    $("#labelfor_datetime_photographyexhibitions").toggle(this.checked);
});

$('#isphotographyexhibitions').click(function() {
    $("#datetime_photographyexhibitions").toggle(this.checked);
});

$('#ismarketingselected').click(function() {
    $("#labelfor_marketing").toggle(this.checked);
});

$('#ismarketingselected').click(function() {
    $("#marketing").toggle(this.checked);
});

$('#ismarketingselected').click(function() {
    $("#labelfor_datetime_marketing").toggle(this.checked);
});

$('#ismarketingselected').click(function() {
    $("#datetime_marketing").toggle(this.checked);
});

$('#iseventselected').click(function() {
    $("#labelfor_event").toggle(this.checked);
});

$('#iseventselected').click(function() {
    $("#event").toggle(this.checked);
});

$('#iseventselected').click(function() {
    $("#labelfor_datetime_event").toggle(this.checked);
});

$('#iseventselected').click(function() {
    $("#datetime_event").toggle(this.checked);
});

$('#isotherserviceselected').click(function() {
    $("#labelfor_photoservice_other_textarea").toggle(this.checked);
});

$('#isotherserviceselected').click(function() {
    $("#photoservice_other_textarea").toggle(this.checked);
});

// 
// 
// Existing Images
// 
// 

$('#isexistingimagesselected').click(function() {
    $("#existingchoices").toggle(this.checked);
});

$('#iscollectionsselected').click(function() {
    $("#labelfor_photoservice_collections_textarea").toggle(this.checked);
});

$('#iscollectionsselected').click(function() {
    $("#photoservice_collections_textarea").toggle(this.checked);
});

$('#isservicenoncollectionsselected').click(function() {
    $("#labelfor_service_noncollections_items_details_textarea").toggle(this.checked);
});

$('#isservicenoncollectionsselected').click(function() {
    $("#service_noncollections_items_details_textarea").toggle(this.checked);
});

// 
// 
// Image Quality
// 
// 
$('#isotherspecs').click(function() {
    $("#labelfor_imgquality_other_textarea").toggle(this.checked);
});

$('#isotherspecs').click(function() {
    $("#imgquality_other_textarea").toggle(this.checked);
});

// 
// 
// Planned Use
// 
// 

$('#is2dselected, #is3dselected, #isotherserviceselected, #iscollectionsselected').click(function() {
     $("#restrictions").toggle(this.checked);
});


$('#isotheruse').click(function() {
    $("#labelfor_use_other_textarea").toggle(this.checked);
});

$('#isotheruse').click(function() {
    $("#use_other_textarea").toggle(this.checked);
});

// 
// 
// External Client
// 
// 

$('#isexternalclient').click(function() {
    $("#labelfor_externalclient_name").toggle(this.checked);
});

$('#isexternalclient').click(function() {
    $("#externalclient_name").toggle(this.checked);
});

// 
// 
// Delivery Method
// 
// 

$('#isserverselected').click(function() {
    $("#labelfor_folderlocation").toggle(this.checked);
});

$('#isserverselected').click(function() {
    $("#folderlocation").toggle(this.checked);
});

$('#isemailselected').click(function() {
    $("#deliveryemail").toggle(this.checked);
});

$('#isburnselected').click(function() {
    $("#txtburninstructions").toggle(this.checked);
});

$('#isdeliveryother').click(function() {
    $("#labelfor_delivery_other_textarea").toggle(this.checked);
});

$('#isdeliveryother').click(function() {
    $("#delivery_other_textarea").toggle(this.checked);
});

$('#isnewimagesselected').click(function() {
     $("#largebatches").toggle(this.checked);
});


// 
// 
// Formatter
// 
// 

$('#phone').formatter({
  'pattern': '({{999}}) {{999}}-{{9999}}',
  'persistent': true
});

$('#account').formatter({
  'pattern': '{{999}}-{{999}}-{{9999}}-{{9999}}',
  'persistent': true
});

$('#date').formatter({
  'pattern': '{{99}}-{{99}}-{{9999}}',
  'persistent': true
});