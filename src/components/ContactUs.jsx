import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const data = new FormData();
        data.append("name", formData.name);
        data.append("email", formData.email);
        data.append("message", formData.message);

        const Sheet_Url = "https://script.google.com/macros/s/AKfycbyxPH6g5BP4T3ozFpPrhbOCZfoba6a9IIngqCrRSd2758x2EbQd5bnnmQj7Ytu2EfhgPQ/exec";
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
                                    required
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
                                    required
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
