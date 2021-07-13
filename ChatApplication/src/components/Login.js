// import React from "react"

// import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons'

// import firebase from "firebase/app"

// import { auth } from "../firebase"

// export default function Login() {
//   return (
//     <div id='login-page'>
//       <div id='login-card'>
//       <h1> MICROSOFT</h1> <br/>
//         <h2>Sign Up For Free</h2>

//         <div
//           className='login-button google'
//           onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
//         >
//           <GoogleOutlined /> Sign In with Google
//         </div>

//         <br/><br/>

//         <div
//           className='login-button facebook'
//           onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider()) }
//         >
//           <FacebookOutlined /> Sign In with Facebook
//         </div>
//       </div>
//     </div>
//   )
//   }

















import React from "react"
import './Login.css'
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons'

import firebase from "firebase/app"

import { auth } from "../firebase"

export default function Login() {
  return (
    <div id='login-pagee'>

      <div id = 'logincard'> 
      <div class = "subhead"> 
       MICROSOFT TEAMS 
       </div> 
       <br/> 
      <div class = "left">
       
       <p>
       Whether it’s chat, calls, or video, anyone can engage <br/> at any time, bringing everyone closer.
      </p>  
      <br/>
      <p>
Your docs, photos, videos, chat history, and meeting notes <br/>are always there, so it’s easier to work together.
</p>
 <br/>
 <p> 
Set up your team’s space with all the apps you need <br/>so you can stay in just one place instead of jumping around.
       </p>
      </div>
      <div class = "right">
      <div class='logincardd'>
        <h2> Sign Up For Free</h2>
        <br />
        <div className='login-button google' onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
          <GoogleOutlined /> Sign In with Google
        </div>
        <br/><br/>

        {/* <div
          className='login-button facebook'
          onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider()) }
        >
          <FacebookOutlined /> Sign In with Facebook
        </div> */}
 </div> 
      
         
       </div>
      </div>
    </div>
  )
}

