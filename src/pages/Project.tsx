import { ProjectBox } from "../components/ProjectBox.tsx";

export const Project = () => {
    return (
        <>  
            <div className="flex justify-center flex-wrap bg-blue-50">
                <ProjectBox title="Tech Learning PlatForm" thumbnail="/swsImg.png" githubLink="https://github.com/Shubhashish-Chakraborty/StudyWithShubh"  webLink="https://www.studywithshubh.tech/" />
                <ProjectBox title="Infino || E-Commerce Platform" thumbnail="https://infinostore.com/infinoLogo.png" githubLink="https://github.com/infinostore"  webLink="https://infinostore.com" />
                <ProjectBox title="Real-Time ChatApp" thumbnail="https://convoroom.vercel.app/convoRoomLogo.png" githubLink="https://github.com/Shubhashish-Chakraborty/convoroom"  webLink="https://convoroom.vercel.app" />
                <ProjectBox title="The ExtraOrdinary URL Shortener" thumbnail="https://theshortlink.vercel.app/tslLogo.png" githubLink="https://github.com/Shubhashish-Chakraborty/TheShortLink"  webLink="https://theshortlink.vercel.app" />
                <ProjectBox title="Private Data Manager" thumbnail="https://myprivdata.vercel.app/myPrivData_Logo.png" githubLink="https://github.com/Shubhashish-Chakraborty/myprivdata"  webLink="https://myprivdata.vercel.app" />
                <ProjectBox title="Code Solutions For Students" thumbnail="https://ipcode.vercel.app/webLogo.png" githubLink="https://github.com/Shubhashish-Chakraborty/bce-code-solution"  webLink="https://ipcode.vercel.app" />
                <ProjectBox title="File Handling Utility" thumbnail="https://pypi.org/static/images/logo-small.8998e9d1.svg" githubLink="https://github.com/Shubhashish-Chakraborty/pyfilemaster"  webLink="https://pypi.org/project/pyfilemaster/" />
            </div>
        </>
    )
}
