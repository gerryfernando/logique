import { Box, Grid, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import MainLayout from "../../component/Layout";
import TypographyCom from "../../component/TypographyCom";
import convertNumberCurrency from "../../util/Currency";
import ListCart from "./component/ListCart";
import { useEffect, useState } from "react";

const Cart = () => {
  const { cart } = useSelector((state) => state?.appState);
  const [totalHarga, setTotalHarga] = useState(0);

  useEffect(() => {
    let total = 0;
    cart.forEach((val) => (total += val.sum * val.data.price));
    setTotalHarga(total);
  }, [cart]);

  return (
    <MainLayout>
      <Box>
        <Stack gap="50px">
          <TypographyCom title>Cart Page</TypographyCom>
          <Grid container rowSpacing={4}>
            {!cart.length ? (
              <Box
                sx={{
                  height: "250px",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <TypographyCom semiBold>
                  Your cart is empty, please select the product first
                </TypographyCom>
              </Box>
            ) : (
              <>
                {cart?.map((val) => {
                  return (
                    <>
                      {val.sum > 0 && (
                        <Grid key={val.data.id} item xs={12}>
                          <ListCart data={val} />
                        </Grid>
                      )}
                    </>
                  );
                })}
                <Grid marginTop={4} item xs={12} textAlign="right">
                  <Stack
                    direction="row"
                    gap={2}
                    sx={{ justifyContent: "end", display: "flex" }}
                    width="100%"
                  >
                    <TypographyCom fontSize="20px" semiBold>
                      Total :
                    </TypographyCom>
                    <TypographyCom fontSize="20px" semiBold>
                      {convertNumberCurrency(totalHarga)}
                    </TypographyCom>
                  </Stack>
                </Grid>
              </>
            )}
          </Grid>
        </Stack>
      </Box>
    </MainLayout>
  );
};

export default Cart;
