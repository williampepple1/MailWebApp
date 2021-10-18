import { Button, IconButton } from '@material-ui/core'
import { AccessTime, Duo, ExpandMore, Inbox, LabelImportant, NearMe, Note, Person, Phone, Star } from '@material-ui/icons'
import  AddIcon  from '@material-ui/icons/Add'
import React from 'react'
import { useDispatch } from 'react-redux'
import { openSendMessage } from './features/mailSlice'
import "./Sidebar.css"
import SidebarOptions from './SidebarOptions'

function Sidebar() {
    const dispatch = useDispatch()
    return (
        <div className="sidebar">
            <Button startIcon={<AddIcon fontSize="large" />} className="sidebarCompose" onClick={() => dispatch(openSendMessage())}>
                Compose
            </Button>
            <SidebarOptions Icon={Inbox} title={"Inbox"} selected={true} number={54}/>
            <SidebarOptions Icon={Star} title={"Starred"} number={54}/>
            <SidebarOptions Icon={AccessTime} title={"Snoozed"} number={54}/>
            <SidebarOptions Icon={LabelImportant} title={"Important"} number={54}/>
            <SidebarOptions Icon={NearMe} title={"Sent"} number={54}/>
            <SidebarOptions Icon={Note} title={"Drafts"} number={54}/>
            <SidebarOptions Icon={ExpandMore} title={"More"} number={54}/>
            <div className="sidebarFooter">
                <div className="sidebarFooterIcons">
                    <IconButton>
                    <Person/>
                    </IconButton>
                    <IconButton>
                    <Duo/>
                    </IconButton>
                    <IconButton>
                    <Phone/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
