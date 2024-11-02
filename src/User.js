import './App.css';
let name="Nazmuddin Warsi S/O Shahabuddin";
const carobj={name:"Scorpio",colur:"White",make:"2022"}
let a=2;
let msg="";
if(a>5)
{
    msg="Hello";
}
else
{
    msg="Bye";
}
function User() {
    return (
      <div className="App">

       <h1>Hello Warsi</h1> 
       <h1>Learning never ends</h1>
       <h1>{name}</h1>
       <h1>{5+5}</h1>
       <h1>Car Name : {carobj.name}</h1>
       <h2>Car Color : {carobj.colur}</h2>
<h2>{msg}</h2>
<h2>{(a>5 )? "Hello Kumar":"Bye Kumar"}</h2>
      </div>
    );
  }
  
  export default User;