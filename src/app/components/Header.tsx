"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Image from "next/image";
import { Badge, Button, Tooltip } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import productSlice, {
  productsSliceActions,
} from "@/store/reducers/productSlice";
import { useDispatch, useSelector } from "react-redux";
import basketSlice, { basketSliceActions } from "@/store/reducers/basketSlice";
import { menuPages } from "@/service";
import { NameStateType } from "@/store/store";

const useStyles: any = makeStyles(() => ({
  navbarRoot: {
    background: "#FF4B3A",
    paddingTop: "15px",
  },

  logoText: {
    fontSize: "22px",
    fontWeight: "700",
    textAlign: "center",
  },

  basketBox: {
    background: "#FFF",
    borderRadius: "10px",
    padding: "9px",
  },

  basketBadge: {
    background: "#FFF",
    border: "1px solid #FF4B3A",
    color: "#FF4B3A",
    width: "25px",
    height: "25px",
    borderRadius: "50%",
  },

  searchInputBox: {
    display: "flex",
    width: "100%",
    marginBottom: "35px",
    paddingTop: "15px",
  },

  navbarText: {
    textTransform: "capitalize",
    fontWeight: "600",
    fontSize: "18px",
  },

  listPaperRoot: {
    paddingTop: "50px",
    width: "150%",
    height: "100%",
    background: "#FF4B3A",
    color: "#FFF",
    padding: "30px",
  },
  drawerItem: {
    padding: "10px",
    display: "flex",
    alignItems: "center",
    "& svg": {
      marginRight: "5px",
    },
  },

  basketProductImageBox: {
    display: "flex",
    justifyContent: "space-between",
    gap: 2,
  },

  basketProductNameText: {
    fontSize: "14px",
    fontWeight: "400",
    color: "#1B2326",
  },

  cartSingleBox: {
    display: "flex",
    justifyContent: "space-evenly",
    gap:10,
  },

  quantityBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding:'0px 10px 0px 10px',
    alignContent: "center",
    border: "1px solid rgba(0, 0, 0, 0.50)",
    borderRadius: "10px",
  },

  priceText: {
    color: "#1B2326",
    fontSize: "14px",
    fontWeight: "500",
    padding: "10px",
    marginRight:'15px',
  },

  productCardNameText: {
    fontSize: "14px",
    fontWeight: "400",
    color: "#1B2326",
  },

  basketCardQty: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "center",
    marginTop: "55px",
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "10px",
  backgroundColor: "#FFF",
  color: "#1B2326",
  "&:hover": {
    backgroundColor: "#FFF",
    color: "#000000",
  },
  marginLeft: 0,
  width: "100%",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(0)})`,
  },
}));

function ResponsiveAppBar() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const search = useSelector<NameStateType, string>(
    (state) => state.product.search
  );
  const baskets = useSelector<NameStateType, any[]>(
    (state) => state.basket.basket
  );

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [basketOpen, setBasketOpen] = React.useState(false);

  const handleToggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  const handleOpenBasket = () => {
    setBasketOpen(true);
  };

  const handleCloseBasket = () => {
    setBasketOpen(false);
  };

  // Sepet ürünleri kısmı
  React.useEffect(() => {
    let basketItems = localStorage.getItem("basketItems");
    if (basketItems != null) {
      basketItems = JSON.parse(basketItems);
      dispatch(basketSliceActions.setBasket(basketItems as any));
    }
  }, []);

  console.log("baskets", baskets);

  const RenderBasketProducts = () => {
    const addBasketItem = (product: any) => {
      dispatch(basketSliceActions.addBasket(product));

      const basketItems = localStorage.getItem("basketItems");
      let cardItems = JSON.parse(basketItems as string) as any[];

      const index = cardItems.findIndex((value) => value.id == product.id);
      cardItems[index].quantity += 1;

      localStorage.setItem("basketItems", JSON.stringify(cardItems));
    };

    const removeBasketItem = (productIndex: number) => {
      dispatch(basketSliceActions.removeBasket(productIndex));

      const basketItems = localStorage.getItem("basketItems");
      let cardItems = JSON.parse(basketItems as string) as any[];

      if (cardItems[productIndex].quantity == 1) {
        cardItems = cardItems.filter((value, index) => index != productIndex);
      } else {
        cardItems[productIndex].quantity -= 1;
      }

      localStorage.setItem("basketItems", JSON.stringify(cardItems));
    };

    const getTotalPrice = () => {
      let basketTotalPrice = 0;
      baskets.map((value: any, index) => {
        let singlePriceTotal = value.price * value.quantity;
        basketTotalPrice = singlePriceTotal + basketTotalPrice;
      });
      return basketTotalPrice;
    };

    return (
      <>
        <Box
          sx={{
            width: "400px",
            height: "400px",
            zIndex: 1000,
            backgroundColor: "#F6F6F6",
            position: "absolute",
            top: "60px",
            right: "20px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
            borderRadius: "5px",
            padding: "10px",
            maxHeight: "600px",
            overflowY: "auto",
            marginBottom: "120px",
          }}
        >
          {baskets?.map((product: any, index) => (
            <Box key={index} sx={{ my: 2 }}>
              <Box className={classes.cartSingleBox}>
                <Image
                  src={product?.thumbnail}
                  alt={product?.title + " " + "fotoğrafı"}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "40%",
                    height: "auto",
                    borderRadius: "10px",
                    objectFit: "contain",
                  }}
                />
                <Box>
                  <Typography className={classes.productCardNameText}>
                    {product?.title}
                  </Typography>
                  <Box className={classes.basketCardQty}>
                    <Typography className={classes.priceText}>
                      {product?.price} {product?.currency}
                    </Typography>
                    <Box className={classes.quantityBox}>
                      <IconButton onClick={() => removeBasketItem(index)}>
                      <Image
                          src="/image/trash.svg"
                          width={15}
                          height={15}
                          alt="trash-icon"
                        />
                      </IconButton>
                      <Typography sx={{fontSize:'14px', color:'#1B2326', fontWeight:'500'}}>
                        {product?.quantity}
                      </Typography>

                      <IconButton onClick={() => addBasketItem(product)}>
                        <Image
                          src="/image/add.svg"
                          width={15}
                          height={15}
                          alt="trash-icon"
                        />
                      </IconButton>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
          <Box
            sx={{
              paddingLeft: "10px",
              paddingRight: "10px",
              paddingTop: "40px",
              background: "#FFF",
              borderRadius: "10px",
              padding: "20px",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                sx={{ color: "#1B2326", fontSize: "22px", fontWeight: "500" }}
              >
                Toplam
              </Typography>
              <Typography
                sx={{ color: "#FF4B3A", fontSize: "22px", fontWeight: "500" }}
              >
                {getTotalPrice()} ₺
              </Typography>
            </Box>
            <Box sx={{ textAlign: "center", marginTop: "20px" }}>
              <Button
                variant="contained"
                sx={{
                  background: "#FF4B3A",
                  textTransform: "capitalize",
                  width: "80%",
                  borderRadius: "10px",
                }}
              >
                Sepeti Onayla
              </Button>
            </Box>
          </Box>
        </Box>
      </>
    );
  };

  return (
    <>
      <AppBar position="static" className={classes.navbarRoot}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Typography noWrap className={classes.logoText}>
                Logo
              </Typography>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleToggleDrawer}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={handleCloseDrawer}
              >
                <Box
                  sx={{
                    alignContent: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "10%",
                    display: { xs: "flex", md: "none" },
                  }}
                >
                  <Typography noWrap className={classes.logoText}>
                    Logo
                  </Typography>
                </Box>
                <List className={classes.listPaperRoot}>
                  {menuPages.map((page) => (
                    <ListItem
                      key={page}
                      onClick={handleCloseDrawer}
                      className={classes.drawerItem}
                    >
                      <Box
                        sx={{
                          width: "10px",
                          height: "10px",
                          background: "#FFF",
                          borderRadius: "50%",
                          marginRight: "5px",
                        }}
                      ></Box>
                      <Typography
                        textAlign="center"
                        className={classes.navbarText}
                      >
                        {page}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <Typography noWrap className={classes.logoText}>
                Logo
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {menuPages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseBasket}
                  sx={{ my: 2, color: "white" }}
                  className={classes.navbarText}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Sepeti görüntüle">
                <Badge
                  badgeContent={baskets.length}
                  color="default"
                  classes={{ badge: classes.basketBadge }}
                >
                  <Box className={classes.basketBox}>
                    <IconButton onClick={handleOpenBasket} sx={{ p: 0 }}>
                      <Image
                        src="/image/Vector.svg"
                        width={22}
                        height={22}
                        alt="bascet-icon"
                      />
                    </IconButton>
                  </Box>
                </Badge>
              </Tooltip>
              {basketOpen && <RenderBasketProducts />}
            </Box>
          </Toolbar>
          <Box className={classes.searchInputBox}>
            <Search>
              <StyledInputBase
                placeholder="Ara"
                inputProps={{ "aria-label": "search" }}
                value={search}
                onChange={(e) =>
                  dispatch(productsSliceActions.setSearch(e.target.value))
                }
              />
            </Search>
          </Box>
        </Container>
      </AppBar>
     
    </>
  );
}

export default ResponsiveAppBar;
