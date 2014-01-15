$("input[placeholder]").each(function(){
  if($(this).val()==""){
    $(this).val($(this).attr("placeholder"));
    $(this).focus(function(){
      if($(this).val()==$(this).attr("placeholder")) $(this).val("");
    });
    $(this).blur(function(){
      if($(this).val()==""){
         $(this).val($(this).attr("placeholder"));
      }
     });
  }
});






$('#is2dselected').click(function() {
    $("#txt2dinstructions").toggle(this.checked);
});

$('#is3dselected').click(function() {
    $("#txt3dinstructions").toggle(this.checked);
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
    $("#photographyexhibitions").toggle(this.checked);
});

$('#isphotographyexhibitions').click(function() {
    $("#labelfor_datetime_photographyexhibitions").toggle(this.checked);
});

$('#isphotographyexhibitions').click(function() {
    $("#datetime_photographyexhibitions").toggle(this.checked);
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
    $("#event").toggle(this.checked);
});

$('#iseventselected').click(function() {
    $("#labelfor_datetime_event").toggle(this.checked);
});

$('#iseventselected').click(function() {
    $("#datetime_event").toggle(this.checked);
});


$('#isburnselected').click(function() {
    $("#txtburninstructions").toggle(this.checked);
});

$('#isotherserviceselected').click(function() {
    $("#photoservice_other_textarea").toggle(this.checked);
});

$('#iscollectionsselected').click(function() {
    $("#photoservice_collections_textarea").toggle(this.checked);
});

$('#isdeliveryother').click(function() {
    $("#delivery_other_textarea").toggle(this.checked);
});

$('#isserverselected').click(function() {
    $("#folderlocation").toggle(this.checked);
});

$('#isemailselected').click(function() {
    $("#email").toggle(this.checked);
});

$('#isotherspecs').click(function() {
    $("#imgquality_other_textarea").toggle(this.checked);
});

$('#isotheruse').click(function() {
    $("#use_other_textarea").toggle(this.checked);
});

$('#isexternalclient').click(function() {
    $("#externalclient_name").toggle(this.checked);
});

// $(document)
//   .foundation()
//   .foundation('abide', {
//     patterns: {
//       account-number: /^([0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9])$/
//     }
//   });