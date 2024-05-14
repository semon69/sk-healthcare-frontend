import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";


type TFromProps = {
    children: React.ReactNode,
    onSubmit: SubmitHandler<FieldValues>
}
const SKForm = ({children, onSubmit}: TFromProps) => {
  const methods = useForm();

  const submit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data)
  }
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default SKForm;
