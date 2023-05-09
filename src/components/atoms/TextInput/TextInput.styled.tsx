import { staticAsset } from "@/utils/urlHelper";
import styled, { css } from "styled-components";

interface IInput {
  invalid: boolean;
}

interface IIcon {
  show: boolean;
}

export const StyledTextInputGroup = styled.div(
  ({ theme }) => css`
    position: relative;
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus {
      -webkit-box-shadow: 0 0 0px 1000px #010409 inset;
      color: ${theme.colors.secondary} !important;
    }
  `
);

export const StyledTextInput = styled.input<IInput>(({ theme, invalid }) => {
  const borde = invalid ? `${theme.colors.primary}` : `${theme.colors.white}`;
  const outline = invalid ? `${theme.colors.primaryDark}` : "transparent";
  const label = invalid
    ? `${theme.colors.primaryDark}`
    : `${theme.colors.white}`;
  const text = invalid
    ? `${theme.colors.primaryDark}`
    : `${theme.colors.white}`;
  return css`
    padding: 10px 10px 10px 16px;
    display: block;
    border: none;
    border-radius: 8px;
    border: 1px solid ${borde};
    outline: 1px solid ${outline};
    color: ${text};
    font-size: 16px;
    background-color: transparent;
    width: 100%;
    height: 48px;
    transition: all 0.3s ease-out;
    &:focus {
      outline: 1px solid ${theme.colors.white};
    }
    &:focus ~ label {
      transform: translate(10px, -14px) scale(0.8);
      font-weight: 700;
      background-color: #0a0d13;
      padding-inline: 5px;
    }
    &:valid ~ label {
      transform: translate(10px, -14px) scale(0.8);
      font-weight: 700;
      background-color: #0a0d13;
      padding-inline: 5px;
    }
    &:hover ~ label {
      color: ${label};
    }
  `;
});

export const StyledTextInputLabel = styled.label<IInput>(
  ({ theme, invalid }) => {
    const color = invalid
      ? `${theme.colors.primaryDark}`
      : `${theme.colors.white}`;
    return css`
      position: absolute;
      top: 0;
      left: 0;
      color: ${color};
      transform: translate(16px, 12px);
      font-size: 16px;
      font-weight: normal;
      transition: all 0.3s ease-out;
      background-color: #0a0d13;
      padding: 2px 5px;
      border-radius: 10px;
      &:hover {
        cursor: text;
      }
    `;
  }
);

export const StyledTextInputError = styled.span(
  ({ theme }) => css`
    display: block;
    height: 12px;
    color: ${theme.colors.primaryDark};
    font-size: 12px;
    margin-bottom: 8px;
  `
);

export const StyledTextInputIcon = styled.div<IIcon>(({ theme, show }) => {
  const iconDefault = `${staticAsset("images/icons/pass_icon.svg")}`;
  const iconHover = `${staticAsset("images/icons/pass_icon_hover.svg")}`;
  const iconShow = `${staticAsset("images/icons/pass_icon_show.svg")}`;

  const icon = show ? iconShow : iconDefault;
  const iconHovered = show ? iconShow : iconHover;

  return css`
    position: absolute;
    top: 10px;
    right: 14px;
    width: 28px;
    height: 28px;
    background-image: url(${icon});
    transition: all 0.3s ease-out;
    &:hover {
      cursor: pointer;
      background-image: url(${iconHovered});
    }
  `;
});
