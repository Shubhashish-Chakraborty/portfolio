import { ProjectBox } from "../components/ProjectBox.tsx";

export const Project = () => {
    return (
        <>  
            <div className="flex justify-center flex-wrap bg-blue-50">
                <ProjectBox title="Tech Learning PlatForm" thumbnail="https://www.studywithshubh.tech/swsBrandImg.png" githubLink="https://github.com/Shubhashish-Chakraborty/StudyWithShubh"  webLink="https://www.studywithshubh.tech/" description="some description i will add later"/>
                <ProjectBox title="Real-Time ChatApp" thumbnail="https://convoroom.vercel.app/convoRoomLogo.png" githubLink="https://github.com/Shubhashish-Chakraborty/convoroom"  webLink="https://convoroom.vercel.app" description="some description i will add later"/>
                <ProjectBox title="The ExtraOrdinary URL Shortener" thumbnail="https://theshortlink.vercel.app/tslLogo.png" githubLink="https://github.com/Shubhashish-Chakraborty/TheShortLink"  webLink="https://theshortlink.vercel.app" description="some description i will add later"/>
                <ProjectBox title="File Handling Utility" thumbnail="https://pypi.org/static/images/logo-small.8998e9d1.svg" githubLink="https://github.com/Shubhashish-Chakraborty/pyfilemaster"  webLink="https://pypi.org/project/pyfilemaster/" description="some description i will add later"/>
            </div>
        </>
    )
}