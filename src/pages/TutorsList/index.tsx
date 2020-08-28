import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import TutorItem, {Tutor} from '../../components/TutorItem';
import Input from '../../components/Input';
import Select from '../../components/Select/index';
import './styles.css';
import api from '../../services/api';



const TutorsList = () => {
    const [tutors,setTutors] = useState([]);
    const [subject, setSubject] = useState('');
    const[week_day, setWeekDay] = useState('');
    const[time, setTime] = useState('');

   async function handleSearchTutors(e : FormEvent){
        e.preventDefault();
       const resp = await  api.get('lessons', {
            params:{
                subject,
                week_day,
                time
            }
        });
        setTutors(resp.data);
       
    }



    return (

        <div id="page-tutor-list" className="container">
            <PageHeader title="Meet your next tutor!">
                <form id="search-tutors" onSubmit={handleSearchTutors}>
                    <Select name="subject" 
                    label="Course" 
                    value={subject}
                    onChange={(e)=>{setSubject(e.target.value)}}
                    options={[
                    {value: 'JavaScript', label: 'JavaScript'},
                    {value: 'Typescript', label: 'TypeScript'}
                    ]}/>
                    <Select name="week_day"
                    label="Week day"
                    value={week_day}
                    onChange={(e)=>{setWeekDay(e.target.value)}}

                    options={[
                    {value: '0', label: 'Sun'},
                    {value: '1', label: 'Mon'},
                    {value: '2', label: 'Tue'},
                    {value: '3', label: 'Wed'},
                    {value: '4', label: 'Thu'},
                    {value: '5', label: 'Fri'},
                    {value: '6', label: 'Sat'}
                    ]}/>
                    <Input type="time"
                        name="time" 
                        label="Time"
                        value={time}
                        onChange={(e)=>{setTime(e.target.value)}}
                    />

                    <button type="submit">Search</button>
                </form>
            </PageHeader>
            <main>
                {tutors.map((tutor: Tutor, index)=>{
                    return <TutorItem  key={index} tutor={tutor}/>
                })}
            
            </main>
        </div>)
}

export default TutorsList;