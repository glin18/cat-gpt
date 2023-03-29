import React from 'react'

export const NewCat = ({onNewChat}) => {
  return (
    <div className="new-cat" onClick={onNewChat}>
        <div className="new-cat-plus">+</div>
        <div className="new-cat-text">New cat</div>
    </div>
  )
}
