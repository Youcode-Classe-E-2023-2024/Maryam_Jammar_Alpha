$(document).ready(function () {
    let mainForm = $('#mainForm');
    let formsDiv = $('#forms');
    let addBtn = $('#btn_add');
    let removeBtn = $('#btn_remove');
    let s = $('#s');

    addBtn.click(function () {
        let newIndex = parseInt(s.val()) + 1;
        let newForm = formsDiv.children().first().clone();
        newForm.find('input[name^="title"]').attr('name', `title-${newIndex}`).val('');
        newForm.find('input[name^="body"]').attr('name', `body-${newIndex}`).val('');
        formsDiv.append(newForm);
        s.val(newIndex);
    });

    removeBtn.click(function () {
        if (parseInt(s.val()) > 1) {
            formsDiv.children().last().remove();
            s.val(parseInt(s.val()) - 1);
        }
    });

    mainForm.submit(function (e) {
        e.preventDefault();

        // Collect form data
        let formData = [];
        formsDiv.find('.sub-form').each(function (index) {
            formData.push({
                username: $(this).find(`input[name="title-${index + 1}"]`).val(),
                email: $(this).find(`input[name="body-${index + 1}"]`).val()
            });
        });

        $.ajax({
            type: "POST",
            url: "https://jsonplaceholder.typicode.com/posts",
            data: { userData: formData },
            success: function (data, status) {
                if (status === "success") {
                    alert("Products have been added successfully!");
                } else {
                    alert("Failed to add products. Please try again.");
                }
                console.log(data);
            }
        });
    });
});