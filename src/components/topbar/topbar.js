import React, {useState} from 'react';
import {Link} from 'react-scroll';
import PDF from '../../CV.pdf';
import './topbar.css';

const handleLinkedInClick = () => {
    window.location="https://www.linkedin.com/in/joakim-lilja/";
}

const handleMenuClick = () => {

}

const Topbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div className={"wrapper"}>
        <h1>Joakim Lilja</h1>
        <div className={"linkWrapper"}>
            <div><Link to="about" smooth={true}><i class="far fa-question-circle Icon"></i>About me</Link></div>
            <div><Link to="projects" smooth={true}><i class="fas fa-gamepad Icon"></i>My projects</Link></div>
            <div><a href={PDF}><i class="far fa-file Icon"></i>Résumé</a></div>
            <div><Link to="contact" smooth={true}><i class="far fa-comments Icon"></i>Contact</Link></div>
            <div onClick={handleLinkedInClick}><i className="fab fa-linkedin"></i></div>
        </div>
        <div className="collapsedWrapper">
            <i onClick={() => setIsOpen(!isOpen)} class="fas fa-bars dropdownIcon"></i>
            {isOpen &&
                <div className="dropDownMenu">
                    <div><Link to="about" smooth={true}><i class="far fa-question-circle Icon"></i>About me</Link></div>
                    <div><Link to="projects" smooth={true}><i class="fas fa-gamepad Icon"></i>My projects</Link></div>
                    <div><a href={PDF}><i class="far fa-file Icon"></i>Résumé</a></div>
                    <div><Link to="contact" smooth={true}><i class="far fa-comments Icon"></i>Contact</Link></div>
                    <div onClick={handleLinkedInClick}><i className="fab fa-linkedin"></i></div>
                </div>
            }
        </div>
    </div>
}



export default Topbar;