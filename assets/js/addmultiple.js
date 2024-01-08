$(document).ready(function () {
    let mainForm = $('#mainForm');
    let formsDiv = $('#forms');
    let addBtn = $('#btn_add');
    let removeBtn = $('#btn_remove');
    let i = $('#i');

    addBtn.click(function () {
        let newIndex = parseInt(i.val()) + 1;
        let newForm = formsDiv.children().first().clone();
        newForm.find('input[name^="username"]').attr('name', `username-${newIndex}`).val('');
        newForm.find('input[name^="email"]').attr('name', `email-${newIndex}`).val('');
        formsDiv.append(newForm);
        i.val(newIndex);
    });

    removeBtn.click(function () {
        if (parseInt(i.val()) > 1) {
            formsDiv.children().last().remove();
            i.val(parseInt(i.val()) - 1);
        }
    });

    mainForm.submit(function (e) {
        e.preventDefault();

        // Collect form data
        let formData = [];
        formsDiv.find('.sub-form').each(function (index) {
            formData.push({
                username: $(this).find(`input[name="username-${index + 1}"]`).val(),
                email: $(this).find(`input[name="email-${index + 1}"]`).val()
            });
        });

        $.ajax({
            type: "POST",
            url: "https://jsonplaceholder.typicode.com/users",
            data: { userData: formData },
            success: function (data, status) {
                if (status === "success") {
                    alert("Users have been added successfully!");
                } else {
                    alert("Failed to add users. Please try again.");
                }
                console.log(data);
            }
        });
    });
});