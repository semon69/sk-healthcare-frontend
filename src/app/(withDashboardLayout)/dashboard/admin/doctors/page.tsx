"use client";

import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import DoctorModal from "./components/DoctorModal";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import {
  useDeleteDoctorMutation,
  useGetDoctorsQuery,
} from "@/redux/api/doctorsApi";
import { toast } from "sonner";
import { useDebounced } from "@/redux/hooks";

const AllDoctorPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const query: Record<string, any> = {};
  const [searchTerm, setSearchTerm] = useState<string>("");
  // query["searchTerm"] = searchTerm;

  // // console.log(searchTerm);

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = searchTerm;
  }

  const { data, isLoading } = useGetDoctorsQuery({...query});
  const [deleteDoctor] = useDeleteDoctorMutation();

  // console.log(data);
  const doctors = data?.doctors;
  const meta = data?.meta;
  // // console.log(doctors);

  const handleDelete = async (id: string) => {
    // console.log(id);
    try {
      const res = await deleteDoctor(id).unwrap();
      // console.log(res);
      if (res?.id) {
        toast.success("Doctor deleted successfully!!!");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "contactNumber", headerName: "Contact Number", flex: 1 },
    { field: "gender", headerName: "Gender", flex: 1 },
    { field: "apointmentFee", headerName: "Appointment Fee", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <IconButton onClick={() => handleDelete(row.id)} aria-label="delete">
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  ];

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsModalOpen(true)}>Create New Doctor</Button>
        <DoctorModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField
          onChange={(e) => setSearchTerm(e.target.value)}
          size="small"
          placeholder="search doctors"
        />
      </Stack>
      {!isLoading ? (
        <Box my={2}>
          <DataGrid rows={doctors} columns={columns} />
        </Box>
      ) : (
        <h1>Loading.....</h1>
      )}
    </Box>
  );
};

export default AllDoctorPage;
