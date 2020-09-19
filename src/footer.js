import React from 'react';
import './footer.css'
import {Link} from 'react-router-dom';
import LanguageIcon from '@material-ui/icons/Language';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CopyrightIcon from '@material-ui/icons/Copyright';

function Footer(){
    return(
        <div className='footer'>
          <div className='footer__top'>
          <Link to='#' style={{textDecoration: 'none'}}>
                <div className='footer__backtotop'>
                       <p>Back to top</p>
                </div>
            </Link>
                <div className='footer__options'>
                    <div className='footer__option'>
                        <h4>Get to Know Us</h4>
                        <ul>
                            <li>Careers</li>
                            <li>Blog</li>
                            <li>About Amazon</li>
                            <li>Investor Relations</li>
                            <li>Amazon Devices</li>
                            <li>Amazon Tours</li>
                        </ul>
                    </div>
                    <div className='footer__option'>
                        <h4>Make Money with Us</h4>
                        <ul>
                            <li>Sell products on Amazon</li>
                            <li>Sel apps on Amazon</li>
                            <li>Become an Affiliate</li>
                            <li>Advertise Your Products</li>
                            <li>Self-Publish with Us</li>
                            <li>Host an Amazon Hub</li>
                            <li>See More Make Money with Us</li>
                        </ul>
                    </div>
                    <div className='footer__option'>
                        <h4>Amazon Payment Products</h4>
                        <ul>
                            <li>Amazon Business Card</li>
                            <li>Shop with Points</li>
                            <li>Reload Your Balance</li>
                            <li>Amazon Currency Converter</li>
                        </ul>
                    </div>
                    <div class='footer__option'>
                        <h4>Let Us Help You</h4>
                        <ul>
                            <li>Amazon and COVID-19</li>
                            <li>Your Account</li>
                            <li>Your Orders</li>
                            <li>Shipping Rates & Policies</li>
                            <li>Returns & Replacements</li>
                            <li>Manage Your Content and Devices</li>
                            <li>Amazon Assistant</li>
                            <li>Help</li>
                        </ul>
                    </div>
                </div>
             
                <div className='footer__middle'>
                    <div className='footer__middle1'>
                        <img className='footer__middleLogo' src= 'http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt=''/>
                        <div className='footer__middleitems'>
                                <LanguageIcon className='footer__Icon'/>English
                        </div>
                        <div className='footer__middleitems'>
                                <AttachMoneyIcon className='footer__Icon' />USD - U.S. Dollar
                        </div>
                        <div className='footer__middleitems'>
                                    United States
                        </div>
                    </div>
                      
                </div>
                <div className='footer__bottom'>
                    <div className='footer__bottom1'>
                        <p>Conditions of Use</p>
                        <p>Privacy Notice</p>
                         <p>Interest-Based Ads <span> <CopyrightIcon className='copyIcon'/> 1996-2020, Amazon-clone.com, Inc. or its affliates</span></p>
                    </div>
                   
                </div>
          </div>
           
        
        </div>
    )
}

export default Footer;