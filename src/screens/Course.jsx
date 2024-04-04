import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/Navbar';
import TopCategory from '../components/TopCategory';
import WelcomeBack from '../components/welcomeBack';
import GetChoice from '../components/GetChoice';
import Recommended from '../components/Recommended';
import Footer from '../components/Footer';
import courseTypeIcon from '../assets/img/courseTypeIcon.png';
import profile from '../assets/img/profile.png';
import ma1 from '../assets/img/ma1.png';
import ma2 from '../assets/img/ma2.png';
import ma3 from '../assets/img/ma3.png';
import ma4 from '../assets/img/ma4.png';

const Course = () => {
  const recommendedData = [
    {
      'image': ma1,
      'title': "AWS Certified solutions Architect",
      'teacherName': "Lina" ,
      'teacher_pic': profile,
      'description':' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet, felis in congue vehicula, ',
      'duration':'3 Months',
      'type': 'Design',
      'prevPrice':'100',
      'curPrice':'80',
    },
    {
      'image': ma2,
      'title': "AWS Certified solutions Architect",
      'teacherName': "Lina" ,
      'teacher_pic': profile,
      'description':' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet, felis in congue vehicula ',
      'duration':'3 Months',
      'type': 'Design',
      'prevPrice':'100',
      'curPrice':'80',
    },
    {
      'image': ma3,
      'title': "AWS Certified solutions Architect",
      'teacherName': "Lina" ,
      'teacher_pic': profile,
      'description':' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet, felis in congue vehicula, ',
      'duration':'3 Months',
      'type': 'Design',
      'prevPrice':'100',
      'curPrice':'80',
    },
    {
      'image': ma4,
      'title': "AWS Certified solutions Architect",
      'teacherName': "Lina" ,
      'teacher_pic': profile,
      'description':' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet, felis in congue vehicula, ',
      'duration':'3 Months',
      'type': 'Design',
      'prevPrice':'100',
      'curPrice':'80',
    },
  ];

  return (
    <div>
      <Navbar/>
      <WelcomeBack/>
      <TopCategory/>
      <div className="bg-[#f3f3f3] mt-12 ">
        <div className="flex justify-between pl-8 pb-8 pt-6 mr-10">
          <h2 className="font-bold text-2xl pl-5">Recommended for you</h2>
          <a href="#" className="text-right text-sm text-custom-blue-text pr-5">
             See all
          </a>
        </div>
        <div className="grid grid-cols-4 mr-10 ml-10 pb-10">
          {recommendedData.map((element, index) => (
            <Recommended
              key={index} 
              image={element.image}
              text={element.title}
              teacherName={element.teacherName}
              teacherPic= {element.teacher_pic}
              duration={element.duration}
              curPrice={element.curPrice}
              prevPrice={element.prevPrice}
              type={element.type}
              description={element.description}
            />
          ))}
        </div>
        <div className='mr-10 mt-1'>
  <div className="flex justify-end pr-4 pb-2 bg-[#f3f3f3]">
    <button className="bg-[#72eec9] mr-2 p-2  hover:bg-[#56cca9]">
      <FontAwesomeIcon icon={faCaretLeft} className="mr-2  text-white" />
    </button>
    <button className="bg-[#68ddba] p-2 hover:bg-[#56cca9]">
      <FontAwesomeIcon icon={faCaretRight} className="mr-2 text-white" />
    </button>
  </div>
</div>
      </div>

      <div className="bg-white mt-12">
        <div className="flex justify-between pl-8 pb-8 pt-6 mr-10">
          <h2 className="font-bold text-2xl pl-5">Get choice of your course</h2>
          <a href="#" className="text-right text-sm text-custom-blue-text pr-5">
             See all
          </a></div>
        <div className="grid grid-cols-4 mr-10 ml-10 pb-10">
          {recommendedData.map((element, index) => (
            <Recommended
              key={index} 
              image={element.image}
              text={element.title}
              teacherName={element.teacherName}
              teacherPic= {element.teacher_pic}
              duration={element.duration}
              curPrice={element.curPrice}
              prevPrice={element.prevPrice}
              type={element.type}
              description={element.description}
            />
          ))}
        </div>
      </div>

      <GetChoice/>
      <div className="bg-white mt-12">
        <div className="flex justify-between pl-8 pb-8 pt-6 mr-10">
          <h2 className="font-bold text-2xl pl-5">The course in Personal development</h2>
          <a href="#" className="text-right text-sm text-custom-blue-text pr-5">
             See all
          </a> </div>
        <div className="grid grid-cols-4 mr-10 ml-10 pb-10">
          {recommendedData.map((element, index) => (
            <Recommended
              key={index} 
              image={element.image}
              text={element.title}
              teacherName={element.teacherName}
              teacherPic= {element.teacher_pic}
              duration={element.duration}
              curPrice={element.curPrice}
              prevPrice={element.prevPrice}
              type={element.type}
              description={element.description}
            />
          ))}
        </div>
      </div>


      <div className="bg-[#f3f3f3] mt-12">
        <div className="flex justify-between pl-8 pb-8 pt-6 mr-10 ">
          <h2 className="font-bold text-2xl pl-5">Students are viewing </h2>
          <a href="#" className="text-right text-sm text-custom-blue-text pr-5">
             See all
          </a> </div>
        <div className="grid grid-cols-4 mr-10 ml-10 pb-10">
          {recommendedData.map((element, index) => (
            <Recommended
              key={index} 
              image={element.image}
              text={element.title}
              teacherName={element.teacherName}
              teacherPic= {element.teacher_pic}
              duration={element.duration}
              curPrice={element.curPrice}
              prevPrice={element.prevPrice}
              type={element.type}
              description={element.description}
            />
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Course;
