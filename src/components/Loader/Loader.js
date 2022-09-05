import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

import React from "react";

const Loader = () => {
  return (
    <div>
      <Stack sx={{ color: "grey.500" }} spacing={5} direction="row">
        <CircularProgress color="secondary" />
        <CircularProgress color="secondary" />
        <CircularProgress color="secondary" />
      </Stack>
    </div>
  );
};

export default Loader;
