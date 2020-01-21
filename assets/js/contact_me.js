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

                    if ($form.id = 'kanbanForm') {
                    	$form.find('#success').html("<div class='alert alert-success' style='color: black'>");
	                    $form.find('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
	                        .append("</button>");
	                    $form.find('#success > .alert-success')
	                        .append("Acesse o <a style='color: black' href='https://trello.com/b/HeKK3FwB/modelo-metas-2020' target='_blank'>Modelo de Quandro Kanban para Metas 2020</a>");
	                    $form.find('#success > .alert-success')
	                        .append('</div>');
                    } else {
                    	$form.find('#success').html("<div class='alert alert-success'>");
	                    $form.find('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
	                        .append("</button>");
	                    $form.find('#success > .alert-success')
	                        .append("Obrigada pelo contato!");
	                    $form.find('#success > .alert-success')
	                        .append('</div>');
                    }

                    //clear all fields
                    $form.trigger("reset");
                },
                error: function() {
                    // Fail message
                    $form.find('#success').html("<div class='alert alert-danger'>");
                    $form.find('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $form.find('#success > .alert-danger')
                        .append("Desculpe não foi, tente novamente.");
                    $form.find('#success > .alert-danger')
                        .append('</div>');

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
