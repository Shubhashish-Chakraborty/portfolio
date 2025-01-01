import { Github } from "../icons/SocialIcons/Github"
import { Upwork } from "../icons/SocialIcons/Upwork"

export const Home = () => {
    return (
        <div className="flex justify-around items-center">  
            <div>
                <div className="text-custom-1 text-3xl font-bold">Hello !</div>
                <div className="text-custom-2 font-bold text-5xl">I'm Shubh</div>
                <div className="text-custom-1 text-4xl">I'm a <span className="font-bold">Fullstack Developer</span></div> <br />
                <div className="text-custom-1 text-2xl">I got expertise in Building & Deploying <br /> <span className="font-bold">Backend</span> Applications & API's </div>

                <div className="flex gap-4 mt-6 cursor-pointer">
                    <Github/>
                    <Upwork/>
                </div>

                <div className="mt-6">
                    <button className="bg-custom-2 px-4 py-2 text-white font-bold rounded-xl shadow-lg hover:-translate-y-2 transition-all duration-500 shadow-cyan-300">
                        Contact Me
                    </button>
                </div>

            </div>

            <div className="hover:-translate-y-4 cursor-pointer transition-all duration-500 rounded-2xl">
                <img src="./shubhimg01.jpg" alt="shubhImg" />
            </div>
        </div>
    )
}