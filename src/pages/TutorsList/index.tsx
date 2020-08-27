import React from 'react';
import PageHeader from '../../components/PageHeader';
import TutorItem from '../../components/TutorItem';
import Input from '../../components/Input';
import Select from '../../components/Select/index';
import './styles.css';



const TutorsList = () => {
    return (
        <div id="page-tutor-list" className="container">
            <PageHeader title="Meet your next tutor!">
                <form id="search-tutors">
                <Select name="subject" label="Course" options={[
                {value: 'JavaScript', label: 'JavaScript'},
                {value: 'Typescript', label: 'TypeScript'}
                ]}/>
                <Select name="week_day" label="Week day" options={[
                {value: '0', label: 'Sun'},
                {value: '1', label: 'Mon'},
                {value: '2', label: 'Tue'},
                {value: '3', label: 'Wed'},
                {value: '4', label: 'Thu'},
                {value: '5', label: 'Fri'},
                {value: '6', label: 'Sat'}
                ]}/>
                    <Input type="time" name="time" label="Time"/>

                </form>
            </PageHeader>
            <main>
                <TutorItem />
                <TutorItem />
                <TutorItem />
                <TutorItem />
            </main>
        </div>)
}

export default TutorsList;