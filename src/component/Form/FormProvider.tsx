/* eslint-disable @typescript-eslint/no-explicit-any */
import { ConfigProvider, Form } from "antd";
import { ReactNode } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
type TConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};
type GuruFormProviderProps = {
  onSubmit: SubmitHandler<any>;
  children: ReactNode;
  theme?: any;
} & TConfig;

const GuruForm = ({
  onSubmit,
  children,
  defaultValues,
  resolver,
  theme,
}: GuruFormProviderProps) => {
  const formConfig: TConfig = {};
  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  if (resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);

  return (
    <ConfigProvider theme={theme}>
      <FormProvider {...methods}>
        <Form layout="vertical" onFinish={methods.handleSubmit(onSubmit)}>
          {children}
        </Form>
      </FormProvider>
    </ConfigProvider>
  );
};

export default GuruForm;
