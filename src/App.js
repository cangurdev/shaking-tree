import React from 'react';

import Tree from './components/Tree';
import Apple from './components/Apple';
import Basket from './components/Basket';
import ShakeButton from './components/Button';
import './App.css';

export default function App() {
   const arr = [1, 2, 3, 4, 5, 6, 7, 8];

   return (
      <div className="app">
         <Tree />
         {arr.map(id =>
            <Apple key={id} />
         )}
         <Basket />
         <ShakeButton />
      </div>
   );
}
