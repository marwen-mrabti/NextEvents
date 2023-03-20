import React from "react";

import classes from "./event-item.module.css";
import Button from "../ui/Button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

const EventItem = ({ event }) => {
  const { title, date, location, image, id: eventId } = event;

  //format date
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  //format address
  const addressText = location.replace(", ", "\n");

  return (
    <li className={classes.item}>
      <img src={`/${image}`} alt={title} />
      <div className={classes.content}>
        <div>
          <h2> {title} </h2>
          <div className={classes.date}>
            <DateIcon />
            <time> {humanReadableDate} </time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{addressText}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={`/events/${eventId}`}>
            {" "}
            <span>explore</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
