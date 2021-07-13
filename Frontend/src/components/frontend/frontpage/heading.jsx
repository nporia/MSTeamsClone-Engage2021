import React from 'react';


function Heading(prompts)
{		
    const CustomStyle = 
    {
        fontFamily: "'PT Sans', sans-serif;",
        fontSize: "80px",
        fontWeight: 500,
        color : "white"
       
    }   
    
    return	 <div style = { CustomStyle }>			
				{prompts.message}
            </div>
    
}
        
export default Heading;        