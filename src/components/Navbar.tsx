import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Contact } from "../icons/NavbarIcons/Contact.tsx";
import { Home } from "../icons/NavbarIcons/Home.tsx";
import { Project } from "../icons/NavbarIcons/Project.tsx";
// import { Skill } from "../icons/NavbarIcons/Skill.tsx";

const commonNavbarItemsStyles =
    "flex flex-col items-center p-4 rounded-xl cursor-pointer hover:bg-blue-100 hover:-translate-y-3 transition-all duration-500 shadow-md";

export const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation(); // Get the current location (path)
    const [currentTab, setCurrentTab] = useState("");

    // Set the current tab based on the location path
    useEffect(() => {
        const path = location.pathname.substring(1); // Get the path without '/'
        if (path === "") setCurrentTab("home");
        else if (path === "skills") setCurrentTab("skills");
        else if (path === "projects") setCurrentTab("projects");
        else if (path === "contact") setCurrentTab("contact");
    }, [location]);

    const handleTabClick = (tab: string) => {
        setCurrentTab(tab);
    };

    return (
        <div className="flex justify-center gap-12 py-6 font-bold">
            <div
                className={`${commonNavbarItemsStyles} ${
                    currentTab === "home" ? "bg-blue-200" : "bg-white"
                }`}
                onClick={() => {
                    navigate("/");
                    handleTabClick("home");
                }}
            >
                <Home />
                Home
            </div>

            <div
                className={`${commonNavbarItemsStyles} ${
                    currentTab === "projects" ? "bg-blue-200" : "bg-white"
                }`}
                onClick={() => {
                    navigate("projects");
                    handleTabClick("projects");
                }}
            >
                <Project />
                Projects
            </div>

            {/* <div
                className={`${commonNavbarItemsStyles} ${
                    currentTab === "skills" ? "bg-blue-200" : "bg-white"
                }`}
                onClick={() => {
                    navigate("skills");
                    handleTabClick("skills");
                }}
            >
                <Skill />
                Skills
            </div> */}

            <div
                className={`${commonNavbarItemsStyles} ${
                    currentTab === "contact" ? "bg-blue-200" : "bg-white"
                }`}
                onClick={() => {
                    navigate("contact");
                    handleTabClick("contact");
                }}
            >
                <Contact />
                Contact
            </div>
        </div>
    );
};
