import React from 'react'
import SubmitArrow from "../images/submit-arrow.png"

export const InputBar = () => {
  return (
    <div className="input-bar-container">
        <form>
            <input type="text"></input>
            <button type="submit">
                <img src={SubmitArrow}></img>
            </button>
        </form>
    </div>
  )
}
