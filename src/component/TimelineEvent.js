import React from 'react';
import styled from 'styled-components';

const StyledTimelineEvent = styled.div`
  background: #fff;
  margin-bottom: 20px;
  position: relative;
  display: flex;
  margin: 20px 0;
  border-radius: 8px;
  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
    0 18px 36px -18px rgba(0, 0, 0, 0.3),
    0 -12px 36px -8px rgba(0, 0, 0, 0.025);

  .timeline_event_title {
    font-size: 1.2rem;
    line-height: 1.4;
    text-transform: uppercase;
    font-weight: 600;
    color: #9251ac;
    letter-spacing: 1.5px;
  }

  .timeline_event_content {
    padding: 20px;
  }

  .timeline_event_date {
    color: #f6a4ec;
    font-size: 1.5rem;
    font-weight: 600;
    white-space: nowrap;
  }

  .timeline_event_icon {
    border-radius: 8px 0 0 8px;
    background: ${(props) => props.iconBackground};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: 40%;
    font-size: 2rem;
    color: ${(props) => props.iconColor};
    padding: 20px;

    i {
      position: absolute;
      top: 50%;
      left: -65px;
      font-size: 2.5rem;
      transform: translateY(-50%);
    }
  }

  .timeline_event_description {
    flex-basis: 60%;
  }

  &:after {
    content: "";
    width: 2px;
    height: 100%;
    background: ${(props) => props.lineColor};
    position: absolute;
    top: 52%;
    left: -3.5rem;
    z-index: -1;
  }

  &:before {
    content: "";
    width: 5rem;
    height: 5rem;
    position: absolute;
    background: ${(props) => props.circleColor};
    border-radius: 100%;
    left: -6rem;
    top: 50%;
    transform: translateY(-50%);
    border: 2px solid ${(props) => props.lineColor};
  }

  &.timeline__event--type2 {
    .timeline_event_date {
      color: #fff;
    }

    .timeline_event_icon {
      background: ${(props) => props.type2Color};
      color: ${(props) => props.type2Color};
    }

    .timeline_event_title {
      color: ${(props) => props.type2Color};
    }
  }

  &.timeline__event--type3 {
    .timeline_event_date {
      color: #fff;
    }

    .timeline_event_icon {
      background: ${(props) => props.type3Color};
      color: ${(props) => props.type3Color};
    }

    .timeline_event_title {
      color: ${(props) => props.type3Color};
    }
  }

  &:last-child {
    &:after {
      content: none;
    }
  }
`;

const TimelineEvent = ({ type, icon, date, title, description }) => {
  let iconBackground, iconColor, lineColor, circleColor;

  switch (type) {
    case 'type2':
      iconBackground = '#87bbfe';
      iconColor = '#555ac0';
      lineColor = '#555ac0';
      circleColor = '#87bbfe';
      break;
    case 'type3':
      iconBackground = '#aff1b6';
      iconColor = '#24b47e';
      lineColor = '#24b47e';
      circleColor = '#aff1b6';
      break;
    default:
      iconBackground = '#9251ac';
      iconColor = '#9251ac';
      lineColor = '#9251ac';
      circleColor = '#f6a4ec';
  }

  return (
    <StyledTimelineEvent
      className={`timeline__event animated fadeInUp ${
        type ? `timeline__event--${type}` : ''
      }`}
      iconBackground={iconBackground}
      iconColor={iconColor}
      lineColor={lineColor}
      circleColor={circleColor}
      type2Color="#555ac0"
      type3Color="#24b47e"
    >
      <div className="timeline_event_icon">
        <i className={icon}></i>
        <div className="timeline_event_date">{date}</div>
      </div>
      <div className="timeline_event_content">
        <div className="timeline_event_title">{title}</div>
        <div className="timeline_event_description">
          <p>{description}</p>
        </div>
      </div>
    </StyledTimelineEvent>
  );
};

export default TimelineEvent;
