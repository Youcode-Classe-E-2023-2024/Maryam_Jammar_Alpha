 const userSection = document.getElementById("user-section");
 let clickedUserID;
    $.ajax({
    type: "POST",
    url: "index.php?page=users",
    data: {
    users: "test"
},
    success: (data) => {
    console.log(data);
    let users = JSON.parse(data);

    users.forEach((user) => {
    userSection.innerHTML += `<tr>
                                    <td class="p-2 align-middle bg-transparent border-white dark:border-white/40 whitespace-nowrap shadow-transparent">
                                        <div class="flex px-2 py-1">
                                            <div>
                                                <img src="assets/img/team-2.jpg" class="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user1" />
                                            </div>
                                            <div class="flex flex-col justify-center">
                                                <h6 class="mb-0 text-sm leading-normal dark:text-white">${user.name}</h6>
                                            </div>
                                        </div>
                                    </td>   
                                    <td class="p-2 align-middle bg-transparent border-white dark:border-white/40 whitespace-nowrap shadow-transparent">
                                        <p class="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">${user.email}</p>
                                    </td>
                                    <td class="mt-4 flex justify-between align-middle bg-transparent border-white dark:border-white/40 whitespace-nowrap shadow-transparent">
                                        <a  href="index.php?page=edit&id=${user.id}&name=${user.name}&email=${user.email}" class="editUser mt-1.5 text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400"> Edit </a>
                                        <button class=""> 
                                            <a data-user-id="${user.id}" class="deleteUser text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400"> Delete </a>
                                        </button>
                                    </td>
                                </tr>`


})

        $(document).ready(function () {
            // Edit product click event
            $('.editUser').click(function () {
                clickedUserID = $(this).data('user-id');
                let username = $(this).data('user-name');
                let userEmail = $(this).data('user-email');
                name.value = username;
                email.value = userEmail;
            });

            // Delete product click event
            $('.deleteUser').click(function () {
                clickedUserID = $(this).data('user-id');
                deleteUser(clickedUserID);
            });
        });

}
})


 function deleteUser(id) {
        $.ajax({
            type: "DELETE",
            url: "https://jsonplaceholder.typicode.com/users/" + id,
            success: (data, status) => {
                console.log(status);
     }
        })
 }


