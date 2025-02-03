import { RiComputerFill } from "react-icons/ri";
import { FaArrowCircleDown } from "react-icons/fa";
import { GiTorch } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";


function Reasons(){
    return(
        <div className="flex flex-row justify-center h-full w-full text-white gap-3 p-4">
        <div className="flex flex-col  bg-linear-to-br from-[#192145] to-[#200e17] h-60 rounded-2xl p-3">
            <h1 className="text-2xl font-medium mt-6">Enjoy on your TV</h1>
           <div className="mt-4"><p>Watch on smart TVs,PlayStation,</p>
            <p>Xbox,Chromecast,Apple TV,Blu-ray</p>
            <p>players and more.</p>
            </div>
            <div className="flex justify-end">
                <RiComputerFill className="size-12 mt-10 text-fuchsia-950 "></RiComputerFill>
            </div>
        </div>
        <div className="flex flex-col bg-linear-to-br from-[#192145] to-[#200e17]  h-60 rounded-2xl p-3">
            <h2 className="text-2xl font-medium mt-6">Download your shows </h2>
            <h2 className="text-2xl font-medium">to watch offline</h2>
            <p className="mt-4">Save your favourites easily and</p>
            <p>always have something to watch</p>
            <div className="flex justify-end">
                <FaArrowCircleDown className="size-12 mt-9 text-fuchsia-950"/>
            </div>
           
        </div> 
        <div className="flex flex-col  bg-linear-to-br from-[#192145] to-[#200e17] h-60 rounded-2xl p-3">
            <h2 className="text-2xl font-medium mt-6">Watch everywhere</h2>
            <p className="mt-4">Stream unlimited movies and TV</p>
            <p>shows on your phone,tablet,laptop</p>
            <p>and TV</p>
            <div className="flex justify-end"><GiTorch  className="size-12 mt-9 text-fuchsia-950"/></div>
        </div>
        <div className="flex flex-col bg-linear-to-br from-[#192145] to-[#200e17] h-60 rounded-2xl p-3">
            <h2 className="text-2xl font-medium mt-6">Create profiles for kids</h2>
            <p className="mt-4"> Send kids on adventures with their</p>
            <p>favourite characters in a space made</p>
            <p>just for them--free with your</p>
            <p>membership</p>
            <div className="flex justify-end">
                <CgProfile className="size-12 mt-5 text-fuchsia-950"/>

            </div>
        </div>
    </div>
    )
}

export default Reasons