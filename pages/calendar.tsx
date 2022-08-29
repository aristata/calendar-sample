import CalendarHeader from "@components/CalenderHeader";
import { NextPage } from "next";
import React from "react";

const CalendarPage: NextPage = () => {
  const now = Date.now();
  return (
    <div>
      <CalendarHeader currentMonth={now} />
      <div>Days</div>
      <div>Body</div>
    </div>
  );
};

export default CalendarPage;
