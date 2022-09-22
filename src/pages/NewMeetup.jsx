import React from 'react';
import { useHistory } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetup() {
  const history = useHistory();

  const addMeetupHandler = async (meetupData) => {
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    await fetch(
      'https://react-getting-started-d3117-default-rtdb.firebaseio.com/meetups.json',
      requestOptions
    );

    history.replace('/');
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetup;
