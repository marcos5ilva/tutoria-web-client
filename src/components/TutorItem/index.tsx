import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

const TutorItem = () => {
    return (<article className="tutor-item">
        <header>
            <img src="https://avatars0.githubusercontent.com/u/1906592?s=460&v=4" alt="" />
            <div>
                <strong>Marcos Silva</strong>
                <span>JavaScript</span>
            </div>
        </header>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum similique eos perspiciatis eius, voluptas dicta ut iure porro provident nemo beatae! Aliquid quod voluptate corrupti ullam minus, expedita totam placeat?</p>
        <footer><p>Hourly Price:</p>
            <strong>$50.00</strong>
            <button type="button">
                <img src={whatsappIcon} alt="whatsapp icon" />
        contact me</button>
        </footer>
    </article>)
}

export default TutorItem;