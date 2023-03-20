import Head from "next/head";
import React, { useState, useEffect } from "react";

import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/event-search/EventSearch";
import { getAllEvents } from "../../data/dummy-data";

const AllEventsPage = () => {
  const [events, setEvents] = useState([]);

  const DummyEvents = getAllEvents();
  useEffect(() => {
    setEvents(DummyEvents);
  }, []);

  return (
    <div>
      <Head>
        <title>AllEvents - nextEvents</title>
      </Head>
      <EventSearch />
      <EventList events={events} />
    </div>
  );
};

export default AllEventsPage;
