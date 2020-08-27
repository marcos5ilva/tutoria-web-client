import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Lading';
import TutorsList from './pages/TutorsList';
import TutorForm from './pages/TutorForm';


const Routes = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/study" component={TutorsList} />
            <Route path="/teach" component={TutorForm} />
        </BrowserRouter>
    );
}

export default Routes;