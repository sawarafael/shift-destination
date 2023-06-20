import { Button as MuiButton } from "@mui/material";
import { styled } from "styled-components";

export const StyledButton = styled(MuiButton)`
  background-color: #ff0000;
  color: #ffffff;

  "&:hover" {
    background-color: #cc0000;
  }
`;
