import React from 'react'

function Footer() {
  return (
    <div className='footer-area'>
        <div className='footer-con'>
            <h1>ZWIGGY</h1>
            <h3>AN ONLINE FOOD ORDERING APP</h3>
        </div>
        <div className='footer-con'>
            <ul>
                <li>Contact Us</li>
                <li>About Us</li>
                <li>Email Us</li>
                <li>300-4556-8754</li>
            </ul>
        </div>
        <div className='footer-con'>
            <h4>WE DELIVER TO:</h4>
            <ul>
                <li>Bangalore</li>
                <li>Kolkata</li>
                <li>Uttar Pradesh</li>
                <li>Bihar</li>
            </ul>
            <select name="Cities" id="">
                <option value="Kochi">Cities 589</option>
            </select>
        </div>
    </div>
  )
}

export default Footer