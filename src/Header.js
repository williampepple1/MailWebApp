import React from 'react'
import "./Header.css"
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import { IconButton } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import AppsIcon from '@material-ui/icons/Apps'
import Avatar from '@material-ui/core/Avatar'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from './features/userSlice'
import { auth } from './firebase'
function Header() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const signOut = ()=> {
        auth.signOut().then(()=> {
            dispatch(logout())
        })
        
    } 

    return (
        <div className="header">
            <div className="headerLeft">
            <IconButton>
                <MenuIcon />
            </IconButton>
            <img 
            src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
            alt=""
            />
            </div>
            <div className="headerMiddle">
            <SearchIcon/>
            <input placeholder="Search mail" type="text"/>
            <ArrowDropDownIcon className="header_inputCaret"/>
            </div>
            <div className="headerRight">
            <IconButton>
                <AppsIcon />
            </IconButton>
            <IconButton>
                <NotificationsIcon />
            </IconButton>
            <Avatar onClick={signOut} src={user?.photoUrl} className="avatar_cursor"/>
            </div>
        </div>
    )
}

export default Header
