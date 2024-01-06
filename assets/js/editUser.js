$(document).ready(function () {
    $('#UpdateUser').submit(function (e) {
        e.preventDefault();

        // Collect form data
        let formData = {
            username: $('#username').val(),
            email: $('#email').val(),
        };

        // Send POST request to the server
        $.ajax({
            type: "PUT",
            url: `https://jsonplaceholder.typicode.com/users/${$('#id').val()}`,
            data: { userData: formData },
            success: function (data, status) {
                if (status === "success") {
                    alert("User has been updated successfully!");
                } else {
                    alert("Failed to update user. Please try again.");
                }
                console.log(data)
            }
        });
    });
});
