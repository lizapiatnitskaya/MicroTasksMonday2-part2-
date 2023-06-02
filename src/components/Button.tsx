import React from 'react';

type ButtonPropsType={
    name:string
    callBack:()=>void
}

export const Button =(props:ButtonPropsType)=>{
    const buttonOnClickHandler=()=>{
        props.callBack()
    }
    return(
        <div>
            <button onClick={buttonOnClickHandler}>{props.name}</button>
        </div>
    )
}

