import { ProjectBox } from "../components/ProjectBox.tsx";

export const Project = () => {
    return (
        <>  
            <div className="flex justify-center flex-wrap">
                <ProjectBox title="Tech Learning PlatForm" thumbnail="https://www.studywithshubh.tech/assets/signinPageImg.jpg" githubLink="https://github.com/Shubhashish-Chakraborty"  webLink="https://www.studywithshubh.tech/" description="some description i will add later"/>
                <ProjectBox title="File Handling Utility" thumbnail="https://pypi.org/static/images/logo-small.8998e9d1.svg" githubLink="https://github.com/Shubhashish-Chakraborty/pyfilemaster"  webLink="https://pypi.org/project/pyfilemaster/" description="some description i will add later"/>
            </div>
        </>
    )
}