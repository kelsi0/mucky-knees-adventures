import React from 'react';
import {Link} from 'react-router-dom';
import wideImage from '../../assets/images/double-logo.png';
import smallerImage from '../../assets/images/simple-logo.png';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const Header = ({ title, subtitle, showButton, link, buttonText }) => {
    const { width } = useWindowDimensions();
    const image = width >= 768 ? wideImage : smallerImage;

    return(
        /* <!-- Masthead--> */
        <header className="masthead" >       
            <div className="headerContainer">
                <div className='header--container' style={{ backgroundImage: `url(${image})` }}>
                    <div className="header--title">{title}</div>
                    <div className="header--subtitle">{subtitle}</div>
                    <div className="masthead-button">{
                    showButton &&
                        <Link className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" to={link}>{buttonText}</Link>
                    }
                    </div>
                </div>
            </div>
        </header>
    );           
}

export default Header;