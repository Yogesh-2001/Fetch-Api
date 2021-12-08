import React, { useState } from 'react'
import './editForm.css'
const EditForm = ({ openPopup, setOpenPopup, user, updateUser }) => {

    const id = user.id
    const [name, setName] = useState(user.name)
    const [email, setemail] = useState(user.email)
    const [phone, setphone] = useState(user.phone)
    const [website, setwebsite] = useState(user.website)

    const updatedUser = { id, name, email, phone, website }
    return (
        <>
            <form className='col-sm-12 col-lg-12'>
                <div className="form-group row my-3">
                    <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                </div>
                <div className="form-group row my-3">
                    <label htmlFor="email" className="col-sm-2 col-form-label">E-mail</label>
                    <div className="col-sm-9">
                        <input type="email" className="form-control" id="email" value={email} onChange={(e) => setemail(e.target.value)} />
                    </div>
                </div>
                <div className="form-group row my-3">
                    <label htmlFor="phone" className="col-sm-2 col-form-label">Phone</label>
                    <div className="col-sm-9">
                        <input type="phone" className="form-control" id="phone" value={phone} onChange={(e) => setphone(e.target.value)} />
                    </div>
                </div>
                <div className="form-group row my-3">
                    <label htmlFor="website" className="col-sm-2 col-form-label">Website</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" id="website" value={website} onChange={(e) => setwebsite(e.target.value)} />
                    </div>
                </div>

                <div class="btn-group float-right mt-2 mb-2" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-outline-danger mr-2" onClick={() => setOpenPopup(false)}>Cancel</button>
                    <button type="button" className="btn btn-primary ml-auto" onClick={() => updateUser(id, updatedUser, setOpenPopup(false))}>Update</button>
                </div>

            </form>
        </>
    )
}

export default EditForm
