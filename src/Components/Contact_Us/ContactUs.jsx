import React, { useState } from 'react';
import axios from 'axios';

const ContactUs = ({ isVisible, onClose }) => {

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
        axios.post('https://sheet.best/api/sheets/a22e3255-0b64-4200-871e-390562e69b19', data).then((response) => {
            console.log(response);
            setName('');
            setEmail('');
            setCity('');
            setPhone('');
            setMessage('');
        })
    }

    if (!isVisible) return null;

    const handleClose = (e) => {
        if (e.target.id === 'wrapper') onClose();
    }

    return (
        <div>
            <form onSubmit={handleSubmit} id="wrapper" onClick={handleClose}><div className="body bg-white dark:bg-[#0F172A]">
                <div className="bg-black before:animate-pulse before:bg-gradient-to-b before:from-gray-900 overflow-hidden before:via-[#00FF00] before:to-gray-900 before:absolute ">
                    <div id="myDIV" >
                        <div className="w-[100vw] h-[100vh] px-3 sm:px-5 flex items-center justify-center absolute">
                            <div className="bg-black opacity-90 row-span-2 w-full sm:w-1/2 lg:2/3 px-6 bg-gray-500 bg-opacity-20 bg-clip-padding backdrop-filter backdrop-blur-sm text-white z-50 py-4  rounded-lg">
                                <button className="text-white text-xl items-end" onClick={() => onClose()} >X</button>
                                <div className="w-full flex justify-center text-xl mb:2 md:mb-5">
                                    Contact Us
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="inputName" className="block mb-2 text-xs font-medium text-white">Name</label>
                                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="inputName" required onChange={(e) => setName(e.target.value)} value={name} placeholder="Enter your name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputEmail4" className="block mb-2 text-xs font-medium text-white">Email</label>
                                    <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="inputEmail4" required onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter your Email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputCity" className="block mb-2 text-xs font-medium text-white">City</label>
                                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="inputCity" required onChange={(e) => setCity(e.target.value)} value={city} placeholder="Enter your City" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputphone" className="block mb-2 text-xs font-medium text-white">Contact No</label>
                                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="inputphone" required onChange={(e) => setPhone(e.target.value)} value={phone} placeholder="Enter your contact number" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputMessage" className="block mb-2 text-xs font-medium text-white">Message</label>
                                    <textarea className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="inputMessage" placeholder="Enter your message" rows="3" required onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
                                </div>
                                <div className="flex justify-between items-baseline">
                                    <button className="text-sm hover:underline" onClick={() => onClose()}>
                                        Close
                                    </button>
                                    <button type="submit" className="mt-4 w-40 h-12 rounded-lg  bg-blue-600 text-gray-200 uppercase font-semibold hover:bg-blue-700 text-gray-100 transition">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </form>
        </div>
    )
}
export default ContactUs;