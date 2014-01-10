$('#is2dselected').click(function() {
    $("#txt2dinstructions").toggle(this.checked);
});
  

$('#is3dselected').click(function() {
    $("#txt3dinstructions").toggle(this.checked);
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
    $("#e-mail").toggle(this.checked);
});

// $(document)
//   .foundation()
//   .foundation('abide', {
//     patterns: {
//       account-number: /^([0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9])$/
//     }
//   });