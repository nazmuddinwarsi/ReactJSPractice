import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';


function Person(props) {
  return (
    <div className="App">
    <div className="new"></div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {props.name} lives here
        
        </p>
        <p>
         Age: {props.age}
        </p>
        <p>Marrige :   {props.isMarried.toString()}</p>
        <p>Marrige :   {String(props.isMarried)}</p>
        <p>{props.arr}</p>
        <p>{props.arr[1]}</p>
      </header>
    </div>
  );
}
Person.propTypes={
  name: PropTypes.string,
  age: PropTypes.number,
  isMarried:PropTypes.bool
}
Person.defaultProps={
  name:'Anonymouse',
  age:18
}
export default Person;
