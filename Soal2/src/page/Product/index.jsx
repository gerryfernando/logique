/* eslint-disable no-unused-vars */
import { Box, Grid, Stack } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import { useEffect, useState } from "react";
import TypographyCom from "../../component/TypographyCom";
import API from "../../service";
import Card from "./component/Card";
import MainLayout from "../../component/Layout";

const Product = (props) => {
  const [data, setData] = useState([]);

  const getProduct = async () => {
    try {
      const res = await API.get("products");
      setData(res.data);
    } catch (error) {
      enqueueSnackbar("Failed to get data", { variant: "error" });
    }
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <MainLayout>
      <Box>
        <Stack gap={8}>
          <TypographyCom title>Product Page</TypographyCom>

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
    </MainLayout>
  );
};

export default Product;
