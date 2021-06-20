import React, { useState } from 'react';
import Image from '../../assets/apple.svg';
import './style.scss';
import { useSelector } from 'react-redux'
import { randomInt } from '../../utils'

export default function Apple(props) {
    const fallenApples = useSelector(state => state.apples.applesInFall);
    const applesOnTree = useSelector(state => state.apples.applesOnTree);
    const isShaked = useSelector(state => state.isShaked.value);

    const randomBottomValue = randomInt(window.innerHeight * 0.25, window.innerHeight * 0.75)
    const randomLeftValue = randomInt(window.innerWidth * 0.25, window.innerWidth * 0.45)

    const [bottom, setBottom] = useState(randomBottomValue);
    const [left, setLeft] = useState(randomLeftValue);

    let style = {
        bottom: bottom,
        left: left,
    }

    if (fallenApples.includes(props.id)) {
        setTimeout(function () {
            setBottom(75);
            setLeft(10 * props.id);
        }, 4 * 1000);
    }

    const isOnTree = applesOnTree.includes(props.id);
    const isFalling = fallenApples.includes(props.id);

    return (
        <Image className={"apple " + (isShaked && isOnTree ? "shake" : "") + (isFalling ? " fallen d" : "")} id={props.id} style={style} />
    )
}