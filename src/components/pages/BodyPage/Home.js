import React from 'react';
import BodySection from '../../BodySection';
import Services from '../../Services';
import Contact from '../Contact-us/Contact';
import {homeObjOne,homeObjThree,} from './Data';

function Home() {
    return (
        <>
            <BodySection {...homeObjOne}/>
            <Services></Services>
            <BodySection {...homeObjThree}/>
            <Contact></Contact>
        </>
    );
}

export default Home;