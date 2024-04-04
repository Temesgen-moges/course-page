import '../App.css';
import Navbar from '../components/Navbar';
import TopCategory from '../components/TopCategory';
import WelcomeBack from '../components/welcomeBack';
import GetChoice from '../components/GetChoice';
import ma1 from '../assets/img/one.jpg';
import ma2 from '../assets/img/two.jpg';
import ma3 from '../assets/img/three.jpg';
import ma4 from '../assets/img/one.jpg';
import Recommended from '../components/Recommended';

const Course = () => {
    const recommendedData = [
        {
          'image': ma1,
          'title': "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
          'teacherName': "Lina" ,
          'teacher_pic': ma1,
          'description':'marketingArticles',
          'duration':'3 Months',
          'type': 'Design',
          'prevPrice':'100',
          'curPrice':'80',
        },
        {
            'image': ma2,
            'title': "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
            'teacherName': "Lina" ,
            'teacher_pic': ma1,
            'description':'marketingArticles',
            'duration':'3 Months',
            'type': 'Design',
            'prevPrice':'100',
            'curPrice':'80',
          },
          {
            'image': ma3,
            'title': "AWS Certified solutions Architect",
            'teacherName': "Lina" ,
            'teacher_pic': ma1,
            'description':'marketingArticles',
            'duration':'3 Months',
            'type': 'Design',
            'prevPrice':'100',
            'curPrice':'80',
          },
          {
              'image': ma4,
              'title': "AWS Certified solutions Architect",
              'teacherName': "Lina" ,
              'teacher_pic': ma1,
              'description':'marketingArticles',
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
            <div className="mx-12 my-12">
                <div className="flex justify-between">
                    <h2 className="font-bold text-2xl">Marketing Articles</h2>
                    <a href="#" className='text-[#696984]' style={{ textDecoration: 'none', color: '#696984' }}><u>See More</u> </a>
                </div>
                <div className="grid grid-cols-4" >
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
        </div>
    );
}

export default Course;
