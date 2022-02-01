import React from 'react';

import Tablepage1 from '../components/Tablepage1';
import Tabletabcard from '../components/Tabletabcard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SimpleTabs from './Tabs/SimpleTabs';


 export default function Devicedetail (){
     return(
         <>
         <div style={{marginBottom:"10px"}}>
             <Tabletabcard/>
         </div>

         <div>
             <SimpleTabs/>
         </div> 
         
         </>
     )
 }   
        