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
import productSlice from "@/store/reducers/productSlice";
import { useDispatch } from "react-redux";
import basketSlice, { basketSliceActions } from "@/store/reducers/basketSlice";
import { menuPages } from "@/service";



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
  const dispatch = useDispatch()

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

    let basketItems = localStorage.getItem("basketItems")
    if(basketItems != null ) {
     basketItems = JSON.parse(basketItems) 
     dispatch(basketSliceActions.setBasket(basketItems as any))
    }
  }, [])
  

  const RenderBasketProducts = (products: any) => {
   
    return (
      <>
        <Box
          style={{
            position: "absolute",
            top: "60px",
            right: "10px",
            backgroundColor: "#FFF",
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
            borderRadius: "5px",
            padding: "10px",
            zIndex: 1000,
          }}
        >
          <Box>
            <Image src={products?.imageUrl} alt={products?.imageAlt} />
            <Typography>{products?.title}</Typography>
            <Typography>
              {products?.price} {products?.currency}
            </Typography>
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
                  badgeContent={4}
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
              {basketOpen && (
                <RenderBasketProducts />
              )}
            </Box>
          </Toolbar>
          <Box className={classes.searchInputBox}>
            <Search>
              <StyledInputBase
                placeholder="Ara"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
        </Container>
      </AppBar>
    </>
  );
}

export default ResponsiveAppBar;
