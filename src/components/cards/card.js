import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { orange } from "@mui/material/colors";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(orange[500]),
  backgroundColor: orange[600],
  width: 300,
  padding: 32,
  "&:hover": {
    backgroundColor: orange[700],
  },
}));
export default function Card({ heading }) {
  return (
    <div className="container mx-auto flex justify-center mb-12">
      <ColorButton variant="contained">
        <h1 className="text-lg text-black">{heading}</h1>
      </ColorButton>
    </div>
  );
}
