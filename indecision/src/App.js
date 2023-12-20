import logo from './logo.svg';
import './App.css';

console.log("App component running");

const title = {
  title: 'My Main Title',
  subtitle: 'My Sub Title',
  list: [
    'list Item 1',
    'list Item 2'
  ]
}

 function App() {
  return (
    <div>
      <h1>{title.title}</h1>
      {title.subtitle && <p>{title.subtitle}</p>}
      <p>{title.list.length > 0 ? 'Options Available' : 'No Available Options'}</p>
      <ol>
        
      </ol>
    </div>
  );
}

const user = {
  name: 'Gee',
  age: '18',
  location: "Los Angeles"
};

// const userName = "Jordan";
// const userAge = "27";
// const userLocation = "SF";

function getLocation(location){
  if(location){
    return <p>Location: {location}</p>;
  }
}

 function TemplateTwo(){
  return(
    <div>
    {/*use ternary operator to select ONE or OTHER*/}
      <h1>{user.name ? user.name : "Anonymous"}</h1>
      {/*use AND operator to select ONE or NOTHING*/}
      {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
      {getLocation(user.location)}
    </div>
  );
}

//Render Default
export default App;
