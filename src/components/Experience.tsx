import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import workImage from '../assets/AvioTradeLogo.png'
import workImage2 from '../assets/egyptairlogo.png'
import workImage3 from '../assets/TeleperLogo.png'


function Experience() {
  return (
    <div className='flex flex-col'>
      <div className="flex justify-center">
        <p className='text-5xl font-extrabold'>My Work Experience</p>
      </div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline lineColor="#915eff">
          <VerticalTimelineElement
          className="vertical-timeline-element--work "
          date="August 2024 – Present"
          iconStyle={{ background: '#ffffff', color: '#000000' }}
          icon={ <div className='flex justify-center items-center w-full h-full'>
          <img
            src={workImage}
            className='w-full h-fill object-contain'
          />
        </div>}
        >
          <h3 className="vertical-timeline-element-title font-bold">Aviation Sales Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle font-medium">Avio Trade</h4>
          <p>
            <ul className="list-disc pl-5 space-y-4">
              <li>
                <p className='font-medium'>Process Optimization:</p> Streamlined RFQ (Request for Quotation) workflows by automating tracking sheets, reducing manual errors by 30%.
              </li>
              <li>
                <p className='font-medium'>Stakeholder Collaboration:</p> Partnered with cross-functional teams (suppliers, airlines, internal stakeholders) to gather requirements and deliver solutions, improving response efficiency.
              </li>
              <li>
                <p className='font-medium'>Data Management:</p> Generated quarterly analytics reports for suppliers, translating complex data into actionable insights (showcases analytical skills relevant to backend/databases).
              </li>
              <li>
                <p className='font-medium'>Problem-Solving:</p> Resolved discrepancies in supplier submissions by implementing validation checks (parallel to debugging code).
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="August 2023 – September 2023"
          iconStyle={{ background: '#ffffff', color: '#000000' }}
          icon={ <div className='flex justify-center items-center w-full h-full'>
          <img
            src={workImage2}
            className='w-[75%] h-[75%] object-contain'
          />
        </div>}
        >
          <h3 className="vertical-timeline-element-title font-bold">Airframe & Powerplant Familiarization Training</h3>
          <h4 className="vertical-timeline-element-subtitle font-medium">EgyptAir</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July 2023 – August 2023"
          iconStyle={{ background: '#915eff', color: '#000000' }}
        >
          <h3 className="vertical-timeline-element-title font-bold">Aircraft Maintenance Training</h3>
          <h4 className="vertical-timeline-element-subtitle font-medium">AeroSky</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July 2023 – August 2023"
          iconStyle={{ background: '#ffffff', color: '#000000' }}
          icon={ <div className='flex justify-center items-center w-full h-full'>
          <img
            src={workImage3}
            className='w-[75%] h-[75%] object-contain'
          />
        </div>}
        >
          <h3 className="vertical-timeline-element-title font-bold">Customer Service</h3>
          <h4 className="vertical-timeline-element-subtitle font-medium">TelePerformance</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July 2022 – August 2022"
          iconStyle={{ background: '#ffffff', color: '#000000' }}
          icon={ <div className='flex justify-center items-center w-full h-full'>
          <img
            src={workImage2}
            className='w-[75%] h-[75%] object-contain'
          />
        </div>}
        >
          <h3 className="vertical-timeline-element-title font-bold">Gas Turbine Engine Familiarization Training</h3>
          <h4 className="vertical-timeline-element-subtitle font-medium">EgyptAir</h4>
        </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default Experience