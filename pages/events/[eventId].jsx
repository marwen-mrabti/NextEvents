import { useRouter } from "next/router";
import React, { Fragment } from "react";

import { getEventById } from "../../data/dummy-data";
import {
  EventContent,
  EventLogistics,
  EventSummary,
  LogisticsItem,
} from "../../components/events/event-detail";

import Button from "../../components/ui/Button";
import ErrorAlert from "../../components/ui/error-alert/error-alert";

const SingleEventPage = () => {
  const { eventId } = useRouter().query;

  const event = getEventById(eventId);

  if (!event) {
    return (
      <ErrorAlert>
        <p className="py-4">No event found</p>
        <Button link="/events">browse all events</Button>
      </ErrorAlert>
    );
  }
  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventContent description={event.description} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
    </Fragment>
  );
};

export default SingleEventPage;
