function test() {
    fetch('http://localhost:4004/php/filterAPI.php?name=item1&description=&type=1')
        .then(response => response.json())
        .then(data => console.log(data));
}

// function test() {
//     fetch('http://localhost/logRegAPI.php?email=obraznicul38@gmail.com&user=SlopestylePro').then(response => response.body).then(body => {
//         const reader = body.getReader();
//         reader.read().then(({ done, value }) => {
//             var data = new TextDecoder("utf-8").decode(value);
//             data = JSON.parse(data);
//             console.log(data);
//         });

//     });
// }

// test()