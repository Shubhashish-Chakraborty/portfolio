import { Contact } from "../icons/NavbarIcons/Contact.tsx";
import { Home } from "../icons/NavbarIcons/Home.tsx";
import { Project } from "../icons/NavbarIcons/Project.tsx";
import { Skill } from "../icons/NavbarIcons/Skill.tsx";

const commonNavbarItemsStyles = "flex flex-col items-center p-4 rounded-xl cursor-pointer hover:bg-blue-200 hover:-translate-y-3 transition-all duration-500 shadow-md";

export const Navbar = () => {
    return(
        <>
            <div className="flex justify-center gap-12 py-6 font-bold">
                
                <div className={`${commonNavbarItemsStyles}`}>
                    <Home/>
                    Home
                </div>
                
                <div className={`${commonNavbarItemsStyles}`}>
                    <Skill/>
                    Skills
                </div>
                
                <div className={`${commonNavbarItemsStyles}`}>
                    <Project/>
                    Projects
                </div>

                <div className={`${commonNavbarItemsStyles}`}>
                    <Contact/>
                    Contact
                
                </div>
            </div>
        </>
    )
}