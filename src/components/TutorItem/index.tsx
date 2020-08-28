import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';
import api from '../../services/api';

export interface Tutor{
        id: number;
        avatar: string
        bio: string;
        cost: number;
        name: string;
        subject: string;
        whatsapp: string;
    
}
interface TutorItemProps{
    tutor: Tutor;
}



const TutorItem: React.FC <TutorItemProps>= ({tutor}) => {

    function createNewConnection(){
        api.post('connections', {
            user_id: tutor.id
        })
    }

    return (<article className="tutor-item">
        <header>
            <img src={tutor.avatar} alt={tutor.name} />
            <div>
                <strong>{tutor.name}</strong>
                <span>{tutor.subject}</span>
            </div>
        </header>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum similique eos perspiciatis eius, voluptas dicta ut iure porro provident nemo beatae! Aliquid quod voluptate corrupti ullam minus, expedita totam placeat?</p>
        <footer><p>Hourly Price:</p>
        <strong>${tutor.cost}</strong>
            <a  onClick={createNewConnection} 
            href={`https://wa.me/${tutor.whatsapp}`} 
            type="button" 
            target= "blank">
                <img src={whatsappIcon} alt="whatsapp icon" />
                contact me</a>
        </footer>
    </article>)
}

export default TutorItem;