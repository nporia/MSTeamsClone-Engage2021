import React from 'react';
import './videocallfeat.css'
import './planner.css'
import Button from './button';

function Dayplanner(){


   return <div className = "vcf">
    <div class="vcfleft">
       <div class = "subhead">
        Planner
       </div>
       <div class = "subhead2">
       Organise your work with <br/> Microsoft Planner, <br/>the only task management software you need.
       </div>
      <div class = "but">  <Button message = "Start for free →" bgcolor = "#078855" color = "white" /> </div>
    </div>
    <div class="vcright">
    <img height = "450px" width = "600px" src = "https://cdn.vox-cdn.com/thumbor/ylrhiKdhjqXUCPSGS34zVyN3Va4=/0x0:1792x1162/1200x800/filters:focal(319x195:605x481)/cdn.vox-cdn.com/uploads/chorus_image/image/54341261/desktop.0.jpg" />
    </div>
   </div>



}

export default Dayplanner;