
import Logo from "./Assets/Group 114.png"
export function Header() {

return (
  <nav className="w-full ">
    <div className="w-full  mx-auto grid grid-flow-col py-3 ">
 <img src={Logo} width={150} height={90} className="ml-20 my-6 "></img>
 <div className="hidden lg:flex col-start-6 text-xl font-medium text-gray-200 my-6 col-end-10 gap-4 ">
    <p className="">Home</p>
    <p>Services</p>
    <p>Pricing</p>
    <p>About US</p>
 </div>
 </div>
  </nav> 
)
}