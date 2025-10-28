
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <Logo />
                        <span className="font-bold text-lg text-gray-700">Zuha Site Social Impact Team</span>
                    </div>
                    <p className="text-gray-500 mt-4 md:mt-0">&copy; {new Date().getFullYear()} Zuha Site. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
