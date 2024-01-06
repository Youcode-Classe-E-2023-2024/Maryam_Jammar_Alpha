let formsDiv = document.querySelector('#forms');
let addBtn = document.querySelector('#btn_add');
let removeBtn = document.querySelector('#btn_remove');
let i = document.querySelector('#i');
i.value = 1;

addBtn.addEventListener('click', ()=>{
    formsDiv.innerHTML += `
            <div class="flex flex-col">
                <div class="flex w-full justify-between">
                    <div class="relative z-0 mb-5 group w-fit">
                        <input type="text" name="username-${i.value}" id="username" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="username" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
                    </div>
                    <div class="relative z-0 w-fit mb-5 group">
                        <input type="email" name="email-${i.value}" id="email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                    </div>
                    
                </div>
            </div> `;
    i.value++;
});

removeBtn.addEventListener('click', () => {
    formsDiv.removeChild(formsDiv.children[i.value - 2]);
    i.value--;
});


$(document).ready(function () {
    $('#addUserForm').submit(function (e) {
        e.preventDefault();

        // Collect form data
        let formData = {
            username: $('#username').val(),
            email: $('#email').val()
        };

        // Send POST request to the server
        $.ajax({
            type: "POST",
            url: "https://jsonplaceholder.typicode.com/users",
            data: { userData: formData },
            success: function (data, status) {
                if (status === "success") {
                    alert("User has been added successfully!");
                } else {
                    alert("Failed to add user. Please try again.");
                }
                console.log(data)
            }
        });
    });
});
