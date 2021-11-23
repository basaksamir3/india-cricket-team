import React from 'react';
import'./PlayerList.css'
const PlayerList = (props) => {
    const{name , img,salary} = props.product;
    
    // console.log(name);
    return (
        <div className = 'PlayerList'>
            <img src={img} alt="" />
            <h1>Name: {name}</h1>
            <p>Salary: ${salary}</p>
            <button onClick= {() => props.handleAddProduct(props.product)}>Add List</button>
        </div>
    );
};

export default PlayerList;