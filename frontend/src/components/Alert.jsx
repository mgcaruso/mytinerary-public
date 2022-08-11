import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import  { useSelector } from 'react-redux'
import  { useDispatch } from 'react-redux'



const Alert = React.forwardRef(function BasicAlert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function BasicAlert() {
    const snackbar = useSelector(store => store.usersReducer.snackbar) 
    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch({
            type: 'MESSAGE', payload: {
                view: false,
                message: '',
                success: false
            }
        })
    }

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>

            <Snackbar open={snackbar.view} onClose={handleClose} autoHideDuration={3000} >
                <Alert variant="outlined"  severity={snackbar.success ? "success" : "error"} sx={{ width: '100%', color: "black"}}>
                    
                    {Array.isArray(snackbar.message) ? 
                    
                    snackbar.message.map( (item,index) => {
                                return(
                                    <p key={index} >🚩{item.message}</p>
                                )
                            } )
                    : 
                    <p>{snackbar.message}</p>
                    }
                    
                </Alert>
            </Snackbar>
        </Stack>
    );
}



