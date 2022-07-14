import React from 'react'
import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList'
import EventSearch from '../../components/events/EventSearch';

const Events = () => {

  const events = getAllEvents();

  return (
    <div>
      <EventSearch />
      <EventList items={events} />
    </div>
  )
}

export default Events