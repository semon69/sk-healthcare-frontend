"use client";

import SKDatePicker from "@/components/form/SKDatePicker";
import SKForm from "@/components/form/SKForm";
import SKTimePicker from "@/components/form/SKTimePicker";
import SKModal from "@/components/shared/SKModal";
import { useCreateScheduleMutation } from "@/redux/api/scheduleApi";
import { dateFormatter } from "@/utils/dateFormatter";
import { timeFormatter } from "@/utils/timeFormatter";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ScheduleModal = ({ open, setOpen }: TProps) => {
  const [createSchedule] = useCreateScheduleMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    // console.log(values);
    // console.log(values);
    values.startDate = dateFormatter(values.startDate);
    values.endDate = dateFormatter(values.endDate);
    values.startTime = timeFormatter(values.startTime);
    values.endTime = timeFormatter(values.endTime);
    try {
      const res = await createSchedule(values).unwrap();
      // console.log(res);
      if (res?.length) {
        toast.success("Schedules created successfully!");
        setOpen(false);
      }
    } catch (err: any) {
      console.error(err);
    }
  };
  return (
    <SKModal open={open} setOpen={setOpen} title="Create A New Schedule">
      <SKForm onSubmit={handleFormSubmit}>
        <Grid container spacing={2} sx={{ width: "400px" }}>
          <Grid item md={12}>
            <SKDatePicker name="startDate" label="Start Date" />
          </Grid>
          <Grid item md={12}>
            <SKDatePicker name="endDate" label="End Date" />
          </Grid>
          <Grid item md={6}>
            <SKTimePicker name="startTime" label="Start Time" />
          </Grid>
          <Grid item md={6}>
            <SKTimePicker name="endTime" label="End Time" />
          </Grid>
        </Grid>
        <Button sx={{ mt: 1 }} type="submit">
          Create
        </Button>
      </SKForm>
    </SKModal>
  );
};

export default ScheduleModal;
