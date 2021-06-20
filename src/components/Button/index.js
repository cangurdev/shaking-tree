import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './style.scss';
import { shake, stop } from '../../app/shakerSlice'
import { setApplesInFall, setApplesOnTree, clearApplesInFall } from '../../app/appleSlice'
import { randomInt } from '../../utils'

export default function ShakeButton() {
    const dispatch = useDispatch()
    let apples = useSelector(state => state.apples.applesOnTree); //Get apples from state
    let fallenApples = [];
    let applesOnTree = [...apples]
    const afterShake = () => {
        dispatch(stop()); //Stops tree shaking

        const applesLength = applesOnTree.length; //Get apples length

        const fallCount = randomInt(1, applesLength);

        for (let i = 0; i < fallCount; i++) {
            const randomAppleIndex = randomInt(0, applesOnTree.length - 1);
            const apple = applesOnTree[randomAppleIndex]; //Get random apple from tree

            fallenApples.push(apple);
            const index = applesOnTree.indexOf(apple); //Gets index of the apple

            applesOnTree.splice(index, 1)
        }
        dispatch(setApplesInFall(fallenApples));
        dispatch(setApplesOnTree(applesOnTree));

        setTimeout(function name() {
            dispatch(clearApplesInFall());

        }, (4) * 1000);

    }
    const shakeIt = () => {
        dispatch(shake()); //Shakes tree
        setTimeout(function () { afterShake() }, 3000);
    }
    return (
        <button className="button" onClick={shakeIt}>Salla</button>
    )
}