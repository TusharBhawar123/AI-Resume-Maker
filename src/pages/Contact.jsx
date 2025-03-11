import React, {useState} from "react";
import {motion} from "framer-motion";
import {FaInstagram, FaWhatsapp, FaTwitter, FaPhoneAlt} from "react-icons/fa"; // Social Media Icons
import emailjs from "emailjs-com"; // For sending emails

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatusMessage("");

        // Send email using EmailJS
        emailjs
            .send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID, // Replace with your EmailJS service ID
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Replace with your EmailJS template ID
                formData,
                process.env.REACT_APP_EMAILJS_USER_ID // Replace with your EmailJS user ID
            )
            .then(
                (response) => {
                    setStatusMessage("Message sent successfully!");
                    setFormData({name: "", email: "", message: ""}); // Clear form
                },
                (error) => {
                    setStatusMessage("Failed to send message. Please try again.");
                }
            )
            .finally(() => setLoading(false));
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-primary to-secondary flex flex-col items-center p-6">
            {/* Heading */}
            <motion.h1
                initial={{opacity: 0, y: -50}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8, ease: "easeOut"}}
                className="text-4xl md:text-5xl font-bold text-center text-base-content mb-8 text-gray-900"
            >
                Contact Us
            </motion.h1>

            {/* Social Media Section */}
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1, ease: "easeOut"}}
                className="w-full max-w-4xl bg-base-100/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 mb-8"
            >
                <h2 className="text-2xl font-bold text-center mb-6">We are also on Social</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[{
                        name: "Contact Number",
                        value: "+91 8087243865",
                        color: "blue",
                        icon: <FaPhoneAlt/>,
                        link: "tel:+918087243865",
                    },
                        {
                            name: "Instagram",
                            value: "@fantasticbeast._",
                            color: "pink",
                            icon: <FaInstagram/>,
                            link: "https://instagram.com/fantasticbeast._"
                        },
                        {
                            name: "WhatsApp",
                            value: "+918087243865",
                            color: "green",
                            icon: <FaWhatsapp/>,
                            link: "https://wa.me/+918087243865"
                        },
                        {
                            name: "Twitter (X)",
                            value: "@yourprofile",
                            color: "blue",
                            icon: <FaTwitter/>,
                            link: "https://twitter.com/yourprofile"
                        }].map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{scale: 1.05}}
                            className={`bg-${item.color}-100 p-6 rounded-xl flex items-center gap-4  card bg-base-100 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1`}
                        >
                            <motion.span
                                animate={{y: [0, -5, 0]}}
                                transition={{repeat: Infinity, duration: 2, ease: "easeInOut"}}
                                className="text-3xl"
                            >
                                {item.icon}
                            </motion.span>
                            <div className="flex flex-col justify-center items-center text-center">
                                <h3 className="text-lg font-semibold">{item.name}</h3>
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-700 hover:underline text-center"
                                >
                                    {item.value}
                                </a>
                            </div>
                        </motion.div>

                    ))}
                </div>

            </motion.div>

            {/* Contact Form */}
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1, ease: "easeOut"}}
                className="w-full max-w-4xl bg-base-100/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12"
            >
                <form onSubmit={handleSubmit}>
                    {/* Name Input */}
                    <div className="form-control mb-6">
                        <label className="label">
                            <span className="label-text text-lg text-base-content">Your Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="input input-bordered w-full bg-base-200 placeholder-base-content/50"
                            required
                        />
                    </div>

                    {/* Email Input */}
                    <div className="form-control mb-6">
                        <label className="label">
                            <span className="label-text text-lg text-base-content">Your Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="input input-bordered w-full bg-base-200 placeholder-base-content/50"
                            required
                        />
                    </div>

                    {/* Message Input */}
                    <div className="form-control mb-6">
                        <label className="label">
                            <span className="label-text text-lg text-base-content">Your Message</span>
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Enter your message"
                            className="textarea textarea-bordered h-40 w-full bg-base-200 placeholder-base-content/50 resize-none"
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="form-control mt-8">
                        <button type="submit"
                                className="btn btn-primary btn-lg btn-outline hidden lg:flex rounded-md shadow-md"
                                disabled={loading}>
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </div>

                    {statusMessage && (
                        <p className="mt-4 text-center text-lg font-semibold">{statusMessage}</p>
                    )}
                </form>
            </motion.div>
        </div>
    );
}

export default Contact;
