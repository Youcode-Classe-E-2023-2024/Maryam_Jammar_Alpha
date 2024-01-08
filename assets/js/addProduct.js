$(document).ready(function () {
    let mainForm = $('#mainForm');
    let formsDiv = $('#forms');
    let addBtn = $('#btn_add');
    let removeBtn = $('#btn_remove');
    let s = $('#s');

    // ... Your existing code

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

        // Send data to the server
        $.ajax({
            type: "POST",
            url: "https://jsonplaceholder.typicode.com/posts",
            data: { userData: formData },
            success: function (data, status) {
                if (status === "success") {
                    // Display success notification in the specific li element
                    let notificationLi = `
                        <li class="relative mb-2">
                            <a class="dark:hover:bg-slate-900 ease py-1.2 clear-both block w-full whitespace-nowrap rounded-lg bg-transparent px-4 duration-300 hover:bg-gray-200 hover:text-slate-700 lg:transition-colors" href="javascript:;">
                                <div class="flex py-1">
                                    <div class="my-auto">
                                        <img src="../assets/img/team-2.jpg" class="inline-flex items-center justify-center mr-4 text-sm text-white h-9 w-9 max-w-none rounded-xl" />
                                    </div>
                                    <div class="flex flex-col justify-center">
                                        <h6 class="mb-1 text-sm font-normal leading-normal dark:text-white"><span class="font-semibold">New message</span> from Laur</h6>
                                        <p class="mb-0 text-xs leading-tight text-slate-400 dark:text-white/80">
                                            <i class="mr-1 fa fa-clock"></i>
                                            13 minutes ago
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </li>`;

                    // Append the notification to the dropdown
                    $('#yourDropdownId').append(notificationLi);

                    // Optionally, you can also trigger the dropdown to open
                    // $('#yourDropdownTrigger').trigger('click');
                } else {
                    // Display error notification (if needed)
                    Toastify({
                        text: "Failed to add products. Please try again.",
                        duration: 3000,
                        gravity: "top",
                        position: 'right',
                        backgroundColor: "#FF6347",
                    }).showToast();
                }
                console.log(data);
            }
        });
    });
});
