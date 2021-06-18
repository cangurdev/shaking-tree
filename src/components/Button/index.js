import React from 'react';
import { useDispatch } from 'react-redux'
import './style.css';
import { shake, stop } from '../../app/shakerSlice'

export default function ShakeButton() {
    const dispatch = useDispatch()
    const shakeIt = () => {
        dispatch(shake()); //Shake tree
        setTimeout(function () { dispatch(stop()) }, 3000) //Stop tree after 3 seconds
    }
    return (
        <button className="button" onClick={shakeIt}>Salla</button>
    )
}