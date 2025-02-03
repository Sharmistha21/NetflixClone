function Content(){
    return(
        <div className="flex flex-col w-full h-full items-center justify-center">
            <p className="font-extrabold text-5xl text-white">Unlimited movies,</p>
            <p className="font-extrabold text-5xl text-white">TV shows and more</p>
            <br></br>
            <p className="font-medium text-lg text-white">Starts at $149. Cancel at any time.</p>
            <br></br>
            <p className="font-normal text-white">Ready to watch?Enter your email to create or restart your membership.</p>
            <br></br>
            <div className=" flex row gap-1 ml-[-10px]">
            
            <input type="email" id="email" placeholder="Email address" className=" outline-1 w-72 h-12 text-white outline-fuchsia-200 rounded-xs p-5 bg-black opacity-50"></input>
            <button className="bg-red-600 text-white p-2 rounded-md w-[250px]">Get Started</button>
            </div>
        </div>
    )
}

export default Content