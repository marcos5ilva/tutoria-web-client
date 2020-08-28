import React, {useState, FormEvent} from 'react';
import {useHistory} from 'react-router-dom';
import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input';
import waringIcon from '../../assets/images/icons/warning.svg'
import './styles.css';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../services/api';


const TutorForm = () => {
    const history = useHistory();
    const [name, setName]= useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp]=useState('');
    const[bio, setBio] = useState( '');
    const[subject, setSubject] = useState('');
    const[cost, setCost]=useState('');

const [ scheduleItems, setScheduleItems]  = useState( [
    { week_day: 0, from: '', to: ''}
]);


function addNewScheduleItem(){
    setScheduleItems([
        ...scheduleItems, { week_day: 0, from: '', to: ''}
    ])
};

function setScheduleItemValue(indexPosition: number, field:string, value:string){
    const updatedScheduleArray = scheduleItems.map((scheduleItem, index)=>{
        if(index === indexPosition){
            return { ...scheduleItem, [field]: value}
        }
        return scheduleItem;
    })

    setScheduleItems(updatedScheduleArray );
}

function handleCreateLesson(e: FormEvent){
    e.preventDefault();

    api.post('lessons', {
        name,
        avatar,
        whatsapp,
        bio,
        subject: subject,
        cost : Number(cost),
        schedule: scheduleItems
    })
    .then(()=>{
        alert('Successfully registered!');
        history.push('/');
    })
    .catch((error)=>{
        alert('Error on registering');
        console.log(error);
    })
    
}

    return (<div id="page-tutor-form" className="container">
        <PageHeader title="That's great you want to teach!" 
        description="The first step..."/>
        <main>
            <form onSubmit={handleCreateLesson}>
            <fieldset>
                <legend>Your Info</legend>
                <Input name="name" label="Full Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                <Input name="avatar" label="Avatar" value={avatar} onChange={(e)=>{setAvatar(e.target.value)}}/>
                <Input name="whatsapp" label="Whatsapp" value={whatsapp} onChange={(e)=>{setWhatsapp(e.target.value)}}/>
                <Textarea name="bio" label="biography" value={bio} onChange={(e)=>{setBio(e.target.value)}}/>
            </fieldset>
            <fieldset>
                <legend>About the Course</legend>
                <Select 
                name="subject" 
                label="Course"
                value={subject} 
                onChange={(e)=>{setSubject(e.target.value)}}
                 options={[
                {value: 'JavaScript', label: 'JavaScript'},
                {value: 'Typescript', label: 'TypeScript'}]}
                />
                <Input name="price"  label="Price per Class"value={cost} onChange={(e)=>{setCost(e.target.value)}} />
            </fieldset>
            <fieldset>
                <legend>Schedule <button type="button" onClick={addNewScheduleItem}>+ Add Schedule</button></legend>
               
               { scheduleItems.map((scheduleItem, index) =>{
                   return(
                    <div key={scheduleItem.week_day} className="schedule-item">
                    <Select name="week_day"  label="Week day" 
                    value={scheduleItem.week_day}
                    onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                    options={[
                     {value: '0', label: 'Sun'},
                     {value: '1', label: 'Mon'},
                     {value: '2', label: 'Tue'},
                     {value: '3', label: 'Wed'},
                     {value: '4', label: 'Thu'},
                     {value: '5', label: 'Fri'},
                     {value: '6', label: 'Sat'}
                     ]}/>
                     <Input name= "from" 
                     onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                     label="from"  type="time"
                     value={scheduleItem.from}/>
                     <Input name= "to" 
                     onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                     label="to"  type="time"
                     value={scheduleItem.to}/>
                        </div> 
                   )
               })}
               
               
            </fieldset>
            <footer>
                <p>
                    <img src={waringIcon} alt="Important Warning"/>
              Important! <br/>
              Fill up all the fields
               </p>
               <button type="submit">
                    Save
               </button>
            </footer>
            </form>
        </main>
    </div>)
}

export default TutorForm;
