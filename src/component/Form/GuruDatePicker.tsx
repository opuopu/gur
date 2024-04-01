/* eslint-disable @typescript-eslint/no-explicit-any */
import { DatePicker, Form } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { Controller } from "react-hook-form";

interface InputProps {
  name: string;
  label?: string;
  size?: SizeType;
  placeholder?: string;
  labelColor?: string;
}

const GuruDatePicker = ({
  name,
  label,
  size,
  placeholder,
  labelColor = "black",
}: InputProps) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item
          label={<label style={{ color: labelColor }}>{label}</label>}
          validateStatus={error ? "error" : ""}
          help={error ? error.message : ""}
        >
          <DatePicker
            {...field}
            id={name}
            size={size}
            placeholder={placeholder}
          />
        </Form.Item>
      )}
    />
  );
};

export default GuruDatePicker;
