import React from 'react';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetup() {
  const addMeetupHandler = (meetupData) => {
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    fetch(
      'https://react-getting-started-d3117-default-rtdb.firebaseio.com/meetups.json',
      requestOptions
    );
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetup;
