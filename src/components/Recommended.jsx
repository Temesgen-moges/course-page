import { faDollarSign, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import courseTypeIcon from '../assets/img/courseTypeIcon.png';

const Recommended = ({ image, text, teacherPic, teacherName, description, type, duration, prevPrice, curPrice }) => {
  return (
    <div className=''>
    <div className=' '>
    <div className="recommended-container bg-white shadow-lg p-4 mr-3 ml-3">
      <div className="recommended-content">
        <div className="recommended-header ">
          <img src={image} alt="Course" className="recommended-image rounded-lg" />
          <div className="recommended-info pt-5">
            <div className='flex justify-between'>
              <p className=''><img src={courseTypeIcon} alt="" className="inline-flex mr-2" /> <span className="italic font-light">{type}</span> </p>
              <p><span><FontAwesomeIcon icon={faClock} className='text-[#49BBBD]' /> </span>{duration}</p>
            </div>
            <h2 className="font-bold pt-5">{text}</h2>
            <p className='mt-3'>{description}</p>
            <div className='flex justify-between'>
              <div className="flex mt-8">
                <img src={teacherPic} alt="Teacher" className="teacher-profile" />
                <p className='pt-5'><strong>{teacherName}</strong></p>
              </div>
              <p className="mt-8 pt-4">
                <span className='line-through italic pr-4'>
                  <FontAwesomeIcon icon={faDollarSign} />
                  {prevPrice}
                </span>
                <span className="text-2xl font-bold text-[#48bdb7]">
                  <FontAwesomeIcon icon={faDollarSign} />
                  {curPrice}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
  );
};

export default Recommended;
