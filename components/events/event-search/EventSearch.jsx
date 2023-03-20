import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getFilteredEvents } from "../../../data/dummy-data";
import classes from "./events-search.module.css";

const EventSearch = () => {
  const [dateFilter, setDateFilter] = useState({ year: "", month: "" });
  const router = useRouter();
  const handleOnEventSearch = async (e) => {
    e.preventDefault();
    if (dateFilter.year === "" || dateFilter.month === "") {
      router.push("/events");
      return;
    }
    router.push(`/events/${dateFilter.year}/${dateFilter.month}`);
  };

  return (
    <form className={classes.form} onSubmit={handleOnEventSearch}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">year</label>
          <select
            id="year"
            onChange={(e) => setDateFilter((prev) => ({ ...prev, year: e.target.value }))}
          >
            <option value="">All</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </select>
        </div>

        <div className={classes.control}>
          <label htmlFor="month">month</label>
          <select
            id="month"
            onChange={(e) =>
              setDateFilter((prev) => ({ ...prev, month: e.target.value }))
            }
          >
            <option value="">All</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <button type="submit">Find Events</button>
    </form>
  );
};

export default EventSearch;
