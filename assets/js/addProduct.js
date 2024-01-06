let formsDiv = document.querySelector('#formsP');
let addBtn = document.querySelector('#btn_addP');
let removeBtn = document.querySelector('#btn_removeP');
let s = document.querySelector('#s');
s.value = 1;

addBtn.addEventListener('click', ()=>{
    formsDiv.innerHTML += `
            <div class="flex flex-col">
                <div class="flex w-full justify-between">
                    <div class="relative z-0 mb-5 group w-fit">
                        <input type="text" name="title-${s.value}" id="title" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="title" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product name</label>
                    </div>
                    <div class="relative z-0 w-fit mb-5 group">
                        <input type="text" name="body-${s.value}" id="body" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="body" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                    </div>
                    
                </div>
            </div> `;
    i.value++;
});

removeBtn.addEventListener('click', () => {
    formsDiv.removeChild(formsDiv.children[s.value - 2]);
    s.value--;
});




$(document).ready(function () {
    $('#addProductForm').submit(function (e) {
        e.preventDefault();

        // Collect form data
        let formData = {
            title: $('#title').val(),
            body: $('#body').val()
        };

        // Send POST request to the server
        $.ajax({
            type: "POST",
            url: "https://jsonplaceholder.typicode.com/posts",
            data: { productData: formData },
            success: function (data, status) {
                if (status === "success") {
                    alert("Product has been added successfully!");
                } else {
                    alert("Failed to add product. Please try again.");
                }
                console.log(data)
            }
        });
    });
});
