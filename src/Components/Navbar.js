import React,{useState, useEffect} from 'react';
import { navItem } from '../Commom/Constant';

function Navbar() {
  console.log("navItem:-",navItem)
  const [showNev, setShowNev] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState(1);

  const onClickHandel = () =>{
    setShowNev(true);
  }

  const onClickActive = (id) =>{
      setActiveNavItem(id) 
  }

  return (
    <div className='text-white flex justify-between items-center h-24 px-8 max-w-[1240px] mx-auto'>
        <h1 className='w-full text-3xl text-[#00df9a] font-bold '>React.</h1>
        <ul className='hidden md:flex space-x-8'>
           {navItem.map((item,index)=>{
             return(<li className={activeNavItem === item.id ? 'text-[#00df9a] cursor-pointer border-b border-[#00df9a]':'hover:text-[#00df9a] cursor-pointer hover:border-b border-[#00df9a]'} onClick={()=>onClickActive(item.id)} index={index}>{item.name}</li>)
           })}
        </ul>
        <div>
        {showNev=== true ? '': <i className="fa fa-bars text-green-500 cursor-pointer md:hidden" aria-hidden="true" onClick={onClickHandel}></i>}
        </div>
        <div>
        {showNev && <i class="fa fa-times text-green-500 cursor-pointer md:hidden"  aria-hidden="true" onClick={()=>setShowNev(false)}></i> } 
        </div>
        {showNev && <div className='fixed left-0 top-0 pt-8  bg-[#000300] w-[60%] h-full border-r border-gray-900 md:hidden'>
         <h1 className='w-full text-3xl text-[#00df9a] font-bold pl-8 '>React.</h1>
            <ul className='p-4 uppercase'>
                {navItem.map((item,index)=>{
                    return(<li className={activeNavItem === item.id ? 'text-[#00df9a] p-4 border-b border-[#00df9a]' :'p-4 border-b border-gray-700'} index={index} onClick={()=>onClickActive(item.id)}>{item.name}</li>)
                })}
            </ul>
        </div>
        }
    </div>
  )
}

export default Navbar