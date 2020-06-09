function showStats(){
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
            labels: ['Total users', 'Total items', 'Total claimed items', 'Total owned items',  'Unowned Items'],
            datasets: [{
                label: 'Statistics',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [data['usersCount'], data['itemsCount'], data['claimedCount'], data['ownedCount'], data['itemsCount']-data['ownedCount'], 30, 45]
            },]
        },

        // Configuration options go here
        options: {}
});


});
}
function showTop(){
    var api = 'http://localhost/php/chartsAPI.php?operation=top';
    
    fetch(api)
        .then(result => result.json())
        .then(data => {

        console.log(data['topDesc']);

    }); 
}

function populateRSS(){
    
var myvar = '<?xml version="1.0" encoding="UTF-8" ?>'+
            '<rss version="2.0">'+
            ''+
            '<channel>'+
            '  <title>W3Schools Home Page</title>'+
            '  <link>https://www.w3schools.com</link>'+
            '  <description>Free web building tutorials</description>'+
            '  <item>'+
            '    <title>RSS Tutorial</title>'+
            '    <link>https://www.w3schools.com/xml/xml_rss.asp</link>'+
            '    <description>New RSS tutorial on W3Schools</description>'+
            '  </item>'+
            '  <item>'+
            '    <title>XML Tutorial</title>'+
            '    <link>https://www.w3schools.com/xml</link>'+
            '    <description>New XML tutorial on W3Schools</description>'+
            '  </item>'+
            '</channel>'+
            ''+
            '</rss>';
	// paused till making the image

}