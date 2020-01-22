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

						// Change to your service ID, or keep using the default service
					  var service_id = "default_service";
            var template_id = "template_21zDZej9";
            if ($form.find("#template_id").val()) {
            		template_id = $form.find("#template_id").val();
            		console.log("passou por aqui " + $form.find("#template_id").val());
            }

					  var message_params = {
						   "email": email,
						   "name": name,
						   "message": message,
						   "reason": reason
						}

					  emailjs.send(service_id, template_id, message_params)
					  	.then(function(){
                	$form.find('#success').html("<div class='alert alert-success'>");
                  $form.find('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                  .append("</button>");
                  $form.find('#success > .alert-success').append("Obrigada pelo contato!");
                  $form.find('#success > .alert-success').append('</div>');

					    }, function(err) {
					        $form.find('#success').html("<div class='alert alert-danger'>");
                  $form.find('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                  $form.find('#success > .alert-danger').append("Por favor, tente novamente.");
                  $form.find('#success > .alert-danger').append('</div>');
					    });

					  $form.trigger("reset");
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
