/* eslint-disable no-unused-vars */
import { Box, Grid, Input, Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import MainLayout from "../../component/Layout";
import TypographyCom from "../../component/TypographyCom";
import API from "../../service";
import Card from "./component/Card";
import { useState } from "react";

const getProduct = async () => {
  const res = await API.get("products");
  return res.data;
};

const Product = (props) => {
  const [search, setSearch] = useState("");
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: getProduct,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error </p>;
  const filteredProducts = data.filter(
    (val) =>
      val.title.toLowerCase().includes(search.toLowerCase()) ||
      val.category.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <MainLayout>
      <Box>
        <Stack gap={8}>
          <TypographyCom title>Product Page</TypographyCom>
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Product or Category Name"
          />
          <Grid container spacing={3}>
            {filteredProducts.map((val) => {
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
