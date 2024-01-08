// row1 card1
$(document).ready(function () {
    const productCountElement = $('#productCount');

    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        dataType: 'json',
        success: function (data) {
            // Mettez à jour le texte du nombre de produits
            productCountElement.text(data.length);
        },
        error: function (error) {
            // Gérez l'erreur ici
            console.error('Error fetching products:', error);
            productCountElement.text('Error loading products');
        }
    });
});

// row1 card2
$(document).ready(function () {
    const productCountElement = $('#userCount');

    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users',
        dataType: 'json',
        success: function (data) {
            // Mettez à jour le texte du nombre de produits
            productCountElement.text(data.length);
        },
        error: function (error) {
            // Gérez l'erreur ici
            console.error('Error fetching products:', error);
            productCountElement.text('Error loading products');
        }
    });
});


// row2 card1
$(document).ready(function () {
    // Fetch both posts and users data
    $.when(
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts',
            dataType: 'json'
        }),
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users',
            dataType: 'json'
        })
    ).done(function (postsData, usersData) {
        const postsNumber = postsData[0].length;
        const usersNumber = usersData[0].length;

        // Calculate percentages
        const total = postsNumber + usersNumber;
        const postsPercentage = ((postsNumber / total) * 100).toFixed(2);
        const usersPercentage = ((usersNumber / total) * 100).toFixed(2);

        // Create a pie chart
        const optionsFour = {
            chart: {
                type: 'pie',
                height: 500
            },
            labels: ['Products', 'Users'],
            series: [postsNumber, usersNumber],  // Utilisez les données récupérées ici
            colors: ['#6577F3', '#0FADCF'],  // Couleurs correspondantes aux sections du pie chart
            legend: {
                show: true,
                position: 'bottom'
            }
        };

        const chartFour = new ApexCharts(document.querySelector("#chartFour"), optionsFour);
        chartFour.render();

        // Update UI with percentages
        $('.product-percentage').text(`${postsPercentage}%`);
        $('.users-percentage').text(`${usersPercentage}%`);
    }).fail(function (error) {
        console.error('Error fetching data:', error);
    });
});

// row2 card2
$(document).ready(function () {
    // Fetch both posts and users data
    $.when(
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts',
            dataType: 'json'
        }),
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users',
            dataType: 'json'
        })
    ).done(function (postsData, usersData) {
        const postsNumber = postsData[0].length;
        const usersNumber = usersData[0].length;

        // Create a bar chart
        const options = {
            chart: {
                type: 'bar',
                height: 200
            },
            series: [{
                name: 'Products',
                data: [postsNumber]
            }, {
                name: 'Users',
                data: [usersNumber]
            }],
            xaxis: {
                categories: ['Products', 'Users']
            }
        };

        const chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();
    }).fail(function (error) {
        //console.error('Error fetching data:', error);
    });
});


// row2 card1 product list
$(document).ready(function () {
    // Fetch product data from the API
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        dataType: 'json',
        success: function (products) {
            // Take only the first 10 products
            products.slice(0, 7).forEach(function (product) {
                $('#productList').append(`
                        <div class="flex">
                            <div class="inline-block w-8 h-8 mr-4 text-center text-black bg-center shadow-sm fill-current stroke-none bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 rounded-xl">
                                <i class="text-white ni leading-none ni-cart relative top-0.75 text-xxs"></i>
                            </div>
                            <div class="flex flex-col">
                                <h6 class="mb-1 text-sm leading-normal font-bold text-slate-700 dark:text-white">${product.title.substring(0, 50) + "..."}</h6>
                                <span class="text-xs leading-tight dark:text-white/80 mb-6">${product.body.substring(0, 50) + "..."}</span>
                            </div>
                        </div>
                    `);
            });
        },
        error: function (error) {
            console.error('Error fetching product data:', error);
        }
    });
});
