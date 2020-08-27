import React, {useState} from 'react';
import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input';
import waringIcon from '../../assets/images/icons/warning.svg'
import './styles.css';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

const TutorForm = () => {
const [ scheduleItems, setScheduleItems]  = useState( [
    { week_day: 0, from: '', to: ''}
]);

function addNewScheduleItem(){
    setScheduleItems([
        ...scheduleItems, { week_day: 0, from: '', to: ''}
    ])
}

    return (<div id="page-tutor-form" className="container">
        <PageHeader title="That's great you want to teach!" 
        description="The first step..."/>
        <main>
            <fieldset>
                <legend>Your Info</legend>
                <Input name="name" label="Full Name"/>
                <Input name="avatar" label="Avatar"/>
                <Input name="whatsapp" label="Whatsapp"/>
                <Textarea name="bio" label="biography"/>
            </fieldset>
            <fieldset>
                <legend>About the Course</legend>
                <Select name="subject" label="Course" options={[
                {value: 'JavaScript', label: 'JavaScript'},
                {value: 'Typescript', label: 'TypeScript'}]}/>
                <Input name="price"  label="Price per Class"/>
            </fieldset>
            <fieldset>
                <legend>Schedule <button type="button" onClick={addNewScheduleItem}>+ Add Schedule</button></legend>
               
               { scheduleItems.map(scheduleItem =>{
                   return(
                    <div className="schedule-item">
                    <Select name="week_day" label="Week day" options={[
                     {value: '0', label: 'Sun'},
                     {value: '1', label: 'Mon'},
                     {value: '2', label: 'Tue'},
                     {value: '3', label: 'Wed'},
                     {value: '4', label: 'Thu'},
                     {value: '5', label: 'Fri'},
                     {value: '6', label: 'Sat'}
                     ]}/>
                     <Input name= "from" label="from"  type="time"/>
                     <Input name= "to" label="to"  type="time"/>
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
               <button type="button">
                    Save
               </button>
            </footer>
        </main>
    </div>)
}

export default TutorForm;
