import { format } from "date-fns";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import TodayIcon from "@mui/icons-material/Today";
import CircleIcon from "@mui/icons-material/Circle";
import { Button, Grid, Stack, Typography } from "@mui/material";

interface CalendarHeaderProps {
  currentMonth: Date;
  goToPrevMonth: () => void;
  goToNextMonth: () => void;
  goToCurrentMonth: () => void;
}

const CalendarHeader = ({
  currentMonth,
  goToPrevMonth,
  goToNextMonth,
  goToCurrentMonth
}: CalendarHeaderProps) => {
  // console.log(currentMonth);
  return (
    <Grid
      container
      columns={7}
      sx={{
        p: 2
      }}
    >
      <Grid item xs={1}>
        <Typography variant="h4" component="span">
          {format(currentMonth, "MM")}월
        </Typography>
        <Typography component="span" sx={{ marginLeft: 1 }}>
          {format(currentMonth, "yyyy")}년
        </Typography>
      </Grid>
      <Grid item xs={5} sx={{ position: "relative" }}>
        <Stack
          direction={"row"}
          spacing={2}
          alignItems={"flex-end"}
          sx={{ position: "absolute", height: "100%", paddingBottom: 1 }}
        >
          <span>
            <CircleIcon
              sx={{ width: 16, height: 16, color: "blue", marginRight: 1 }}
            />
            매출액
          </span>
          <span>
            <CircleIcon
              sx={{ width: 16, height: 16, color: "gray", marginRight: 1 }}
            />
            입금 예정 정산액
          </span>
          <span>
            <CircleIcon
              sx={{ width: 16, height: 16, color: "#69f0ae", marginRight: 1 }}
            />
            입금 완료 정산액
          </span>
        </Stack>
      </Grid>
      <Grid item xs={1}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <NavigateBeforeIcon
            sx={{ fontSize: 30, color: "#757de8" }}
            onClick={goToPrevMonth}
            className={"hover:cursor-pointer hover:text-orange-500"}
          />
          <Button
            variant="text"
            startIcon={<TodayIcon />}
            onClick={goToCurrentMonth}
            className={"hover:cursor-pointer hover:text-orange-500"}
          >
            이번 달
          </Button>
          <NavigateNextIcon
            sx={{ fontSize: 30, color: "#757de8" }}
            onClick={goToNextMonth}
            className={"hover:cursor-pointer hover:text-orange-500"}
          />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default CalendarHeader;
