function Header(){
    return(
    <div className="flex flex-row">
        <div className="flex w-1/2 px-25">
           <h1 className="text-red-600 font-semibold text-4xl">NETFLIX</h1>
        </div>
         <div className="flex items-end justify-end w-1/2 gap-5 px-25">
           <select className="border-white rounded-xs border-2 text-white">
             <option value="English" className="text-black">English</option>
             <option value="Hindi" className="text-black">Hindi</option>
           </select>
            <button className="bg-red-600 text-white p-1 rounded-md w-15 font-normal ">Sign In</button>
          </div>
    </div>
    )
}

export default Header