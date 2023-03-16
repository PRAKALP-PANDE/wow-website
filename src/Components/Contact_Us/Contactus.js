import React, { useState } from 'react';
import axios from 'axios';
import "./Contact.css";

export default function Contactus() {
    // form state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    // submit event
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(name, message);
        const data = {
            Name: name, Email: email, City: city, Phone: phone, Message: message
        }
        axios.post('https://sheet.best/api/sheets/a22e3255-0b64-4200-871e-390562e69b19',data).then((response)=>{
            console.log(response);
            setName('');
            setEmail('');
            setCity('');
            setPhone('');
            setMessage('');
        })
    }

    return (
        <div>
            <button type="button" className="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Contact Us
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Contact Us</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="row g-3" onSubmit={handleSubmit}>
                                <div className="col-md-6">
                                    <label htmlFor="inputName" className="form-label">Name*</label>
                                    <input type="text" className="form-control" id="inputName" required onChange={(e) => setName(e.target.value)} value={name} />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputEmail4" className="form-label">Email*</label>
                                    <input type="email" className="form-control" id="inputEmail4" required onChange={(e) => setEmail(e.target.value)} value={email} />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputCity" className="form-label">City*</label>
                                    <input type="text" className="form-control" id="inputCity" required onChange={(e) => setCity(e.target.value)} value={city} />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputphone" className="form-label">Contact No*</label>
                                    <input type="text" className="form-control" id="inputphone" required onChange={(e) => setPhone(e.target.value)} value={phone} />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputMessage" className="form-label">Message*</label>
                                    <textarea className="form-control" id="inputMessage" placeholder="Enter your message" rows="3" required onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-outline-success">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
