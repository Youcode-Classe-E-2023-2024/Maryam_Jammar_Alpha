$(document).on('click', '.deleteProduct', function () {
    let productId = $(this).data('product-id');
    // console.log(productId)

    $.ajax({
        type: "DELETE",
        url: "https://jsonplaceholder.typicode.com/posts/" + productId,
        success: function (data, status) {
            if (status === "success") {
                alert("Product" + productId + " has been deleted successfully!");
                console.log(status)
            }
            else{
                alert("Failed to delete product . Please try again.");
            }
        }
    });
});