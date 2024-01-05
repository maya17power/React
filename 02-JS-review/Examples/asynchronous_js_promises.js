//# Utilize the 'fetch()' function to get data from external API
/*
fetch("URL")
    .then(FUNCTION CONVERT TO JSON) //promise method
    .then(FUNCTION GATHER DATA) //promise method
*/
//one way
// fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((response)=> response.json())
//     .then((data)=> console.log(data));

//cleaner way
async function getTodos(){
  const response =  await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  console.log(data);
}

getTodos();