import {
  Box,
  Button,
  Card as MUICard,
  CardActions,
  CardContent,
  CardMedia,
  useTheme,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import convertNumberCurrency from "../../../util/Currency";
import ModalCom from "../../../component/ModalCom";
import TypographyCom from "../../../component/TypographyCom";
import { enqueueSnackbar } from "notistack";
import { AddShoppingCart } from "@mui/icons-material";
import API from "../../../service";
import { useSelector } from "react-redux";
import PlusMinusInput from "../../../component/PlusMinusInput";

const Card = (props) => {
  const { data } = props;
  const [openModal, setOpenModal] = useState(false);
  const theme = useTheme();
  const table = useSelector((state) => state.appState.tableNo);
  const [sum, setSum] = useState(0);

  return (
    <Box>
      <MUICard sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={data?.images[0]} />
        <CardContent>
          <TypographyCom
            sx={{ height: 75 }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {data?.title}
          </TypographyCom>
          <TypographyCom variant="body2" color="text.secondary">
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
        onClose={() => setOpenModal(false)}
        title="Product Detail"
        size="xs"
        okText="Add To Cart"
        onConfirm={() => {}}
        sum={sum}
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
