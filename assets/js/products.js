const productsSection = document.getElementById("product-section");

$.ajax({
    type : "post",
    url : "index.php?page=products",
    data: {
        products: true
    },
    success : function (data){
        console.log(data);
        products = JSON.parse(data);

        products.forEach((product) => {
            let description = product.body.substring(0, 80) + "...";
            productsSection.innerHTML += `<tr>
                                    <td class="p-2 align-middle bg-transparent border-white dark:border-white/40 whitespace-nowrap shadow-transparent">
                                        <div class="flex px-2 py-1">
                                            <div>
<!--                                                <img src="<?= PATH ?>assets/img/team-2.jpg" class="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user1" />-->
                                            </div>
                                            <div class="flex flex-col justify-center">
                                                <h6 class="mb-0 text-sm leading-normal dark:text-white">${product.title}</h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="p-2 w-1 align-middle bg-transparent border-white dark:border-white/40 whitespace-nowrap word-break">
                                        <p class="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">${description}</p>
                                    </td>

                                    <td class="mt-4 flex justify-between align-middle bg-transparent border-white dark:border-white/40 whitespace-nowrap shadow-transparent">
                                        <a  href="index.php?page=editproduct&id=${product.id}&title=${product.title}&body=${product.body}" class="editProduct mt-1.5 text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400"> Edit </a>
                                        <button > 
                                            <a data-product-id="${product.id}" class="deleteProduct text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400"> Delete </a>
                                        </button>
                                    </td>
                                </tr>`
        })
    }
})

