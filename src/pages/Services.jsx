import React from "react";
import { motion } from "framer-motion";
import { FileText, Layout, Sparkles, FileEdit, ClipboardList, Compass } from "lucide-react";

function Services() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-primary to-secondary flex flex-col items-center p-6">
            {/* Heading */}
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl md:text-5xl font-bold text-center text-base-content mb-8"
            >
                Our Services
            </motion.h1>

            {/* Services Grid */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-full max-w-5xl bg-base-100/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 mb-8"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        { title: "AI-Powered Resume Builder", icon: <FileText />, description: "Create professional resumes in minutes using our advanced AI technology." },
                        { title: "Multiple Resume Templates", icon: <Layout />, description: "Choose from a variety of professionally designed resume templates tailored to different industries." },
                        { title: "Resume Optimization", icon: <Sparkles />, description: "Our AI analyzes your resume and provides suggestions to optimize it for job applications." },
                        { title: "Cover Letter Generator", icon: <FileEdit />, description: "Generate personalized cover letters to increase your chances of landing an interview." },
                        { title: "Job Application Tracker", icon: <ClipboardList />, description: "Keep track of all your job applications in one place." },
                        { title: "Career Guidance", icon: <Compass />, description: "Get personalized career advice based on your skills and goals." }
                    ].map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="card bg-base-100 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1"
                        >
                            <div className="card-body flex items-start gap-4">
                                <motion.span
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                    className="text-primary text-xl"
                                >
                                    {service.icon}
                                </motion.span>
                                <div>
                                    <h2 className="card-title text-xl font-bold">{service.title}</h2>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

export default Services;
