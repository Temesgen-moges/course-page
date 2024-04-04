import one from './assets/img/one.jpg';
import two from './assets/img/two.jpg';
import three from './assets/img/three.jpg';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { FaPen } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import './App.css';

const App = () => {
  return (
    <div className=''>
      <div className='h-16'>
        <nav>
          nav
        </nav>
      </div>
      <div className="bg-custom-blue p-10 ">
        <div className="flex justify-between items-center pb-5 ">
          <h1 className="font-bold text-left text-xl">
            Welcome back, ready for your next lesson?
          </h1>
          <a href="#" className="text-right text-sm text-custom-blue-text">
            View history
          </a>
        </div>

 {/* Welcome back start */}

        <div className="flex bg-custom-blue">
          <div className="bg-white p-4 m-2 flex border border-gray-300 rounded-lg">
            <div className="flex flex-col justify-between">
              <img src={one} alt="one" className="rounded-lg object-cover" />
              <div className='pt-5'>
                <h1>aws certified solution architect</h1>
                <div className="flex items-center pt-3">
                  
                  <img src={one} alt="one" className="w-8 h-8 rounded-full " />
                  <h3 className="mr-2 pl-3">Lina</h3>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 m-2   flex border border-gray-300 rounded-lg">
            <div className="flex flex-col justify-between">
              <img src={one} alt="two" className="rounded-lg object-cover" />
              <div>
                <h1>aws certified solution architect</h1>
                <div className="flex items-center pt-3">
                  
                  <img src={two} alt="two" className="w-8 h-8 rounded-full" />
                  <h3 className="mr-2 pl-3">Lina</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 m-2 flex border border-gray-300 rounded-lg relative">
            <div className="flex flex-col justify-between">
              <img src={one} alt="three" className="rounded-lg object-cover" />
              <div>
                <h1>aws certified solution architect</h1>
                <div className="flex items-center pt-3">
                  <img src={three} alt="three" className="w-8 h-8 rounded-full" />
                  <h3 className="mr-2 pl-3 ">Lina</h3>
                </div>
              </div>
             
            </div>
          </div>
          
        </div>
        
        <div className="flex justify-end pt-5">
          <button className="text-right text-sm text-white bg-custom-blue-text mr-2">
            <BsChevronLeft size={30} />
          </button>
          <button className="text-right text-sm text-white bg-custom-blue-text mr-2">
            <BsChevronRight size={30} />
          </button>
        </div>

          
      </div>
      {/* Welcome back ends */}


      {/* choice favourite start */}
      <div className="mt-10 ">
      <h1 className="font-bold text-left text-xl ml-7 pt-10 ">
            Choice favourite course from top category
          </h1>
  <div className="container flex space-x-9 ml-7 mt-10">
  <div className='shadow-xl rounded-lg'>
      <div className='flex justify-center items-center mt-8 '>
    <div className="h-14 w-12 bg-slate-600 flex justify-center items-center shadow-md ">
      <FaPen className="text-white" />
    </div>
    </div>
    <div className="content">
    <h1 className="font-bold text-left text-xl flex justify-center items-center  p-3">
            Design 
          </h1>
    <p className='p-5'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
      aliquet, felis in congue vehicula, 
      
    </p>
  </div>
    </div>
    
    <div className='shadow-xl rounded-lg'>
      <div className='flex justify-center items-center mt-8'>
    <div className="h-14 w-12 bg-green-600 flex justify-center items-center shadow-md">
      <FaDesktop  className="text-white" />
    </div>
    </div>
    <div className="content">
    <h1 className="font-bold text-left text-xl flex justify-center items-center  p-3">
            Development
          </h1>
    <p className='p-5'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
      aliquet, felis in congue vehicula, 
      
    </p>
  </div>
    </div>

     <div className='shadow-xl rounded-lg'>
      <div className='flex justify-center items-center mt-8'>
    <div className="h-14 w-12 bg-orange-400 flex justify-center items-center shadow-md">
      <FaDatabase className="text-white" />
    </div>
    </div>
    <div className="content">
    <h1 className="font-bold text-left text-xl flex justify-center items-center  p-3">
            Welcome back, 
          </h1>
    <p className='p-5'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
      aliquet, felis in congue vehicula, 
      
    </p>
  </div>
    </div>

    
    <div className='shadow-xl rounded-lg'>
      <div className='flex justify-center items-center mt-8'>
    <div className="h-14 w-12 bg-blue-200 flex justify-center items-center shadow-md">
      <MdBusinessCenter className="text-white" />
    </div>
    </div>
    <div className="content">
    <h1 className="font-bold text-left text-xl flex justify-center items-center p-3">
            Business
          </h1>
    <p className='p-5'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
      aliquet, felis in congue vehicula, 
      
    </p>
  </div>
    </div>
  </div>



  <div className="container flex space-x-9 ml-7 mt-4">
  <div className='shadow-xl rounded-lg'>
      <div className='flex justify-center items-center mt-8 '>
    <div className="h-14 w-12 bg-slate-600 flex justify-center items-center shadow-md ">
      <FaPen className="text-white" />
    </div>
    </div>
    <div className="content">
    <h1 className="font-bold text-left text-xl flex justify-center items-center  p-3">
            Design 
          </h1>
    <p className='p-5'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
      aliquet, felis in congue vehicula, 
      
    </p>
  </div>
    </div>
    
    <div className='shadow-xl rounded-lg'>
      <div className='flex justify-center items-center mt-8'>
    <div className="h-14 w-12 bg-green-600 flex justify-center items-center shadow-md">
      <FaDesktop  className="text-white" />
    </div>
    </div>
    <div className="content">
    <h1 className="font-bold text-left text-xl flex justify-center items-center  p-3">
            Development
          </h1>
    <p className='p-5'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
      aliquet, felis in congue vehicula, 
      
    </p>
  </div>
    </div>

     <div className='shadow-xl rounded-lg'>
      <div className='flex justify-center items-center mt-8'>
    <div className="h-14 w-12 bg-orange-400 flex justify-center items-center shadow-md">
      <FaDatabase className="text-white" />
    </div>
    </div>
    <div className="content">
    <h1 className="font-bold text-left text-xl flex justify-center items-center  p-3">
            Welcome back, 
          </h1>
    <p className='p-5'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
      aliquet, felis in congue vehicula, 
      
    </p>
  </div>
    </div>

    
    <div className='shadow-xl rounded-lg'>
      <div className='flex justify-center items-center mt-8'>
    <div className="h-14 w-12 bg-blue-200 flex justify-center items-center shadow-md">
      <MdBusinessCenter className="text-white" />
    </div>
    </div>
    <div className="content">
    <h1 className="font-bold text-left text-xl flex justify-center items-center p-3">
            Business
          </h1>
    <p className='p-5'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
      aliquet, felis in congue vehicula, 
      
    </p>
  </div>
    </div>
  </div>
 
</div>

{/* choice favourite ends */}

{/* Recommended for you start */}
<div className="bg-custom-blue p-10 mt-10">
<div>
<h1 className="font-bold text-left text-xl">
            Recommended for you
          </h1>
          <div className="container flex space-x-9  mt-10 " >
          <div className="bg-white p-4 m-2 flex border border-gray-300 rounded-lg relative">
            <div className="flex flex-col justify-between">
              <img src={one} alt="three" className="rounded-lg object-cover" />
              <div>
                <h1>aws certified solution architect</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
      aliquet, felis in congue vehicula,</p>
                <div className="flex items-center pt-3">
                  <img src={three} alt="three" className="w-8 h-8 rounded-full" />
                  <h3 className="mr-2 pl-3 ">Lina</h3>
                </div>
              </div>
             
            </div>
          </div>

          <div className="bg-white p-4 m-2 flex border border-gray-300 rounded-lg relative">
            <div className="flex flex-col justify-between">
              <img src={one} alt="three" className="rounded-lg object-cover" />
              <div>
                <h1>aws certified solution architect</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                   aliquet, felis in congue vehicula,</p>
                <div className="flex items-center pt-3">
                  <img src={three} alt="three" className="w-8 h-8 rounded-full" />
                  <h3 className="mr-2 pl-3 ">Lina</h3>
                </div>
              </div>
             
            </div>
          </div>

          <div className="bg-white p-4 m-2 flex border border-gray-300 rounded-lg relative">
            <div className="flex flex-col justify-between">
              <img src={one} alt="three" className="rounded-lg object-cover" />
              <div>
                <h1>aws certified solution architect</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                   aliquet, felis in congue vehicula,</p>
                <div className="flex items-center pt-3">
                  <img src={three} alt="three" className="w-8 h-8 rounded-full" />
                  <h3 className="mr-2 pl-3 ">Lina</h3>
                </div>
              </div>
             
            </div>
          </div>

          <div className="bg-white p-4 m-2 flex border border-gray-300 rounded-lg relative">
            <div className="flex flex-col justify-between">
              <img src={one} alt="three" className="rounded-lg object-cover" />
              <div>
                <h1>aws certified solution architect</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
      aliquet, felis in congue vehicula,</p>
                <div className="flex items-center pt-3">
                  <img src={three} alt="three" className="w-8 h-8 rounded-full" />
                  <h3 className="mr-2 pl-3 ">Lina</h3>
                </div>
              </div>
             
            </div>
          </div>


          </div>
</div>
 </div>
{/* Recommended for you ends */}
{/* online coaching start */}
<div className='mr-10 ml-10 '>
    <div style={{ backgroundColor: '#252641' }} className='rounded-2xl p-10 m-10'>
        <h1 className='font-bold text-center text-white text-2xl p-6'>
            Online coaching lessons for remote learning.
        </h1>
        <p className='text-center text-white pl-20 pr-20 pb-6'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            aliquet, felis in congue vehicula,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            aliquet, felis in congue vehicula,
        </p>
        <div className=' flex justify-center'>
        <button style={{ backgroundColor: '#49bbbd' }} className=" mx-auto text-center rounded text-sm h-10 w-36">
            Start learning now 
        </button>
        </div>
    </div>
</div>

    </div>
    

  );
}

export default App;
