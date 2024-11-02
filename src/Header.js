import React from 'react';

function Header(props) {
    return(
        <header>
            <h1>Hello   {props.name}</h1>
            <h1>Age =  {props.age}</h1>
        </header>
    );
}
export default Header;