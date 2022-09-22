import React from 'react';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetup() {
  const addMeetupHandler = (meetupData) => {
    console.log(meetupData);
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetup;
