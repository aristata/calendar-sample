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
interface HolidayObject {
  item: {
    dateKind: string;
    dateName: string;
    isHoliday: string;
    locdate: string;
    seq: number;
  };
}
interface HolidayArray {
  item: [
    {
      dateKind: string;
      dateName: string;
      isHoliday: string;
      locdate: string;
      seq: number;
    }
  ];
}

//   selectedDate?: Date;
//  onDateClick?: () => void;
interface CalenderCellsProps {
  currentMonth: Date;
  holidays: HolidayObject | HolidayArray;
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

  // 공공 데이터에서 데이터를 넘겨 줄때 데이터가 한건이면 오브젝트로 주고, 여러건이면 배열로 주기 때문에
  // 케이스에 맞게 동작하도록 분기를 나누었다
  let locdates = new Array();
  if (Array.isArray(holidays?.item)) {
    locdates = holidays?.item?.map((holiday) => {
      return holiday.locdate;
    });
  } else {
    locdates.push(holidays?.item.locdate);
  }

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
