import { useState } from "react";
import {
  StyledTextInput,
  StyledTextInputError,
  StyledTextInputGroup,
  StyledTextInputIcon,
  StyledTextInputLabel,
} from "./TextInput.styled";
import { ITextInput } from "./types";

export const TextInput = ({
  id,
  name,
  value,
  labelName,
  type,
  disabled = false,
  required = false,
  error = "",
  placeholder = "",
  onChange = (e?) => {},
  onBlur = (e?) => {},
}: ITextInput) => {
  const [showPass, setShowPass] = useState(false);

  const handleOnClick = () => {
    const element = document.getElementById(`${id}`);
    element?.focus();
  };

  return (
    <StyledTextInputGroup>
      <StyledTextInput
        id={id}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        type={showPass ? "text" : type}
        value={value}
        disabled={disabled}
        required={required}
        invalid={error.length > 0}
        placeholder={placeholder}
        autoComplete="off"
      />
      <StyledTextInputLabel invalid={error.length > 0} onClick={handleOnClick}>
        {labelName}
      </StyledTextInputLabel>
      {type === "password" && (
        <StyledTextInputIcon
          show={showPass}
          onClick={() => setShowPass(!showPass)}
        ></StyledTextInputIcon>
      )}
      <StyledTextInputError>{error}</StyledTextInputError>
    </StyledTextInputGroup>
  );
};
