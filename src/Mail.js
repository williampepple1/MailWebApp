import { IconButton } from '@material-ui/core'
import { ArrowBack, CheckCircle, Delete, Email, Error, ExitToApp, LabelImportant, MoreVert, MoveToInbox, Print, UnfoldMore, WatchLater } from '@material-ui/icons'
import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { selectOpenMail } from './features/mailSlice'
import "./Mail.css"
import firebase from 'firebase'
import { db } from './firebase'

function Mail() {
    const history = useHistory();
    const selectedMail = useSelector(selectOpenMail)

        // db.collection('emails').where('id', '==', selectedMail.id).get()
    // .then((querySnapshot) => {
    //     querySnapshot.forEach((doc)=>{
    //         doc.ref.delete()
    //         console.log(selectedMail.id)
    //     })
    // })
    // history.push("/")
    // const deleteMail = () =>{
    //     db.collection('emails').where('id', '==', selectedMail.id).get()
    //     .then(querySnapshot => {
    //         querySnapshot.docs[0].ref.delete();
    //         console.log(querySnapshot.docs[0])
    //     })
    //     history.push("/")
    // }
    const deleteMail = () => {
        return db
            .collection("emails")
            .doc(selectedMail.id)
            .delete()
            .then(() => history.push("/")) // only navigate if it works!
            .catch((err) => alert("Failed to delete email! " + (err.code || err.message)));
    }
    
    return (
        <div className="mail">
            <div className="mail_tools">
                <div className="mail_toolsLeft">
                <IconButton onClick={()=> history.push("/")}>
                    <ArrowBack/>
                </IconButton>
                <IconButton>
                    <MoveToInbox/>
                </IconButton>
                <IconButton>
                    <Error/>
                </IconButton>
                <IconButton>
                    <Delete onClick={deleteMail}/>
                </IconButton>
                <IconButton>
                    <Email/>
                </IconButton>
                <IconButton>
                   <WatchLater/> 
                </IconButton>
                <IconButton>
                    <CheckCircle/>
                </IconButton>
                <IconButton>
                    <LabelImportant/>
                </IconButton>
                <IconButton>
                    <MoreVert/>
                </IconButton>
                </div> 
                <div className="mail_toolsRight">
                <IconButton>
                    <UnfoldMore/>
                </IconButton>
                <IconButton>
                    <Print/>
                </IconButton>
                <IconButton>
                    <ExitToApp/>
                </IconButton>
                </div>
            </div>
            <div className="mailbody">
                <div className="mail_bodyHeader">
                    <h2>{selectedMail?.subject}</h2>
                    <LabelImportant  className="mail_important"/>
                    <p>{selectedMail?.title}</p>
                    <p className="mail_time">{selectedMail?.time}</p>  
                </div>
                <div className="mail_message">
                      <p>{selectedMail?.description} </p> 
                </div>
            </div>
        </div>
    )
}

export default Mail
