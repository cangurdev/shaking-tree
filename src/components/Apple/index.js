import React, { useState } from 'react';
import Image from '../../assets/apple.svg';
import './style.css';
import { useSelector, useDispatch } from 'react-redux'
import { clearApplesInFall } from '../../app/appleSlice'

export default function Apple(props) {
    const fallenApples = useSelector(state => state.apples.applesInFall);
    const applesOnTree = useSelector(state => state.apples.applesOnTree);

    const [bottom, setBottom] = useState(Math.floor((Math.random() * window.innerHeight * 0.5) + window.innerHeight * 0.25));
    const [left, setLeft] = useState(Math.floor(Math.random() * window.innerWidth * 0.2) + (window.innerWidth * 0.25));

    const isShaked = useSelector(state => state.isShaked.value);
    const dispatch = useDispatch()

    if (fallenApples.includes(props.id)) {
        setTimeout(function name() {
            dispatch(clearApplesInFall());
            setBottom(75);
            setLeft(10 * props.id);
        }, 4000);
    }

    const isOnTree = applesOnTree.includes(props.id);
    const isFalling = fallenApples.includes(props.id);

    return (
        <Image className={"apple " + (isShaked && isOnTree ? "shake" : "") + (isFalling ? " fallen" : "")} id={props.id} style={{ bottom: bottom, left: left }} />
    )
}