import React from 'react'
import { getFeaturedEvents } from '../dummy-data'
//Components
import EventList from '../components/events/EventList';

const homePage = () => {

  const featuredEvents = getFeaturedEvents();

  return (
    <div>
       <EventList items={featuredEvents} />
    </div>
  )
}

export default homePage