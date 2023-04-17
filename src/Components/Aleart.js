import React from 'react'

export const Aleart = (props) => {

  const captalize = (word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase()+ lower.slice(1);
  }
  return (
   <div style={{height:'70px'}}>

  
    {props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{captalize(props.alert.type)}</strong>:{props.alert.msg}
    </div>}
    </div>
  )
}
