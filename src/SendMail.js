import React from 'react'
import "./SendMail.css"
import CloseIcon from '@material-ui/icons/Close'
import { Button } from '@material-ui/core'
import {useForm} from "react-hook-form"
import { useDispatch } from 'react-redux'
import { closeSendMessage } from './features/mailSlice'
import { db } from './firebase';
import firebase from 'firebase';

function SendMail() {
    const {register, handleSubmit, watch, formState: { errors }} = useForm();

    const dispatch = useDispatch()

    const onSubmit = (formData) => {
        // console.log(formData)
        db.collection('emails').add({
          to:  formData.to,
          subject: formData.subject,
          message: formData.message,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        dispatch(closeSendMessage())
    }

    return (
        <div className="sendMail">
            <div className="sendMail_header">
                <h3>New Message</h3>
                <CloseIcon className="sendMail_close" onClick={() => dispatch(closeSendMessage())}/>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input  placeholder="To" type="text" {...register("to" , {required: true})} />
                {errors.to && <p className="sendMail_error">To is required</p>}
                <input placeholder="Subject" type="text" {...register("subject" , {required: true})} />
                {errors.subject && <p className="sendMail_error">subject is required</p>}
                <input placeholder="Message..." type="text" className="sendMail_message" {...register("message" , {required: true})}/>
                {errors.message && <p className="sendMail_error">message is required</p>}   
                <div className="sendMail_options">
                    <Button className="sendMail_send"
                    variant="contained"
                    color="primary"
                    type="submit"
                    >Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
