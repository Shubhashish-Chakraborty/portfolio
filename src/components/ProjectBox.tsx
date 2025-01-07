import { Redirect } from "../icons/others/Redirect"
import { Github } from "../icons/SocialIcons/Github"

// generic project component

export const ProjectBox = ({title , thumbnail , githubLink , webLink , description}: {
    title: string,
    thumbnail: string,
    githubLink: string,
    webLink: string,
    description: string
}) => {
    return (
        <div className="bg-white p-6 rounded-lg m-10 shadow-lg hover:-translate-y-3 transition-all duration-300 cursor-pointer max-w-xs w-full">
            <img
                onClick={() => {window.open(webLink)}}
                src={thumbnail}
                alt="Project Thumbnail"
                className="w-full h-48 rounded-t-lg mb-4"
            />
            <div onClick={() => {window.open(webLink)}} className="text-center hover:underline font-bold text-custom-2 text-xl pb-4">
                {title}
            </div>
            <div className="flex justify-center items-center mb-4">
                <div className="flex gap-4">
                    <div
                        className="cursor-pointer hover:text-gray-900"
                        onClick={() => { window.open(githubLink) }}
                    >
                        <Github/>
                    </div>
                    <div
                        className="cursor-pointer hover:text-gray-900"
                        onClick={() => { window.open(webLink) }}
                    >
                        <Redirect/>
                    </div>
                </div>
            </div>
            <div className="text-md font-bold flex justify-center">{description}</div>
        </div>
    )
}