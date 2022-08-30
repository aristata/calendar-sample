import CalendarHeader from "@components/CalenderHeader";
import CalendarDays from "@components/CalenderDays";
import CalenderCells from "@components/CalenderCells";
import { addMonths, subMonths } from "date-fns";
import { NextPage } from "next";
import React, { useState } from "react";

const CalendarPage: NextPage = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const goToPrevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const goToCurrentMonth = () => {
    setCurrentMonth(new Date());
  };

  return (
    <div>
      <CalendarHeader
        currentMonth={currentMonth}
        goToPrevMonth={goToPrevMonth}
        goToNextMonth={goToNextMonth}
        goToCurrentMonth={goToCurrentMonth}
      />
      <CalendarDays />
      <CalenderCells currentMonth={currentMonth} />
    </div>
  );
};

export default CalendarPage;
