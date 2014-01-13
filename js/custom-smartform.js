// shim for browsers that don't support the html5 placeholder attribute

setup_placeholders = (function() {
    $.support.placeholder = false;
    test = document.createElement('input');
    if('placeholder' in test) {
        $.support.placeholder = true;
        return function() {}
    } else {
        return function(){
            $(function() {
                var active = document.activeElement;
                $('form').delegate(':text', 'focus', function () {
                    var _placeholder = $(this).attr('placeholder'),
                        _val = $(this).val();
                    if (_placeholder != '' && _val == _placeholder) {
                        $(this).val('').removeClass('hasPlaceholder');
                    }
                }).delegate(':text', 'blur', function () {
                    var _placeholder = $(this).attr('placeholder'),
                        _val = $(this).val();
                    // No need to test for values specific to a particular jQuery version
                    // undefined and an empty string both are falsy
                    if (!_placeholder && ( _val == '' || _val == _placeholder)) {
                        $(this).val(_placeholder).addClass('hasPlaceholder');
                    }
                }).submit(function () {
                    $(this).find('.hasPlaceholder').each(function() { $(this).val(''); });
                });
                $(':text').blur();
                $(active).focus();
            });
        }
    }
})();




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