$(document).ready(function () {
    $('#UpdateProduct').submit(function (e) {
        e.preventDefault();

        // Collect form data
        let formData = {
            title: $('#title').val(),
            body: $('#body').val(),
        };

        // Send POST request to the server
        $.ajax({
            type: "PUT",
            url: `https://jsonplaceholder.typicode.com/posts/${$('#id').val()}`,
            data: { productData: formData },
            success: function (data, status) {
                if (status === "success") {
                    alert("Product has been updated successfully!");
                } else {
                    alert("Failed to update product. Please try again.");
                }
                console.log(data)
            }
        });
    });
});
