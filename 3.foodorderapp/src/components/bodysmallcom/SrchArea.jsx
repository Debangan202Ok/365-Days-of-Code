import React from 'react'

function SrchArea(srchProps) {
    const {inputVal, setInputVal, srchVal} = srchProps
  return (
    <div className="custom-area">
    <div className="srch-area">
      <input
        className="srch-box"
        type="search"
        name=""
        id=""
        placeholder="Search Food or Resturant"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button onClick={srchVal}>Search</button>
    </div>
    <button className="btn-fltr">{"Filter"}</button>
  </div>
  )
}

export default SrchArea