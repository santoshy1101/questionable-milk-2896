import  {useState} from "react";
import {BsGithub} from "react-icons/bs";
import {FaPassport} from "react-icons/fa";
import {AiOutlineArrowDown} from "react-icons/ai";

const data =[
  {
    img:"https://avatars.githubusercontent.com/u/107991675?v=4",
    name:"Santosh Yadav",
    git:"https://github.com/santoshy1101?tab=stars",
    port:"https://santoshy1101.github.io/",

  },
  {
    img:"https://avatars.githubusercontent.com/u/103634544?v=4",
    name:"Rahul Yadav",
    git:"https://github.com/rahulyadav826870",
    port:"https://rahulyadav826870.github.io/"
  },
  {
    img:"https://avatars.githubusercontent.com/u/98159898?v=4",
    name:"MD SAKIL AHMED",
    git:"https://github.com/0ALEX-2",
    port:"https://0alex-2.github.io/",
  },
  {
    img:"https://avatars.githubusercontent.com/u/61815606?v=4",
    name:"Mohammad Sahil",
    git:"https://github.com/sahilkh07",
    port:"https://sahilkh07.github.io/"
  },
  {
    img:"https://ca.slack-edge.com/T04F6SEMZ27-U04FKPZ8DGW-acf65a0da600-512",
    name:"Ravi Rana",
    git:"https://github.com/ravirana75036",
    port:"https://github.com/ravirana75036",
  }
]


function Accordion1() {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="accordion bg-slate-70 ">
        <div
          className={` accordion-header group bg-white p-2 text-lg font-medium  flex justify-between  `}
          onClick={() => setIsOpen(!isOpen)}
        >
        <p className="text-xl font-semibold cu">More About Team Member</p>
         <div  className={`bg-transparent cursor-pointer  text-sm px-4 py-1   rounded-lg ${isOpen ? "rotate-[180deg] "  : "rotate-[0deg]"}  duration-1000 text-slate-900`}> <AiOutlineArrowDown size={30}/></div>
        </div>
        {isOpen && (
          <div className="accordion-content duration-1000 p-4 bg-gray-200 ">
            
            <div className="bg-white px-4 py-5 ">
            <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-y-8 gap-x-10 ">
      
           {
            data.map((el,ind)=>{
             return <div key={ind} className="rounded-tl-[50px]  border rounded-br-[40px]  bg-[#F43397] text-slate-50 items-center w-[150px] flex flex-col py-8 px-2 justify-center ">
            
              <img className="w-[100%] h-[100%] rounded-full object-contain" src={el.img} alt={el.name} />
              <p>{el.name}</p>
              <div className="flex gap-x-4   px-4 ">
              <div onClick={()=>window.open(el.git,"_blank")} className="bg-transparent cursor-pointer border text-sm px-4 py-1  hover:scale-150  rounded-lg hover:rounded-full hover:rotate-[720deg] hover:duration-1000  duration-700 text-slate-50"><BsGithub size={20}/></div>
              <div onClick={()=>window.open(el.port,"_blank")} className="bg-transparent cursor-pointer border text-sm px-4 py-1  hover:scale-150  rounded-lg hover:rounded-full hover:rotate-[720deg] hover:duration-1000 duration-700 text-slate-50"><FaPassport size={20}/></div>
              </div>
              </div>
            })
           }
            </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  
  export default Accordion1;