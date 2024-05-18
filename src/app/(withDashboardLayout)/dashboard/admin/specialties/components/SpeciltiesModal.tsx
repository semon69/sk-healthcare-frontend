import SKFileUploader from "@/components/form/SKFileUploader";
import SKForm from "@/components/form/SKForm";
import SKInput from "@/components/form/SKInput";
import SKModal from "@/components/shared/SKModal";
import { Button, Grid, TextField } from "@mui/material";
import { FieldValues } from "react-hook-form";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpeciltiesModal = ({ open, setOpen }: TProps) => {
  const handleFormSubmit = async (values: FieldValues) => {
    try {
    
    } catch (err: any) {
      console.error(err.message);
    }
  };
  return (
    <SKModal open={open} setOpen={setOpen} title="Create A New Speciality">
      <SKForm onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <SKInput name="title" label="Title" />
          </Grid>
          <Grid item md={6}>
            <SKFileUploader name="file" label="Upload File" />
          </Grid>
        </Grid>
        <Button sx={{ mt: 1 }} type="submit">
          Create
        </Button>
      </SKForm>
    </SKModal>
  );
};

export default SpeciltiesModal;
