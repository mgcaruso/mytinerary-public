import React, { useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import { useDispatch } from 'react-redux'
import userActions from '../redux/actions/userActions'
import Alert from '../components/Alert'

export default function GoogleSignUp({ country }) {


    const dispatch = useDispatch();


    async function handleCallbackResponse(response) {
        //response is an object with properties. One of them is credentials (token).
    //we receive the response in the form of a token and we decode it with jwt-decode
        let userObject = jwt_decode(response.credential)  //userObjects contains all the info coming from google, that we will have 
        const userData = {
            firstName: userObject.given_name,
            lastName: userObject.family_name,
            urlImage: userObject.picture,
            email: userObject.email,
            password: userObject.sub,
            role: "user",
            from: "google",
            country: country
        }
        dispatch(userActions.userSignUp(userData))

    }



    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({ //initializing the service
            client_id: '95796143423-oo0tiahb6shk9gprhjpmktb829sj5n0a.apps.googleusercontent.com', 
            callback: handleCallbackResponse //send received info to backend to save in db and authenticate user
        });

        google.accounts.id.renderButton( //when the button is clicked, the handleCallBack function is triggered
            document.getElementById('buttonDiv'),
            { theme: 'outline', size: 'medium' }
        )
    })

    return (
        <div >
            <Alert></Alert>
            <div style={{ padding: "1rem" }} id="buttonDiv"></div>
        </div>
    )
}
