import React, { useState } from 'react';
import Image from '../../assets/apple.svg';
import './style.css';
import { useSelector, useDispatch } from 'react-redux'
import { add, clear } from '../../app/appleSlice'

export default function Apple(props) {
    const fallenApples = useSelector(state => state.fallenApples.value);

    const [top, setY] = useState(Math.floor(Math.random() * 300 + window.innerHeight / 2 - 150));
    const [left, setX] = useState(Math.floor(Math.random() * 600 + window.innerWidth / 2 - 275));

    const isShaked = useSelector(state => state.isShaked.value);
    const dispatch = useDispatch()

    if (fallenApples.includes(props.id)) {

        setTimeout(function name() {
            dispatch(clear());
            setY(85);
            setX(50);
        }, 7000);
    }
    return (
        <Image className={"apple " + (isShaked ? "shake" : "stop") + (fallenApples.includes(props.id) ? " fallen" : " stand")} id={props.id} style={{ bottom: top, left: left }} />
    )
}