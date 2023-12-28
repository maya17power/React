//# Utilize the 'fetch()' function to get data from external API
/*
fetch("URL")
    .then(FUNCTION CONVERT TO JSON) //promise method
    .then(FUNCTION GATHER DATA) //promise method
*/

fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response)=> response.json())
    .then((data)=> console.log(data));