/* eslint-disable no-unused-vars */
import { Box, Grid, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import TypographyCom from "../../component/TypographyCom";
import Card from "./component/Card";
import API from "../../service";
import { enqueueSnackbar } from "notistack";

const Menu = (props) => {
  const [data, setData] = useState([]);

  const getMenu = async () => {
    try {
      const res = await API.get("products");
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      enqueueSnackbar("Failed to get data", { variant: "error" });
    }
  };
  useEffect(() => {
    getMenu();
  }, []);

  return (
    <Box>
      <Stack gap={8}>
        <TypographyCom title>Menu Page</TypographyCom>

        <Grid container spacing={3}>
          {data.map((val) => {
            return (
              <Grid item xs={12} sm={4} md={3}>
                <Card data={val} />
              </Grid>
            );
          })}
        </Grid>
      </Stack>
    </Box>
  );
};

export default Menu;
