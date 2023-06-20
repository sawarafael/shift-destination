import { ReactNode } from "react";
import { StyledButton } from "./styles";

interface ButtonProps {
  children: ReactNode;
  size?: "small" | "medium" | "large";
  type?: "button" | "submit" | "reset";
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
export default Button;
