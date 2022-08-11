import React, { useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import { useDispatch } from 'react-redux'
import userActions from '../redux/actions/userActions'
import Alert from '../components/Alert'

export default function GoogleSignIn() {


    const dispatch = useDispatch();

    async function handleCallbackResponse(response) {
    
        let userObject = jwt_decode(response.credential)
        const userData = {
            email: userObject.email,
            password: userObject.sub,
            role: "user",
            from: "google",
            urlImage: userObject.picture
        }
        dispatch(userActions.userSignIn(userData))

    }


    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: '95796143423-oo0tiahb6shk9gprhjpmktb829sj5n0a.apps.googleusercontent.com',
            callback: handleCallbackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById('buttonDiv'),
            { theme: 'outline', size: 'medium' }
        )
    })

    return (
        <div >
            <div style={{ padding: "1rem" }} id="buttonDiv"></div>
            <Alert /> 
        </div>

    )
}
