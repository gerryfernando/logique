import {
  Box,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemText,
  Card as MUICard,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalCom from "../../../component/ModalCom";
import TypographyCom from "../../../component/TypographyCom";
import convertNumberCurrency from "../../../util/Currency";
import { setCart } from "../../../redux/features/appStateSlice";
import { enqueueSnackbar } from "notistack";

const Card = (props) => {
  const { data } = props;
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const theme = useTheme();
  const table = useSelector((state) => state.appState.tableNo);
  const [sum, setSum] = useState(0);
  const { cart } = useSelector((state) => state?.appState);
  const addCart = async () => {
    const newData = {
      id: data.id,
      data,
      sum,
    };
    const existingData = cart.findIndex((val) => val.id === data.id);
    let newCart = [...cart];

    if (existingData !== -1) {
      newCart[existingData] = {
        ...newCart[existingData],
        sum: newCart[existingData].sum + sum,
      };
    } else {
      newCart.push(newData);
    }

    await dispatch(setCart(newCart));
    enqueueSnackbar("Success add to cart", { variant: "success" });
    setOpenModal(false);
    setSum(0);
  };

  return (
    <Box>
      <MUICard sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={data?.images[0]} />
        <CardContent>
          <TypographyCom
            sx={{ height: 65 }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {data?.title} ({data?.category.name})
          </TypographyCom>
          <TypographyCom variant="body2" fontSize={22} color="text.secondary">
            {convertNumberCurrency(data.price || 0)}
          </TypographyCom>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            sx={{ background: theme?.palette?.primary.main, color: "#fff" }}
            fullWidth
            size="small"
            onClick={() => setOpenModal(true)}
          >
            Detail
          </Button>
        </CardActions>
      </MUICard>

      <ModalCom
        key="modal-add-order"
        open={openModal}
        onClose={() => {
          setSum(0);
          setOpenModal(false);
        }}
        title="Product Detail"
        size="xs"
        okText="Add To Cart"
        onConfirm={() => addCart()}
        sum={sum}
        disableOkButton={sum === 0}
        setSum={setSum}
      >
        <List
          sx={{
            width: "100%",
            borderRadius: 2,
          }}
        >
          <ListItem>
            <ListItemText primary="Name" secondary={data.title} />
          </ListItem>

          <ListItem>
            <ListItemText primary="Description" secondary={data.description} />
          </ListItem>

          <ListItem>
            <ListItemText
              primary="Price"
              secondary={
                <TypographyCom
                  variant="body1"
                  color="primary"
                  fontWeight="bold"
                >
                  {convertNumberCurrency(data.price || 0)}
                </TypographyCom>
              }
            />
          </ListItem>
        </List>
      </ModalCom>
    </Box>
  );
};

export default Card;
