import React from 'react'

export const TableBlock = (props) => {
  const onClickHandler = () => {
    if (typeof props.onExampleHandler === 'function') { 
      props.onExampleHandler(props.children)
    } else {
      return null;
    }
  }
  
  return (
    <div onClick={onClickHandler} className="table-block">{props.children}</div>
  )
}
