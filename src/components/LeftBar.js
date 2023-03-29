import React from 'react'
import { NewCat } from "./NewCat"

export const LeftBar = ({onNewChat}) => {
  return (
    <div className="left-bar">
        <NewCat onNewChat={onNewChat}/>
    </div>
  )
}
