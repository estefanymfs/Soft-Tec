import React from 'react';
import ListService from '../../ListService';
import {listObjOne, listObjTwo,listObjThree,listObjFour,listObjFive,listObjSix,listObjSeven} from './Data';

function ListServices() {
    return (
        <>
            <ListService {...listObjOne}/>
            <ListService {...listObjTwo}/>
            <ListService {...listObjThree}/>
            <ListService {...listObjFour}/>
            <ListService {...listObjFive}/>
            <ListService {...listObjSix}/>
            <ListService {...listObjSeven}/>
        </>
    );
}

export default ListServices;
