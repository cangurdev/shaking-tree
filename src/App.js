import React from 'react';

import Tree from './components/Tree';
import Apple from './components/Apple';
import Basket from './components/Basket';
import ShakeButton from './components/Button';
import './App.scss';

export default function App() {
   //const arr = useSelector(state => state.apples.applesOnTree);
   const applesOnTree = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

   return (
      <div className="app">
         <div className="tree">
            <Tree />
            {applesOnTree.map(id =>
               <Apple key={id} id={id} />
            )}
            <Basket />
         </div>
         <ShakeButton />
      </div>
   );
}
