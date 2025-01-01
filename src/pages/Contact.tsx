import React, { useState } from 'react';
import { Github } from '../icons/SocialIcons/Github';
import { Upwork } from '../icons/SocialIcons/Upwork';
import { Linkedin } from '../icons/SocialIcons/Linkedin';
import { Mail } from '../icons/others/Mail';

export const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add your backend POST request logic here
        console.log(formData);
    };

    return (
        <div className="min-h-screen bg-gray-100 px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl bg-white p-6 rounded-lg shadow-md">
                {/* Social Media Handles Section */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">Contact Me</h2>
                    <p className="mt-2 text-gray-600">Reach out via social media or the form below. Youll get a response as Soon as Possible!!</p>
                    <div className="mt-4 flex justify-center gap-4">
                        {/* Placeholder for Social Media Icons */}
                        <a href="https://github.com/Shubhashish-Chakraborty" target='_blank' className="text-gray-500">
                            <Github/>
                        </a>
                        <a href="https://www.linkedin.com/in/Shubhashish-Chakraborty/" className="text-gray-500">
                            <Linkedin/>
                        </a>
                        <a href="#" className="text-gray-500">
                            <Mail/>
                        </a>
                        <a href="#" className="text-gray-500">
                            <Upwork/>
                        </a>
                    </div>
                </div>

                {/* Contact Form Section */}
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                    {/* First Name */}
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                            First Name
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="John"
                        />
                    </div>

                    {/* Last Name */}
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                            Last Name
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Doe"
                        />
                    </div>

                    {/* Phone Number */}
                    <div className="sm:col-span-2">
                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                            Phone Number
                        </label>
                        <input
                            type="text"
                            name="phoneNumber"
                            id="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="123-456-7890"
                        />
                    </div>

                    {/* Email */}
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="example@example.com"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="sm:col-span-2">
                        <button
                            type="submit"
                            className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white font-medium hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
