"use client";

import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { NameStateType } from "@/store/store";
import { type ProductType } from "@/store/reducers/productSlice";
import { categories } from "@/service";

const useStyles = makeStyles(() => ({
  main: {
    marginBottom: "10px",
  },

  contentBox: {
    marginLeft: "80px",
    marginRight: "80px",
    margin: "40px",
  },

  bannerImage: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
  },

  titleText: {
    fontSize: "30px",
    fontWeight: "700",
  },

  dividerLine: {
    width: "20%",
    marginTop: "4px",
    color: "#1B2326",
    height: "5px!important",
  },

  categories: {
    
    marginTop: "20px",
    alignItems: "center",
    alignContent: "center",
  },

  categoryBox: {
    padding: "30px",
    border: "2px solid #FF4B3A",
    borderRadius: "10px",
    pading: "50px",
    alignItems: "center",
    alignContent: "center",
    margin: "10px",
  },

  categoryNameText: {
    fontSize: "20px",
    fontWeight: "500",
    color: "#1B2326",
    textAlign: "center",
  },

  categoryLine:{
    display: "flex",
    justifyContent: "space-between",
    alignContent:'center',
    alignItems:'center',
    margin:'auto',
    
  },
}));

export default function Giris() {
  const classes = useStyles();

  const products = useSelector<NameStateType, ProductType[]>(
    (state) => state.user.products
  );
  const search = useSelector<NameStateType, string>(
    (state) => state.user.search
  );

  const getFilterProducts = () => {
    if (search.trim() == "") {
      return products;
    }

    return products.filter(
      (product) =>
        product.title.toUpperCase().includes(search.toUpperCase()) ||
        product.Restoran.toUpperCase().includes(search.toUpperCase())
    );
  };

  const RenderProductsCategory = () => {
    return (
      <>
        {categories.map((category) => (
          <Box className={classes.categories} key={category}>
            <Box className={classes.categoryBox}>
              <Image
                src="/image/Burger.svg"
                width={74}
                height={60}
                alt="burger-icon"
              />
              <Typography className={classes.categoryNameText}>
                {category}
              </Typography>
            </Box>
          </Box>
        ))}
      </>
    );
  };

  return (
    <>
      <Grid container className={classes.main}>
        <Grid item md={12}>
          <Box>
            <Image
              src="/image/banner.svg"
              width={1000}
              height={1000}
              alt="banner"
              className={classes.bannerImage}
            />
          </Box>
        </Grid>
        <Grid item md={12} className={classes.contentBox}>
          <Box>
            <Typography variant="h4" className={classes.titleText}>
              Kategoriler
            </Typography>
            <Box
              sx={{
                borderBottom: "5px solid #1B2326",
                width: "20%",
                marginTop: "4px",
              }}
            />
          </Box>
          <Grid item md={12} className={classes.categoryLine}>
          
        <RenderProductsCategory />
        </Grid>
         
        </Grid>
        
      </Grid>
    </>
  );
}
