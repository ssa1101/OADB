import React from "react";

import TextField from "@mui/material/TextField";
export default function TextFields(props) {
  return (
    <TextField
      sx={{
        "& .MuiFormLabel-root": {
          color: "white",
          fontSize: "30px",
          fontFamily: "Inconsolata",
        },
        "& .MuiInputBase-root": {
          color: "white",
        },
      }}
      onChange={props.onChange}
      id="standard-multiline-static"
      label="Enter New User"
      placeholder="Enter your SQL Query"
      variant="filled"
      value={props.value}
    />
  );
}
