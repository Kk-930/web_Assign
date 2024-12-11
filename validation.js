// Add this script in the HTML or as a separate file (validation.js)
$(document).ready(function () {
    $('#registrationForm').on('submit', function (event) {
        event.preventDefault(); // Prevent form submission
        const formData = $(this).serialize(); // Collect form data
        $.ajax({
            url: 'submit.php',
            type: 'POST',
            data: formData,
            success: function (response) {
                $('#response').html(response).fadeIn();
            },
            error: function () {
                $('#response').html('An error occurred. Please try again.').fadeIn();
            }
        });
    });
});