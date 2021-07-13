import React from 'react';
import './chat.css'
import Button from './button';

function Feat(){


   return <div className = "chat">
    <div class="chatleft">
    
    <img height = "450px" width = "600px" src = "https://techcommunity.microsoft.com/t5/image/serverpage/image-id/37910iECF8BE514DF43D84?v=v2" />
    </div>
    <div class="chatright">
    <div class = "subhead">
         Chat 
    </div>
    <div class = "subhead2 ">
        
Share your opinion and <br/>have fun with your team. <br/>Send GIFs, stickers, and emojis <br/> in a group chat or in<br/> one-to-one messages.
    </div>
    <div class = "but2">  <Button message = "Start for free →" bgcolor = "white" color = "black" /> </div>
    </div>
    <br/>
   </div>



}

export default Feat;