
function App(){
    return (
        <div>
            Hello world!
        </div>
    );
};

const nameLet = "gee";
console.log('nameLet',nameLet);

let fullName = "Gee San";

if(fullName){
    const firstName = fullName.split(' ')[0];
    const lastName = fullName.split(' ')[1];
    console.log('first name: '+firstName);
    console.log('last name: ' + lastName);
}

















export default App;