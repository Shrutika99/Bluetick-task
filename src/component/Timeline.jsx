

import React from 'react';
import styled from 'styled-components';
import TimelineEvent from './TimelineEvent';

const StyledTimeline = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  margin: 5% auto;
`;

const Timeline = () => {
  return (
    <StyledTimeline>
      <TimelineEvent  type="type1"
        icon='fafacebook'
        date="20-08-2019"
        title="Birthday"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!">
            
       </TimelineEvent>
      <TimelineEvent
        type="type2"
         icon="lni-burger"
        date="20-08-2019"
        title="Lunch"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!"
      />
      <TimelineEvent
        type="type3"
        icon="lni-slim"
        date="20-08-2019"
        title="Exercise"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!"
      />
      <TimelineEvent
        type="type1"
        icon="lni-cake"
        date="20-08-2019"
        title="Birthday"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!"
      />
    </StyledTimeline>
  );
};

export default Timeline;