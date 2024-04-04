import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import React from 'react';
import one from '../assets/img/one.jpg';
import two from '../assets/img/two.jpg';
import three from '../assets/img/three.jpg';

const WelcomeBack = () => {
  return (
    /* Welcome back start */
    <div>
      <div className="bg-custom-blue p-10 ">
        <div className="flex justify-between items-center pb-5 ">
          <h1 className="font-bold text-left text-xl">
            Welcome back, ready for your next lesson?
          </h1>
          <a href="#" className="text-right text-sm text-custom-blue-text">
            View history
          </a>
        </div>
        </div>
      
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
    /* Welcome back ends */
  );
};

export default WelcomeBack;
