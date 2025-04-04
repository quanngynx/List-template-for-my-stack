import Button from "components/atoms/button/button";
import Form from "components/atoms/form/form";
import Input from "components/atoms/input/input";
import Label from "components/atoms/label/label";
import React, { FormEvent, useState } from "react";

interface FormInputProps {
  label: string;
  inputType?: string;
  placeholder?: string;
  buttonText: string;
  onSubmit: (value: string) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  inputType = "text",
  placeholder,
  buttonText,
  onSubmit,
}) => {
  const [value, setValue] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label text={label} htmlFor="input-field" />
      <Input
        id="input-field"
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
      <Button type="submit" label={buttonText} />
    </Form>
  );
};

export default FormInput;
