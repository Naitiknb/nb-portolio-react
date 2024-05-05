import React, { useState } from 'react';
import Nav from '../components/nav/nav.jsx';
import '../About/about.css';
import Footer from '../../src/components/footer/footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import db from '../firebase.jsx';
import { collection, addDoc } from 'firebase/firestore';

const About = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isModalOpen, setIsModalOpen] = useState(false);

    const dbRef = collection(db, 'userInfo');

    // Handle change for all input fields
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    };

    const submitData = async () => {
        try {
            await addDoc(dbRef, { Name: userData.name, Email: userData.email, Message: userData.message });
            // Show the modal when data is added successfully
            setIsModalOpen(true);
        } catch (error) {
            alert('An error occurred: ' + error);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Nav />
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-6">
                        <h1 className="fw-bold my-5">Let's Work Together</h1>
                        <div className="my-4">
                            <h5 className="fw-bold">Mail</h5>
                            <p>naitikbohra6@gmail.com</p>
                        </div>
                        <div className="my-4">
                            <h5 className="fw-bold">Address</h5>
                            <p>Mumbai, Maharashtra</p>
                        </div>
                        <div className="my-4">
                            <h5 className="fw-bold">Phone</h5>
                            <p>+91 8329067414</p>
                        </div>
                    </div>
                    <div className='col-md-6 my-5'>
                        {/* Form */}
                        <form onSubmit={(e) => { e.preventDefault(); submitData(); }}>
                            <div className='mb-3'>
                                <input
                                    type='text'
                                    className='from'
                                    name='name'
                                    placeholder='Natik Bohra'
                                    value={userData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='mb-3'>
                                <input
                                    type='email'
                                    className='from'
                                    name='email'
                                    placeholder='nb@gmail.com'
                                    value={userData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='mb-3'>
                                <textarea
                                    className=' text-area'
                                    name='message'
                                    placeholder='Message'
                                    value={userData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <div className='my-5'>
                                <button type='submit' className='btn btn-primary w-100'>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />

            {/* Modal for Submission Success */}
            {isModalOpen && (
                <div className="modal show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Submission Successful</h5>
                                <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p>Your details have been submitted. We'll contact you soon!</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal backdrop */}
            {isModalOpen && <div className="modal-backdrop fade show"></div>}
        </>
    );
};

export default About;
