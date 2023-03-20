import Head from "next/head";
import { getFeaturedEvents } from "../data/dummy-data";
import EventList from "../components/events/EventList";

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <>
      <Head>
        <title>featuredEvents - NextEvents</title>
      </Head>
      <EventList events={featuredEvents} />
    </>
  );
}
export default HomePage;
