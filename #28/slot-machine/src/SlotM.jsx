import React from 'react';
import Isfalse from './Isfalse';
import Istrue from './Istrue';

const SlotM = (props) => {
    if (props.x === props.y && props.y === props.z)
        return <Istrue x = {props.x} y = {props.y} z = {props.z}/>
    else
        return <Isfalse x = {props.x} y = {props.y} z = {props.z}/>
}

export default SlotM;