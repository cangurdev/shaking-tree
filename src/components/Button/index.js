import React from 'react';
import { useDispatch } from 'react-redux'
import './style.css';
import { shake, stop } from '../../app/shakerSlice'
import { add, clear } from '../../app/appleSlice'

export default function ShakeButton() {
    const dispatch = useDispatch()
    const afterShake = () => {
        dispatch(stop()); //Stops tree shaking

        const id = Math.floor(Math.random() * 5);
        dispatch(add(id));
    }
    const shakeIt = () => {
        dispatch(shake()); //Shakes tree
        setTimeout(function (){afterShake()}, 3000); 
    }
    return (
        <button className="button" onClick={shakeIt}>Salla</button>
    )
}