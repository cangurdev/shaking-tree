import React, { useRef } from 'react';
import Image from '../../assets/apple.svg';
import './style.css';
import { useSelector } from 'react-redux'

export default function Apple(props) {
    const style = useRef({
        top: Math.floor(Math.random() * 300 + window.innerHeight / 2 - 150),
        left: Math.floor(Math.random() * 600 + window.innerWidth / 2 - 275),
    });
    const isShaked = useSelector(state => state.isShaked.value);
    return (
        <Image className={"apple " + (isShaked ? "shake" : "stop")} id={props.id} style={style.current} />
    )
}