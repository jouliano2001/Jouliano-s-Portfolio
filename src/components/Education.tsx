import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import workImage from '../assets/AmitLearning.png'
import workImage2 from '../assets/FacultyOfEngineering.png'


function Education() {
  return (
    <div className='flex flex-col my-25'>
      <div className="flex justify-center">
        <p className='text-5xl font-extrabold'>Education</p>
      </div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline lineColor="#4c1d95">
          <VerticalTimelineElement
          className="vertical-timeline-element--work "
          date="August 2024 – Present"
          iconStyle={{ background: '#d42027', color: '#000000' }}
          icon={ <div className='flex justify-center items-center w-full h-full'>
          <img
            src={workImage}
            className='w-full h-fill object-contain'
          />
        </div>}
        >
          <h3 className="vertical-timeline-element-title font-bold">Full Stack Web Development React+Node.js Diploma</h3>
          <h4 className="vertical-timeline-element-subtitle font-medium">Amit Learning</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="August 2023 – September 2023"
          iconStyle={{ background: '#ffffff', color: '#000000' }}
          icon={ <div className='flex justify-center items-center w-full h-full'>
          <img
            src={workImage2}
            className='w-[150%] h-[150%] object-contain'
          />
        </div>}
        >
          <h3 className="vertical-timeline-element-title font-bold">Bachelors Of Engineering</h3>
          <h4 className="vertical-timeline-element-subtitle font-medium">Cairo University Faculty of Engineering Credit Hours System</h4>
          <p>Graduated with a Good grade (2.58 GPA) from the Aeronautical Engineering and Management Department</p>
        </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default Education