import React from "react";
import { motion } from "framer-motion";
import { Users, Briefcase, GraduationCap, UserCheck, Building2 } from "lucide-react";

function About() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-primary to-secondary flex flex-col items-center p-6">
            {/* Heading */}
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl md:text-5xl font-bold text-center text-base-content mb-8"
            >
                About Us
            </motion.h1>

            {/* About Sections */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-full max-w-5xl bg-base-100/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 mb-8"
            >
                {[{
                    title: "🚀 About the Project",
                    description: "AI Resume Maker is an innovative tool designed to help individuals create professional resumes effortlessly. By leveraging the power of artificial intelligence, the platform allows users to input their skills, experiences, and achievements, and generates a tailored resume in minutes."
                },
                    {
                        title: "🤖 About DeepSeek R1 Model",
                        description: "The DeepSeek R1 model is a state-of-the-art AI model designed to understand and process natural language with exceptional accuracy. In the context of AI Resume Maker, it analyzes user input and creates resumes that are professional and tailored to specific industries."
                    },
                    {
                        title: "🌍 How It Helps Society",
                        description: "AI Resume Maker, powered by the DeepSeek R1 model, revolutionizes job applications by making resume creation accessible and efficient. It empowers individuals to showcase their skills effectively, benefiting various groups."
                    }].map((section, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="card bg-base-100 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 mb-6"
                    >
                        <div className="card-body">
                            <h2 className="card-title text-xl font-bold">{section.title}</h2>
                            <p>{section.description}</p>
                        </div>
                    </motion.div>
                ))}

                {/* Beneficiaries Section */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="text-3xl font-bold text-center text-primary mt-10 mb-6"
                >
                    Who Benefits?
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[{
                        title: "Job Seekers", icon: <Briefcase />, description: "Simplifies the resume-building process, allowing them to focus on preparing for interviews."
                    },
                        {
                            title: "Students & Fresh Graduates", icon: <GraduationCap />, description: "Helps them create professional resumes even with limited experience."
                        },
                        {
                            title: "Professionals", icon: <UserCheck />, description: "Allows them to update their resumes quickly and efficiently as they progress in their careers."
                        },
                        {
                            title: "Employers", icon: <Building2 />, description: "Ensures they receive well-structured and relevant resumes, making the hiring process smoother."
                        }].map((beneficiary, index) => (
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
                                    {beneficiary.icon}
                                </motion.span>
                                <div>
                                    <h3 className="card-title text-xl font-bold">{beneficiary.title}</h3>
                                    <p>{beneficiary.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

export default About;
