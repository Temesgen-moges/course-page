import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'; // Import the necessary icons
import one from '../assets/img/one.jpg';
import two from '../assets/img/two.jpg';
import three from '../assets/img/three.jpg';

const WelcomeBack = () => {
  return (
    /* Welcome back start */
    <div>
      <div className="bg-[#f3f3f3] py-5  ">
        <div className="flex justify-between items-center pb-5  ">
          <h1 className="font-bold text-left text-md md:text-lg lg:text-xl pl-3 md:pl-5">
            Welcome back, ready for your next lesson?
          </h1>
          <a href="#" className="text-right sm:text-sm text-custom-blue-text pr-5">
            View history
          </a>
        </div>
      </div>
      
      <div className="flex bg-[#f3f3f3] md:px-10 ">
        <div className="bg-white p-4 m-2 flex border border-gray-300 rounded-lg">
          <div className="flex flex-col justify-between">
            <img src={one} alt="one" className="rounded-lg object-cover" />
            <div className='pt-5'>
              <h1 className='text-sm md:text-lg'>aws certified solution architect</h1>
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
              <h1 className='text-sm md:text-lg'>aws certified solution architect</h1>
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
              <h1 className='text-sm md:text-lg'>aws certified solution architect</h1>
              <div className="flex items-center pt-3">
                <img src={three} alt="three" className="w-8 h-8 rounded-full" />
                <h3 className="mr-2 pl-3 ">Lina</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end  pb-2 bg-[#f3f3f3] pr-7 md:pr-12" >
        <button className="bg-[#72eec9] mr-2 p-2 hover:bg-[#56cca9]">
          <FontAwesomeIcon icon={faCaretLeft} className="mr-2  text-white" />
        </button>
        <button className="bg-[#68ddba] p-2 hover:bg-[#56cca9]">
          <FontAwesomeIcon icon={faCaretRight} className="mr-2 text-white" />
        </button>
      </div>
    </div>
    /* Welcome back ends */
  );
};

export default WelcomeBack;
