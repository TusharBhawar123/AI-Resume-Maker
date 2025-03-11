import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, User, Info, Briefcase, Phone } from "lucide-react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="navbar bg-base-100/80 backdrop-blur-md shadow-md fixed top-0 w-full z-50">
            <div className="container mx-auto px-4 md:px-8">
                {/* Left - Brand Logo */}
                <div className="navbar-start">
                    <Link to="/" className="text-xl font-bold text-primary">
                        AI Resume Maker
                    </Link>
                </div>

                {/* Center - Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        <li>
                            <Link to="/About" className="flex items-center gap-2">
                                <Info className="h-5 w-5" /> About
                            </Link>
                        </li>
                        <li>
                            <Link to="/Services" className="flex items-center gap-2">
                                <Briefcase className="h-5 w-5" /> Services
                            </Link>
                        </li>
                        <li>
                            <Link to="/Contact" className="flex items-center gap-2">
                                <Phone className="h-5 w-5" /> Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Right - Login Button & Mobile Menu */}
                <div className="navbar-end text-end grid ">
                    <Link to="/Login" className="btn btn-sm btn-outline btn-primary hidden lg:flex rounded-md shadow-md">
                        <User className="h-4 w-4 mr-1" />
                        Log In
                    </Link>
                    {/* Mobile Menu Button */}

                </div>
            </div>
        </div>
    );
}

export default Navbar;
