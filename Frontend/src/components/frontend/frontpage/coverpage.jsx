import React from 'react';
import './coverpage.css';
import Button from './button';
import Ui from './ui';
import Imagee from './image2.gif';

function Coverpage()
{
    
    return <div> 
    <div class = "cover"> 
    <div class="alignleft">One app for <br/>  everything.  And <br/> everyone.</div>
    <div class="alignright">
    &emsp; Calling, meetings, messaging, and<br/>&emsp;  events in the cloud for teams of all &emsp; &nbsp; &nbsp;&nbsp;&emsp; &nbsp; &emsp; &nbsp;  <br/>&emsp; sizes. 
    <br/> <br/>
    <Button message = "Start for free →" bgcolor = "#078855" color = "white" /> 
    <Button  message = "Contact Us →" bgcolor = "black" color = "white" bordercolor = "white"/>
    </div>
    <br/>
    </div>
    <div class = "bottom"> 
    <Ui />
    </div>
    </div>
   

}

export default Coverpage;