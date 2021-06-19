import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './style.css';
import { shake, stop } from '../../app/shakerSlice'
import { addApplesToFall, removeAppleFromTree } from '../../app/appleSlice'

export default function ShakeButton() {
    const dispatch = useDispatch()
    const apples = useSelector(state => state.apples.applesOnTree); //Get apples from state
    
    const afterShake = () => {
        dispatch(stop()); //Stops tree shaking

        const applesLength = apples.length; //Get apples length
        const id = apples[Math.floor(Math.random() * applesLength)]; //Get random apple from tree

        dispatch(addApplesToFall(id));
        dispatch(removeAppleFromTree(id));
    }
    const shakeIt = () => {
        dispatch(shake()); //Shakes tree
        setTimeout(function () { afterShake() }, 3000);
    }
    return (
        <button className="button" onClick={shakeIt}>Salla</button>
    )
}