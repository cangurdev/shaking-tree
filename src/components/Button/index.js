import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './style.css';
import { shake, stop } from '../../app/shakerSlice'
import { setApplesInFall, setApplesOnTree } from '../../app/appleSlice'

export default function ShakeButton() {
    const dispatch = useDispatch()
    let apples = useSelector(state => state.apples.applesOnTree); //Get apples from state
    let fallenApples = [];
    let applesOnTree = [...apples]
    const afterShake = () => {
        dispatch(stop()); //Stops tree shaking

        const applesLength = applesOnTree.length; //Get apples length

        const fallCount = [Math.floor(Math.random() * applesLength) + 1];

        for (let i = 0; i < fallCount; i++) {
            const randomAppleIndex = Math.floor(Math.random() * (applesOnTree.length - 1));
            const apple = applesOnTree[randomAppleIndex]; //Get random apple from tree

            fallenApples.push(apple);
            const index = applesOnTree.indexOf(apple); //Gets index of the apple

            applesOnTree.splice(index, 1)
        }
        dispatch(setApplesInFall(fallenApples));
        dispatch(setApplesOnTree(applesOnTree));
    }
    const shakeIt = () => {
        dispatch(shake()); //Shakes tree
        setTimeout(function () { afterShake() }, 3000);
    }
    return (
        <button className="button" onClick={shakeIt}>Salla</button>
    )
}