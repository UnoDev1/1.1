import React, { useState } from "react";
import PhoneInput from 'react-phone-input-2'
import "./ContactUs.css";
import 'react-phone-input-2/lib/style.css'

const ContactUs = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        contact: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseMessage, setResponseMessage] = useState("loading");

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handlePhoneChange = (phone) => {
        setFormData((prevData) => ({
            ...prevData,
            contact: phone
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const data = new FormData();
        data.append("name", formData.name);
        data.append("company", formData.company);
        data.append("email", formData.email);
        data.append("contact", formData.contact);
        data.append("message", formData.message);

        const Sheet_Url = "https://script.google.com/macros/s/AKfycbyY4P2GUKUbioUlMmoOT7IBQJ33FUBGd6HEEAaPAivAMf8jG6rj_o59Ox6dvPdPLcmz1Q/exec";
        try {
            const response = await fetch(Sheet_Url, {
                method: "POST",
                body: data,
                muteHttpExceptions: true
            });

            const result = await response.json(); // Parse the response as JSON
            console.log(result);

            if (result.result === "success") {
                setResponseMessage("Thank you for your message. We will contact you soon.");
            } else {
                setResponseMessage("Sorry!!!, Some error occurred. Please try again later.");
            }


        } catch (error) {
            setResponseMessage("An error occurred. Please try again.");
        } finally {
            // setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg relative ">
                {isSubmitting ? (
                    <div className="flex flex-col items-center justify-center h-full">
                        {responseMessage === "loading" ? (
                            <>
                                <div className="loader "></div> {/* Loading spinner */}
                                <p className="mt-6">Please Wait</p>
                            </>
                        ) : (
                            <>
                                <p className="text-gray-700">{responseMessage}</p>
                                <button
                                    type="button"
                                    className="mt-6 bg-brandPrimary text-white font-bold py-2 px-12 rounded focus:outline-none focus:shadow-outline flex-grow transform transition-transform duration-300 ease-in-out hover:scale-105"
                                    onClick={onClose}
                                >
                                    Close
                                </button>
                            </>

                        )}
                    </div>
                ) : (
                    <>
                        <div className="text-center px-2">
                            <h2 className="text-4xl text-neutral-800 font-semibold">Contact Us</h2>
                        </div>
                        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter Your Full Name"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company">
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    name="company"
                                    id="company"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter Your Company Name"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter Your Email"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Contact Number
                                </label>
                                <PhoneInput
                                    country={'in'}
                                    enableSearch={true}
                                    value={formData.contact}
                                    onChange={handlePhoneChange}
                                    containerStyle={{
                                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', // Shadow style
                                        border: '1px solid #d1d5db', // Border style
                                        borderRadius: '0.375rem', // Border radius
                                        width: '100%' // Full width
                                    }}
                                    inputStyle={{
                                        padding: '0.5rem 3rem', // Padding
                                        color: '#4b5563', // Text color
                                        border: 'none', // Remove default border
                                        outline: 'none', // Remove default outline
                                        width: '100%'
                                    }}
                                    placeholder="Enter your Contact Number"
                                    
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    rows="5"
                                    placeholder="If you have any message for us, Please drop it."
                                ></textarea>
                            </div>

                            <div className="flex w-full space-x-4">
                                <button
                                    type="submit"
                                    className="bg-brandPrimary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex-grow transform transition-transform duration-300 ease-in-out hover:scale-105"
                                >
                                    Submit
                                </button>
                                <button
                                    type="button"
                                    className="bg-brandPrimary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex-grow transform transition-transform duration-300 ease-in-out hover:scale-105"
                                    onClick={onClose}
                                >
                                    Close
                                </button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default ContactUs;
