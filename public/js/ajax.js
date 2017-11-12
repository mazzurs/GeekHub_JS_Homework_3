(function () {

    var form = jQuery('#form');

    form.on('submit', function (event) {
        event.preventDefault();
        jQuery.ajax({
            method: 'POST',
            url: '/create-user',
            data: form.serialize(),
            success: function(result){
                $(".error").removeClass("error");

            },
            error: function (error) {
                if(error.responseJSON.numberss.error == 'Invalid numbers'){
                    $("input[name='numbers']").addClass('error');
                }
                else{
                    $("input[name='numbers']").removeClass('error');
                }

                if(error.responseJSON.letterss.error == 'Invalid letters'){
                    $("input[name='letters']").addClass('error');
                }
                else{
                    $("input[name='letters']").removeClass('error');
                }

                if(error.responseJSON.agreementt.error == 'Checkbox isnt true'){
                    $("input[name='agreement']").addClass('error');
                }
                else{
                    $("input[name='agreement']").removeClass('error');
                }

                if(error.responseJSON.typee.error == 'Radio isnt checked'){
                    $("input[type='radio']").addClass('error');
                }
                else{
                    $("input[type='radio']").removeClass('error');
                }
            }

        })
    })

})();

//
// $("input[name='numbers']").addClass("error");