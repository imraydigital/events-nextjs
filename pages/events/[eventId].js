import React from 'react'
import {useRouter} from 'next/router'
import {getEventById} from '../../dummy-data';
//Components
import EventSummary from '../../components/events/EventDetail/EventSummary'
import EventLogistics from '../../components/events/EventDetail/EventLogistics';
import EventContent from '../../components/events/EventDetail/EventContent';

const EventDetailPage = () => {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if(!event) {
    return <p>No event found</p>
  } else {
    return (
      <>
        <EventSummary title={event.title} />
        <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title}/>
        <EventContent>
          <p>{event.description}</p>
        </EventContent>
      </>
    )
  }

}

export default EventDetailPage