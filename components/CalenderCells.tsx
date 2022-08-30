import { Grid } from "@mui/material";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  format,
  parse
} from "date-fns";
import { dynamicClass } from "@libs/utils";
import { json } from "stream/consumers";

interface Holiday {
  item: {
    dateKind: string;
    dateName: string;
    isHoliday: string;
    locdate: string;
    seq: number;
  };
}

//   selectedDate?: Date;
//  onDateClick?: () => void;
interface CalenderCellsProps {
  currentMonth: Date;
  holidays: Holiday[];
}

const CalenderCells = ({ currentMonth, holidays }: CalenderCellsProps) => {
  // 오늘이 속한 달의 시작일
  const monthStart = startOfMonth(currentMonth);

  // 오늘이 속한 달의 마지막일
  const monthEnd = endOfMonth(currentMonth);

  // 달력 시작일
  const startDate = startOfWeek(monthStart);

  // 달력 마지막일
  const endDate = endOfWeek(monthEnd);

  // 날짜들
  const dates = eachDayOfInterval({ start: startDate, end: endDate });
  const days = dates.map((date) => {
    return format(date, "yyyyMMdd");
  });

  const locdates = holidays?.map((holiday) => {
    // console.log("holiday", holiday);
    return holiday.item?.locdate;
  });

  console.log("locdates", locdates);

  return (
    <Grid container columns={7} direction={"row"} sx={{}}>
      {days.map((day, index) => (
        <Grid
          key={index}
          item
          xs={1}
          sx={{ borderBottom: 1, height: 100, p: 1 }}
        >
          <span
            className={dynamicClass(
              index % 7 === 0
                ? "text-red-600"
                : index % 7 === 6
                ? "text-red-600"
                : locdates?.find((locdate) => {
                    console.log("locdate", locdate);
                    console.log("day", day);
                    return locdate == day;
                  })
                ? "text-red-600"
                : "text-gray-700",
              "font-bold p-2"
            )}
          >
            {day.slice(-2)}
          </span>
        </Grid>
      ))}
    </Grid>
  );
};

export default CalenderCells;
