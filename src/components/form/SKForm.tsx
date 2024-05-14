import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";


type TFormResolver = {
    resolver?: any
}
type TFromProps = {
    children: React.ReactNode,
    onSubmit: SubmitHandler<FieldValues>
} & TFormResolver

const SKForm = ({children, onSubmit, resolver}: TFromProps) => {

    const formConfig : TFormResolver = {}

    if(resolver){
        formConfig["resolver"] = resolver
    }

  const methods = useForm(formConfig);

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
