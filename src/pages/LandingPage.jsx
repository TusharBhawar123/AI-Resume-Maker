import React from "react";
import {Link} from "react-router";

const LandingPage = () => {
    return (
        <div className="bg-base-90">
            {/* Hero Section */}
            <section
                className="hero min-h-screen bg-base-200 relative overflow-hidden flex items-center justify-center">
                {/* Glass Background Overlay */}
                <div className="absolute inset-0 bg-base-100/20 backdrop-blur-sm"></div>

                {/* Hero Content */}
                <div className="hero-content text-center relative z-50 w-full">
                    <div className="max-4xl:items-stretch bg-base-100/50 backdrop-blur-md rounded-3xl p-8 md:p-8 border
                    border-base-200 shadow-2xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-base-content mb-6 animate-fade-in-down">
                            Create Your Perfect Resume with AI
                        </h1>
                        <p className="text-lg md:text-xl text-base-content opacity-90 mb-8 animate-fade-in-up">
                            Build a professional resume in minutes. Just describe yourself, and our
                            AI will do the rest!
                        </p>
                        <Link to={'/GenerateResume'} className="btn btn-primary btn-lg animate-bounce-in">
                            Get Started
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-base-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="card bg-base-200 shadow-xl">
                            <div className="card-body items-center text-center">
                                <div className="text-4xl mb-4">🚀</div>
                                <h3 className="card-title">AI-Powered</h3>
                                <p>
                                    Our advanced AI analyzes your input and generates a tailored
                                    resume.
                                </p>
                            </div>
                        </div>
                        {/* Feature 2 */}
                        <div className="card bg-base-200 shadow-xl">
                            <div className="card-body items-center text-center">
                                <div className="text-4xl mb-4">📄</div>
                                <h3 className="card-title">Multiple Templates</h3>
                                <p>
                                    Choose from a variety of professionally designed resume
                                    templates.
                                </p>
                            </div>
                        </div>
                        {/* Feature 3 */}
                        <div className="card bg-base-200 shadow-xl">
                            <div className="card-body items-center text-center">
                                <div className="text-4xl mb-4">⏱️</div>
                                <h3 className="card-title">Save Time</h3>
                                <p>
                                    Create a resume in minutes, not hours. Focus on what matters
                                    most.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-base-200">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        What Our Users Say
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Testimonial 1 */}
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <p>
                                    "This AI resume maker is a game-changer! I got my dream job
                                    thanks to the professional resume it helped me create."
                                </p>
                                <div className="flex items-center mt-4">
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img
                                                src="https://i.pravatar.cc/150?img=1"
                                                alt="User"
                                            />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-bold">John Doe</h4>
                                        <p>Software Engineer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Testimonial 2 */}
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <p>
                                    "I was able to create a stunning resume in just 10 minutes.
                                    Highly recommended!"
                                </p>
                                <div className="flex items-center mt-4">
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img
                                                src="https://i.pravatar.cc/150?img=2"
                                                alt="User"
                                            />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-bold">Jane Smith</h4>
                                        <p>Product Manager</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-20 bg-base-100">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
                    <p className="mb-8">
                        Create your AI-powered resume today and land your dream job!
                    </p>
                    <Link to={'/GenerateResume'} className="btn btn-primary">Create Your Resume</Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="footer-title">AI Resume Maker</h4>
                            <p>Your go-to tool for creating professional resumes with AI.</p>
                        </div>
                        <div>
                            <h4 className="footer-title">Quick Links</h4>
                            <Link to={'/About'} className="link link-hover">
                                About
                            </Link>
                            <Link to={'/Contact'} className="link link-hover">
                                Contact
                            </Link>
                        </div>
                        <div>
                            <h4 className="footer-title">Contact Us</h4>
                            <p>Email: rushisalunke006.com</p>
                            <p>Phone: +91 8087243865</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;