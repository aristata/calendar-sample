import { Grid } from "@mui/material";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  format
} from "date-fns";
import { dynamicClass } from "@libs/utils";

//   selectedDate?: Date;
//  onDateClick?: () => void;
interface CalenderCellsProps {
  currentMonth: Date;
}

const CalenderCells = ({ currentMonth }: CalenderCellsProps) => {
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
  const days = dates.map((day) => {
    return format(day, "d");
  });

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
                : "text-gray-700",
              "font-bold p-2"
            )}
          >
            {day}
          </span>
        </Grid>
      ))}
    </Grid>
  );
};

export default CalenderCells;
