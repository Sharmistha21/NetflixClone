import Header from "./Header"
import Content from "./Content"
import Photos from "./Photos"
import Reasons from "./Reasons"

function App() {
   const link1="https://dnm.nflximg.net/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABTGEXrEQA-qYJoC5TtssUpE88Zvi8z4CvqhgAi56Ocsay82Xb7Bye8ad2xK-wVH_QhpbnRSdclClMokdX84e3PANvjkOxPc7Fgy_9_TuJKKOwCaQfeukVWvH7P7h0_zClpuS_A.jpg?r=06c"
   const link2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEqlO51X13CYjejvFPcjdapJY__25LSzWqxg&s"
   const link3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwd0yQnKajRaYJBHU9Td_bQVAgK_p8RW-8Bg&s"
   const link4="https://static1.squarespace.com/static/63bb3e8a824d7e2f7eedf0d3/64ac424fcaadf8324a193593/67506b260c60871911624ada/1733325312255/Venom%2BThe%2BLast%2BDance%2BHorizontal%2B5.jpg?format=1500w"
   const link5="https://static.digit.in/Vivo-X200-Pro-vs-Oppo-Find-X8-pro-1.png"
   return (
    <div className="h-screen w-full">
      <img 
        src="https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_large.jpg" 
        className="absolute inset-0 h-full w-full object-cover -z-20" 
        alt="Background"
      />
        <div className="absolute inset-0 bg-black opacity-75 -z-10 h-full"> </div>
          <Header></Header>
          <Content></Content>
        <div className="flex flex-col bg-black -mt-16">
            <h2 className="text-white font-bold text-xl pl-60 pb-4 pt-5">Trending Now</h2>
          <div className="flex flex-row gap-4 justify-center h-full w-full ">

            <Photos link={link1}></Photos>
            <Photos link={link2}></Photos>
            <Photos link={link3}></Photos>
            <Photos link={link4}></Photos>
            <Photos link={link5}></Photos>
          </div>
          <div>
          <h2 className="text-white font-bold text-xl pl-60 pt-12">More Reasons to join</h2>
            <Reasons></Reasons>
          </div>
      </div>
  </div>
  )
}

export default App
