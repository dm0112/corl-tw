function showStats() {
    var api = 'http://localhost/php/chartsAPI.php?operation=charts';

    fetch(api)
        .then(result => result.json())
        .then(data => {


            ////// items count - owned amount de facut aici

            var ctx = document.getElementById('myChart').getContext('2d');
            var chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'bar',

                // The data for our dataset
                data: {
                    labels: ['Total users', 'Total items', 'Total claimed items', 'Total owned items', 'Unowned Items'],
                    datasets: [{
                        label: 'Statistics',
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: [data['usersCount'], data['itemsCount'], data['claimedCount'], data['ownedCount'], data['itemsCount'] - data['ownedCount'], 30, 45]
                    }, ]
                },

                // Configuration options go here
                options: {}
            });


        });
}

function showTop() {
    var api = 'http://localhost/php/chartsAPI.php?operation=top';

    fetch(api)
        .then(result => result.json())
        .then(data => {
            cleanPage();
            populate(data['topDesc']);
            //console.log(data['topDesc']);

        });
}
