import React, { useState } from 'react';
import Image from '../../assets/apple.svg';
import './style.css';
import { useSelector, useDispatch } from 'react-redux'
import { clearApplesInFall } from '../../app/appleSlice'

export default function Apple(props) {
    const fallenApples = useSelector(state => state.apples.applesInFall);

    const [bottom, setBottom] = useState(Math.floor(Math.random() * 300 + window.innerHeight / 2 - 100));
    const [left, setLeft] = useState(Math.floor(Math.random() * 600 + window.innerWidth / 2 - 280));

    const isShaked = useSelector(state => state.isShaked.value);
    const dispatch = useDispatch()

    if (fallenApples.includes(props.id)) {
        setTimeout(function name() {
            dispatch(clearApplesInFall());
            setBottom(75);
            setLeft(50 + (10 * props.id));
        }, 4000);
    }
    return (
        <Image className={"apple " + (isShaked ? "shake" : "stop") + (fallenApples.includes(props.id) ? " fallen" : " stand")} id={props.id} style={{ bottom: bottom, left: left }} />
    )
}