import React from 'react';
import './button.css';
import $ from "jquery"; 

// $("p").mouseenter(function(){
//     $(this).css("background-color", "yellow");
//     }, function(){
//     $(this).css("background-color", "pink");
//   });

function Button(prompts)
{		
    const CustomStyle = 
    {
    
        backgroundColor : prompts.bgcolor,
        color : prompts.color,
        borderColor : prompts.bordercolor,
        
       
    }
    
    
    
    return	 <div>			
				<div className="box bg-3">
					<button className ="button button--wapasha button--round-l button--text-thick button--inverted"  style = {CustomStyle}> {prompts.message}
                    </button>
				</div>
            </div>
    
}
        
export default Button;        