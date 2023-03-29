import React from 'react'
import SubmitArrow from "../images/submit-arrow.png"

export const InputBar = ({ onSubmitHandler, onChangeHandler }) => {
  return (
    <div className="input-bar-container">
        <form onSubmit={onSubmitHandler}>
            <input type="text" onChange={onChangeHandler}></input>
            <button type="submit">
                <img src={SubmitArrow}></img>
            </button>
        </form>
    </div>
  )
}
