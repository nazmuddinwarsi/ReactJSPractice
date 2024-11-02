import logo from './logo.svg';
import './App.css';
import Person from './Person';
const   friend=["Amit","Zain","Kumar","Ali"]
function House() {
  return (
      <Person name="Mohit" age={29}  isMarried={true}  arr={friend}   />
        
  );
}

export default House;
