import CalendarHeader from "@components/CalenderHeader";
import CalendarDays from "@components/CalenderDays";
import CalenderCells from "@components/CalenderCells";
import { addMonths, subMonths, format } from "date-fns";
import { NextPage } from "next";
import React, { useState } from "react";
import useSWR from "swr";

interface Holiday {
  item: {
    dateKind: string;
    dateName: string;
    isHoliday: string;
    locdate: string;
    seq: number;
  };
}

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

  const year = format(currentMonth, "yyyy");
  const month = format(currentMonth, "MM");

  const { data: holidays } = useSWR<Holiday[]>(
    `/api/holidays?year=${year}&month=${month}`
  );
  let holidayArray = new Array();
  if (holidays && !Array.isArray(holidays)) {
    holidayArray.push(holidays);
  } else {
    holidayArray = holidays;
  }

  return (
    <div>
      <CalendarHeader
        currentMonth={currentMonth}
        goToPrevMonth={goToPrevMonth}
        goToNextMonth={goToNextMonth}
        goToCurrentMonth={goToCurrentMonth}
      />
      <CalendarDays />
      <CalenderCells currentMonth={currentMonth} holidays={holidayArray} />
    </div>
  );
};

export default CalendarPage;
