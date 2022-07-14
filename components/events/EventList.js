import React from 'react'
//Components
import EventListItem from './EventListItem';
//CSS
import styles from './EventList.module.css'

const EventList = (props) => {

    const { items } = props;

    return (
        <ul className={styles.list}>
            {items.map(event=>{
                return (
                    <EventListItem 
                        key={event.id}
                        id={event.id}
                        title={event.title}
                        image={event.image}
                        date={event.date}
                        location={event.location}
                    />
                )
            })}
        </ul>
    )
}

export default EventList