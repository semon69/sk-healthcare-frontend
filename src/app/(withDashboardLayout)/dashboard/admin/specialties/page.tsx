"use client"

import { Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import SpeciltiesModal from "./components/SpeciltiesModal";

const DoctorSpecialties = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsModalOpen(true)}>Create Specialty</Button>
        <SpeciltiesModal open={isModalOpen} setOpen={setIsModalOpen}  />
        <TextField size="small" placeholder="Search Specialist" />
      </Stack>
      {/* {!isLoading ? (
        <Box my={2}>
          <DataGrid rows={data} columns={columns} />
        </Box>
      ) : (
        <h1>Loading.....</h1>
      )} */}
    </Box>
  );
};

export default DoctorSpecialties;
