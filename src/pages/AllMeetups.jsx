import React, { useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

function AllMeetups() {
  const [isLoading, setIsLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);
  
  fetch(
    'https://react-getting-started-d3117-default-rtdb.firebaseio.com/meetups.json'
  )
    .then((response) => response.json())
    .then((data) => {
      setIsLoading(false);
      setMeetups(data);
    });

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={meetups} />
    </section>
  );
}

export default AllMeetups;
