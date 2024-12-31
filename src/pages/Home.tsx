export const Home = () => {
    return (
        <div className="flex justify-around items-center">  
            <div>
                <div>Hello !</div>
                <div>I'm Shubh</div>
                <div>I'm a Fullstack Developer</div>
                <div>I specialize in Building & Deploying Backend Applications & API's </div>
            </div>

            <div onClick={() => {window.open("https:shubhlinks.vercel.app")}} className="hover:shadow-md cursor-pointer transition-all duration-500 rounded-2xl">
                <img src="./shubhimg01.jpg" alt="shubhImg" />         
            </div>
        </div>
    )
}