$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour

            // get values from FORM
            var name = $form.find("#name").val();
            var email = $form.find("#email").val();
            var message = $form.find("#message").val();
            var reason = $form.find("#reason").val();

            var subject = "[New Contact] " + reason;

            console.log($form);

            $.ajax({
                url: 'https://suelencarvalho-api.appspot.com/sendEmail',
                method: 'POST',
                data: {
                    subject: subject,
                    name: name,
                    email: email,
                    message: message
                },
                cache: false,
                success: function() {
                    // Success message
                    $form.find('#success').html("<div class='alert alert-success'>");
                    $form.find('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $form.find('#success > .alert-success')
                        .append("Sua mensagem foi enviada. Obrigada pelo contato!");
                    $form.find('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $form.trigger("reset");
                },
                error: function() {
                    // Fail message
                    $form.find('#success').html("<div class='alert alert-danger'>");
                    $form.find('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $form.find('#success > .alert-danger').append("Desculpe, ocorreu algum problema. Por favor, tente novamente mais tarde!");
                    $form.find('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $form.trigger("reset");
                },
            });
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
