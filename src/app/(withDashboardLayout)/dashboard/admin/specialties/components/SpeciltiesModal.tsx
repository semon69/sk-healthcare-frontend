import SKFileUploader from "@/components/form/SKFileUploader";
import SKForm from "@/components/form/SKForm";
import SKInput from "@/components/form/SKInput";
import SKModal from "@/components/shared/SKModal";
import { useCreateSpecialtyMutation } from "@/redux/api/specialitiesApi";
import { modifyPayload } from "@/utils/modifyPayload";
import { Button, Grid, TextField } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpeciltiesModal = ({ open, setOpen }: TProps) => {
  
  const [createSpecialty] = useCreateSpecialtyMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    const data = modifyPayload(values);
    try {
      const res = await createSpecialty(data).unwrap();
      if (res?.id) {
        toast.success("Specialty created successfully!!");
        setOpen(false);
      }
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
