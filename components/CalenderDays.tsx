import { Grid, Stack } from "@mui/material";

const CalenderDays = () => {
  const days = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일"
  ];
  return (
    <Grid
      container
      columns={7}
      direction={"row"}
      justifyContent={"space-between"}
      sx={{
        p: 1,
        borderBottom: 1
      }}
    >
      {days.map((day, index) => (
        <Grid item key={index} xs={0.95} sx={{ p: 1, textAlign: "start" }}>
          <span>{day}</span>
        </Grid>
      ))}
    </Grid>
  );
};

export default CalenderDays;
