import React from 'react';
import Image from '../../assets/tree.svg';
import { useSelector } from 'react-redux'
import './style.scss';

export default function Tree() {
    const isShaked = useSelector(state => state.isShaked.value);
    return (
        <Image className={"tree " + (isShaked ? "shake" : "stop")} />
    )
}