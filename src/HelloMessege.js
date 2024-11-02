import React from "react";
function  HelloMessege(props)  {
return   (
    <header>
    <h1>Hello   {props.name}</h1>
    <h1>Age =  {props.age}</h1>
    {props.children}
</header>
);
}
export default HelloMessege