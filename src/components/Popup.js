import React from 'react'
import {Dialog,DialogTitle,DialogContent} from '@material-ui/core'

const Popup = (props) => {
    const {children,openPopup,setOpenPopup} = props
    return (
        <div>
            <Dialog open={openPopup} className="p-0">
                <DialogTitle>
                    <div style={{textAlign:"center",color:"red",fontSize:"23px"}}>Edit Form</div>
                </DialogTitle>
                <DialogContent>
                    {children}
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Popup
