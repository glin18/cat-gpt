import React from 'react'
import CatIcon from "../images/cat-icon.png"

export const TableHeading = (props) => {
  return (
    <div className="table-heading">
        <img src={CatIcon}></img>
        <div>{props.children}</div>
    </div>
  )
}
