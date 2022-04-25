import React from 'react'
import Logo from '../logo';
import "./styles.scss"

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <div className="container">
                <Logo  siteTitle={'site'}/>
                <p>Copyright Whole30 {currentYear}. All Rights Reserved.</p>
                <p><a href="https://whole30.com/privacy-policy/">Privacy Policy</a> | <a href="https://coach.whole30.com/terms-of-service">Terms and Conditions</a></p>
            </div>
        </footer>
    )
}

export default Footer
