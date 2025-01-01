import { Github } from "../icons/SocialIcons/Github";
import { Linkedin } from "../icons/SocialIcons/Linkedin";
import { Upwork } from "../icons/SocialIcons/Upwork";

export const Home = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center px-4 py-8 md:py-16">
      <div className="text-center md:text-left md:max-w-lg">
        <div className="text-custom-1 text-3xl font-bold">Hello!</div>
        <div className="text-custom-2 font-bold text-4xl md:text-5xl">I'm Shubh</div>
        <div className="text-custom-1 text-2xl md:text-4xl">
          I'm a <span className="font-bold">Fullstack Developer</span>
        </div>
        <br />
        <div className="text-custom-1 text-xl md:text-2xl">
          I got expertise in Building & Deploying <br />
          <span className="font-bold">Backend</span> Applications & APIs
        </div>

        <div className="flex justify-center md:justify-start gap-4 mt-6">
          <div
            onClick={() => {
              window.open("https://github.com/Shubhashish-Chakraborty");
            }}
            className="cursor-pointer"
          >
            <Github />
          </div>
          <div
            onClick={() => {
              window.open("https://www.upwork.com/freelancers/~018880ca3d0d892eac");
            }}
            className="cursor-pointer"
          >
            <Upwork />
          </div>
          <div
            onClick={() => {
              window.open("https://www.linkedin.com/in/Shubhashish-Chakraborty/");
            }}
            className="cursor-pointer"
          >
            <Linkedin />
          </div>
        </div>

        <div className="mt-6">
          <button className="bg-custom-2 px-4 py-2 text-white font-bold rounded-xl shadow-lg hover:-translate-y-2 transition-all duration-500 shadow-cyan-300">
            Contact Me
          </button>
        </div>
      </div>

      <div className="hover:-translate-y-4 cursor-pointer transition-all duration-500 rounded-2xl mt-8 md:mt-0">
        <img
          src="./shubhimg01.jpg"
          alt="shubhImg"
          className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full mx-auto"
        />
      </div>
    </div>
  );
};
