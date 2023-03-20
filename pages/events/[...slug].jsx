import React, { Fragment } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

import { getFilteredEvents } from "../../data/dummy-data";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/results-title/results-title";
import Button from "../../components/ui/Button";
import ErrorAlert from "../../components/ui/error-alert/error-alert";

const FilteredEventsPage = () => {
  const { slug } = useRouter().query;
  if (!slug) {
    return (
      <ErrorAlert>
        <p className="center">Loading...</p>
      </ErrorAlert>
    );
  }
  const year = +slug[0];
  const month = +slug[1];
  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month < 1 ||
    month > 12
  ) {
    return (
      <ErrorAlert>
        <p className="py-4">Invalid filter. Please adjust your values!</p>
        <Button link="/events">browse all events</Button>
      </ErrorAlert>
    );
  }

  const filteredEvents = getFilteredEvents({ year, month });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <ErrorAlert>
        <p className="py-4">No events found for the chosen filter!</p>
        <Button link="/events">browse all events</Button>
      </ErrorAlert>
    );
  }

  const date = new Date(year, month - 1);

  return (
    <Fragment>
      <Head>
        <title>{`${year}-${month}`} - nextEvents</title>
      </Head>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </Fragment>
  );
};

export default FilteredEventsPage;
