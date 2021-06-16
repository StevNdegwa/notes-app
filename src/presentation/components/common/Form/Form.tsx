import { PropsWithChildren, forwardRef, ForwardedRef } from "react";
import { FormProvider, useForm, UnpackNestedValue } from "react-hook-form";
import { FormWrapper } from "./styles";

export interface FormProps<DataType> {
  legend: React.ReactNode;
  className?: string;
  handler: (data: UnpackNestedValue<DataType>) => void;
}

function F<DataType>(
  {
    legend,
    handler,
    className,
    children,
  }: PropsWithChildren<FormProps<DataType>>,
  ref?: ForwardedRef<HTMLFormElement>
) {
  const methods = useForm();

  const handleSubmit = (data: UnpackNestedValue<DataType>) => {
    handler(data);
  };

  return (
    <FormProvider {...methods}>
      <FormWrapper
        onSubmit={methods.handleSubmit(handleSubmit)}
        ref={ref}
        className={className}
      >
        <fieldset>
          <legend>{legend}</legend>
          {children}
        </fieldset>
      </FormWrapper>
    </FormProvider>
  );
}

export const Form = forwardRef(F) as <DataType>(
  props: PropsWithChildren<FormProps<DataType>> & {
    ref?: React.ForwardedRef<HTMLFormElement>;
  }
) => ReturnType<typeof F>;
