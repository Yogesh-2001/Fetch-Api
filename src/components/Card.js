import React, { useState } from 'react'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteIcon from '@material-ui/icons/Delete';

import './card.css';
import EditForm from './EditForm';
import Popup from './Popup';



const Card = ({ user, deleteUser, updateUser }) => {
    const [color, setColor] = useState(false)
    const [openPopup, setOpenPopup] = useState(false)
    const changeColor = () => {
        if (color) {
            document.getElementById('heart').style.color = "red"
        } else {
            document.getElementById('heart').style.color = "black"
        }
    }
    return (
        <>
            <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12 item'>
                <div className="cardBody">
                    <div className="icon">
                        <img src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`} alt="icon" />
                    </div>
                    <div className="card-info">
                        <h3>{user.name}</h3>
                        <p><MailOutlineIcon className='icon' />{user.email}</p>
                        <p><CallOutlinedIcon className='icon' />{user.phone}</p>
                        <p><LanguageOutlinedIcon className='icon' />{user.website}</p>

                    </div>
                    <ul className='editSection col-12'>
                        <li className='col-4 icon' onClick={() => setColor(!color)}>
                            {color ?
                                (<i class="fas fa-heart" id="heart" style={{ color: "red" }}></i>)
                                :
                                (<i class="fas fa-heart" id="heart" style={{ color: "black" }}></i>)}
                        </li>
                        <li className='col-4 icon' onClick={() => setOpenPopup(true)}>
                            <EditOutlinedIcon />
                        </li>

                        <li className='col-4 icon' onClick={() => deleteUser(user.id)}><DeleteIcon /></li>
                    </ul>
                </div>
            </div>
            <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}>
                <EditForm openPopup={openPopup} setOpenPopup={setOpenPopup} user={user} updateUser={updateUser} />
            </Popup>
        </>

    )
}


export default Card
