import { Github } from '../icons/SocialIcons/Github';
import { Upwork } from '../icons/SocialIcons/Upwork';
import { Linkedin } from '../icons/SocialIcons/Linkedin';
import { Mail } from '../icons/others/Mail';
import { Twitter } from '../icons/SocialIcons/Twitter';

export const Contact = () => {

    return (
        <div className="min-h-screen px-4 bg-blue-50 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl p-6 bg-blue-100 font-bold rounded-xl cursor-pointer hover:-translate-y-2 transition-all duration-500 shadow-md">
                {/* Social Media Handles Section */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">Contact Me</h2>
                    <p className="mt-2 text-gray-600">Reach out via social media or the form below. Youll get a response as Soon as Possible!!</p>
                    <div className="mt-4 flex justify-center gap-4">
                        {/* Placeholder for Social Media Icons */}
                        <a href="https://github.com/Shubhashish-Chakraborty" target='_blank' className="text-gray-500">
                            <Github/>
                        </a>
                        <a href="https://www.linkedin.com/in/Shubhashish-Chakraborty/" target='_blank' className="text-gray-500">
                            <Linkedin/>
                        </a>
                        <a href="mailto:shubhashish147@gmail.com" className="text-gray-500">
                            <Mail/>
                        </a>
                        <a href="https://www.upwork.com/freelancers/~018880ca3d0d892eac" target='_blank' className="text-gray-500">
                            <Upwork/>
                        </a>
                        <a href="https://x.com/__Shubhashish__" target='_blank' className="text-gray-500">
                            <Twitter/>
                        </a>
                    </div>
                </div>

                {/* Contact Form Section */}
                
            </div>
        </div>
    );
};
