import { format } from "date-fns";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import TodayIcon from "@mui/icons-material/Today";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { fontSize, spacing } from "@mui/system";

interface CalendarHeaderProps {
  currentMonth: Date | number;
}

const CalendarHeader = ({ currentMonth }: CalendarHeaderProps) => {
  console.log(currentMonth);
  return (
    <Grid
      container
      columns={7}
      sx={{
        border: 1,
        p: 2
      }}
    >
      <Grid item xs={6}>
        <Typography variant="h4" component="span">
          {format(currentMonth, "MM")}월
        </Typography>
        <Typography component="span" sx={{ marginLeft: 1 }}>
          {format(currentMonth, "yyyy")}년
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <NavigateBeforeIcon sx={{ fontSize: 30, color: "#757de8" }} />
          <Button variant="text" startIcon={<TodayIcon />}>
            이번 달
          </Button>
          <NavigateNextIcon sx={{ fontSize: 30, color: "#757de8" }} />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default CalendarHeader;
