import { Button, Grid, Stack, useTheme } from "@mui/material";
import TypographyCom from "../../../component/TypographyCom";
import convertNumberCurrency from "../../../util/Currency";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../../redux/features/appStateSlice";
import { enqueueSnackbar } from "notistack";
import PlusMinusInput from "../../../component/PlusMinusInput";
import { useEffect, useState } from "react";

const ListCart = (props) => {
  const {
    data: { data: cart, sum, id },
  } = props;
  const [count, setCount] = useState(sum);
  const theme = useTheme();
  const dispatch = useDispatch();
  const { cart: globalCart } = useSelector((state) => state?.appState);

  const deleteCart = async (id) => {
    const newCart = globalCart.filter((dataCart) => dataCart.id !== id);

    await dispatch(setCart(newCart));

    enqueueSnackbar("Success delete", { variant: "success" });
  };

  useEffect(() => {
    updateCart(id);
  }, [count]);

  const updateCart = async (id) => {
    const existingData = globalCart.findIndex((val) => val.id === id);
    let newCart = [...globalCart];

    if (existingData !== -1) {
      newCart[existingData] = {
        ...newCart[existingData],
        sum: count,
      };
    }

    await dispatch(setCart(newCart));
  };

  return (
    <>
      <Grid
        container
        sx={{
          background: "#fff",
          height: "180px",
          padding: "20px",
          borderRadius: "10px",
        }}
        justifyContent="space-between"
      >
        <Grid item>
          <Stack direction="row" gap={2}>
            <img
              alt={cart.title}
              src={cart.images[0]}
              style={{ borderRadius: "5px" }}
              height="120px"
              width="200px"
            />
            <Stack gap={1}>
              <TypographyCom
                color={theme.palette.secondary.main}
                fontSize="20px"
                semiBold
              >
                {cart?.title}
              </TypographyCom>
              <TypographyCom>
                {count} x {convertNumberCurrency(cart.price)}
              </TypographyCom>
              <TypographyCom>{cart.category.name}</TypographyCom>
              <PlusMinusInput sum={count} setSum={setCount} />
            </Stack>
          </Stack>
        </Grid>
        <Grid
          item
          display="flex"
          flexDirection="column"
          gap={2}
          alignItems="end"
        >
          <TypographyCom fontSize="22px" semiBold>
            {convertNumberCurrency(cart.price * count)}
          </TypographyCom>
          <Grid>
            <Button
              onClick={() => deleteCart(id)}
              variant="outlined"
              color="error"
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ListCart;
