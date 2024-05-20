"use client";

import { Box, Button, IconButton, Stack } from "@mui/material";
import ScheduleModal from "./components/ScheduleModal";
import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import dayjs from "dayjs";
import { dateFormatter } from "@/utils/dateFormatter";
import { useGetAllSchedulesQuery } from "@/redux/api/scheduleApi";
import { TSchedule } from "@/types/schedule";

const DoctorScedules = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [allSchedule, setAllSchedule] = useState<any>([]);
  const { data, isLoading, isSuccess } = useGetAllSchedulesQuery({});

  const schedules = data?.schedules;
  const meta = data?.meta;

  useEffect(() => {
    console.log(schedules);
    const updateData = schedules?.map((schedule: TSchedule, index) => {
      return {
        id: schedule?.id,
        startDate: dateFormatter(schedule?.startDate),
        endDate: dateFormatter(schedule?.endDate),
        startTime: dayjs(schedule?.startDate).format("hh:mm a"),
        endTime: dayjs(schedule?.endDate).format("hh:mm a"),
      };
    });
    setAllSchedule(updateData);

    // console.log(updateData);
  }, [schedules]);

  const columns: GridColDef[] = [
    { field: "startDate", headerName: "Start Date", flex: 1 },
    { field: "endDate", headerName: "End Date", flex: 1 },
    { field: "startTime", headerName: "Start Time", flex: 1 },
    { field: "endTime", headerName: "End Time", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <IconButton aria-label="delete">
              <DeleteIcon sx={{ color: "red" }} />
            </IconButton>
            <IconButton aria-label="delete">
              <EditIcon sx={{}} />
            </IconButton>
          </Box>
        );
      },
    },
  ];
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsModalOpen(true)}>
          Create New Schedule
        </Button>
        <ScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />
      </Stack>
      {!isLoading ? (
        <Box my={2}>
          <DataGrid rows={allSchedule ?? []} columns={columns} />
        </Box>
      ) : (
        <h1>Loading.....</h1>
      )}
    </Box>
  );
};

export default DoctorScedules;
