import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import tutoringIcon from '../../assets/images/icons/give-classes.svg';
import heartIcon from '../../assets/images/icons/purple-heart.svg';
import './styles.css';

const Landing = () => {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Tutoria logo" />
                    <h2>Your online tutoring platform</h2>


                </div>
                <img src={landingImg}
                    alt="Learning platform"
                    className="hero-img"
                />
                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Learning" />
                        Learn
                    </Link>
                    <Link to="/teach" className="teach">
                        <img src={tutoringIcon} alt="Tutoring" />
                        Teach
                    </Link>
                </div>
                <span className="total-connections">Total of 200 student-tutors connected <img src={heartIcon} alt="H /eart icon" /></span>
            </div>
        </div>
    )
}

export default Landing;