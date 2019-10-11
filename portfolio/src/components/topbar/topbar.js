import React from 'react';
import {Link, Element} from 'react-scroll';

import PDF from '../../CV.pdf';
import './topbar.css';

const TopbarItem = ({title}) => {
    return <div className="topbaritem">
        <div>{title}</div>
    </div>
}

const handleResumeClick = () => {
    //window.open={PDF};

}

const handleLinkedInClick = () => {
    window.location="https://www.linkedin.com/in/joakim-lilja/";
}

const Topbar = () => {
    return <div className={"wrapper"}>
        <h1>Joakim Lilja</h1>
        <div className={"linkWrapper"}>
        <div><Link to="about" smooth={true}>About me</Link></div>
        <div><Link to="projects" smooth={true}>My projects</Link></div>
        <div onClick={handleResumeClick}><a href={PDF} >Résumé</a></div>
        <div><Link to="contact" smooth={true}>Contact</Link></div>
        <div onClick={handleLinkedInClick}><i className="fab fa-linkedin"></i></div>
        </div>
    </div>
}

export default Topbar;