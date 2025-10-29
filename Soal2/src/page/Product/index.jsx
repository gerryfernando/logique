/* eslint-disable no-unused-vars */
import { Box, Grid, Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import MainLayout from "../../component/Layout";
import TypographyCom from "../../component/TypographyCom";
import API from "../../service";
import Card from "./component/Card";

const getProduct = async () => {
  const res = await API.get("products");
  return res.data;
};

const Product = (props) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: getProduct,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error </p>;

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
