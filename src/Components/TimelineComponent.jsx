// src/components/Timeline.js
import React from 'react';
import { FaAward } from 'react-icons/fa'; // Import the icon from react-icons
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'; // Ensure correct import from react-vertical-timeline-component
import 'react-vertical-timeline-component/style.min.css'; // Import the CSS for the timeline
import ibda2020a from '../../public/ibda2020a.jpg';
import ibda2020b from '../../public/ibda2020b.jpg';
import ibda2023a from '../../public/ibda2023a.jpg';
import ibda2023b from '../../public/ibda2023b.jpg';
import niq2022 from '../../public/niq2022.png';
import '../../src/App.css'; // Import your custom CSS

const TimelineComponent = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl font-semibold mb-4 text-center">Awards</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="IBDA 2020 Award"
          dateClassName="custom-date" // Apply custom class to date
          iconStyle={{ background: '#FFD700', color: '#fff' }}
          icon={<FaAward className='w-40' />}
        >
          <h3 className="vertical-timeline-element-title"></h3>
          <img 
            src={ibda2020a}
            alt="IBDA Award 2020" 
            className="w-full mt-2"
          />
         
          <p className="mt-2">Received the prestigious IBDA Award in 2020.</p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="NIQ 2022 Award"
          dateClassName="custom-date" // Apply custom class to date
          iconStyle={{ background: '#FFD700', color: '#fff' }}
          icon={<FaAward className='w-40' />}
        >
          <h3 className="vertical-timeline-element-title"></h3>
          <img 
            src={niq2022}
            alt="NIQ 2022 Award" 
            className="w-full mt-2"
          />
          
          <p className="mt-2">Received the prestigious NIQ 2022 Award in 2020.</p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="IBDA 2023 Award"
          dateClassName="custom-date" // Apply custom class to date
          iconStyle={{ background: '#FFD700', color: '#fff' }}
          icon={<FaAward />}
        >
          <h3 className="vertical-timeline-element-title"></h3>
          <img 
            src={ibda2023a} 
            alt="National Award 2023" 
            className="w-full mt-2"
          />
          
          <p className="mt-2">Won the IBDA Award in 2023 for outstanding performance.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default TimelineComponent;
