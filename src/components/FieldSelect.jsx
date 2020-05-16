import React from "react";
import Select from "react-select";
const customStyles = {
  control: (provided, state) => ({
    ...provided,
  }),
};

const FieldSelect = ({
  field, // { name, value, onChange, onBlur }
  options,
  form,
  ...props
}) => (
  <Select
    {...props}
    name={field.name}
    value={
      options ? options.find((option) => option.value === field.value) : ""
    }
    onChange={(option) => form.setFieldValue(field.name, option.value)}
    options={options}
    styles={customStyles}
  />
);

export default FieldSelect;
