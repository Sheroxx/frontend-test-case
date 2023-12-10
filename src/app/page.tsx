"use client";

import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { NameStateType } from "@/store/store";
import {
  productsSliceActions,
  type ProductType,
} from "@/store/reducers/productSlice";
import { categoriesData } from "@/service";
import Container from "@mui/material/Container";
import { basketSliceActions } from "@/store/reducers/basketSlice";

const useStyles = makeStyles(() => ({
  main: {
    marginBottom: "10px",
  },

  bannerImage: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
  },

  titleText: {
    fontSize: "30px",
    fontWeight: "700",
    color: "#1B2326",
  },

  categories: {
    marginTop: "20px",
  },

  contentBox: {
    marginTop: "2%",
  },

  categoryBox: {
    border: "2px solid #FF4B3A",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#fff",
    borderRadius: "10px",
    textAlign: "center",
    padding: "10px",
    "&:hover": {
      background: "#ff9187",
      color: "#FFF",
    },
  },

  categoryNameText: {
    fontSize: "20px",
    fontWeight: "500",
    color: "#1B2326",
    marginTop: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContents: "center",
    "&:hover": {
      color: "#FFF",
    },
  },

  productImage: {
    width: "50%",
    height: "auto",
  },

  categoryImage: {
    objectFit: "cover",
    width: "50%",
    height: "auto",
  },

  productBox: {
    border: "4px solid rgba(255, 75, 58 ,0.5)",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#fff",
    textAlign: "center",
    // minHeight:'100%',
    padding: "10px",
    "&:hover": {
      boxShadow:
        "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      color: "#FFF",
    },
  },

  productDescriptionBox: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
    alignItems: "center",
    width: "100%",
  },

  productNameText: {
    color: "#1B2326",
    fontSize: "14px",
    fontWeight: "400",
    textOverflow: "ellipsis",
    textAlign: "left",
  },

  productRestoranText: {
    color: "#1B2326",
    fontSize: "14px",
    fontWeight: "500",
    textAlign: "left",
  },

  productPriceText: {
    color: "#FF4B3A",
    fontSize: "15px",
    fontWeight: "800",
    textAlign: "right",
  },

  textBox: {
    textAlign: "left",
  },

  ratingBox: {
    background: "#FF4B3A",
    padding: "5px 10px",
    borderRadius: "10px",
    position: "relative",
    top: "55px",
    left: "48%",
    width: "45%",
  },
  ratingText: {
    fontSize: "16px",
    fontWeight: "500",
    textAlign: "center",
  },
}));

export default function Giris() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const products = useSelector<NameStateType, ProductType[]>(
    (state) => state.product.products
  );
  const search = useSelector<NameStateType, string>(
    (state) => state.product.search
  );

  const getFilterProducts = () => {
    if (search.trim() == "") {
      return products;
    }

    return products.filter(
      (product: any) =>
        product.title.toUpperCase().includes(search.toUpperCase()) ||
        product.restoran.toUpperCase().includes(search.toUpperCase())
    );
  };

  const addToBasket = (product: any) => {
    dispatch(basketSliceActions.addBasket(product));

    let basketItems = localStorage.getItem("basketItems");
    if (basketItems != null) {
      const cardItems = JSON.parse(basketItems) as any[];
      const index = cardItems.findIndex((value) => value.id == product.id);

      if(index != -1) {
        cardItems[index].quantity += 1; 
      } else {
        cardItems.push({ ...product, quantity: 1 });
      }

      localStorage.setItem("basketItems", JSON.stringify(cardItems));
    } else {
      localStorage.setItem("basketItems", JSON.stringify([
        { ...product, quantity: 1 }
      ]));
    }
  };

  const RenderProductsCategory = () => {
    return (
      <>
        {categoriesData.map((category) => (
          <Grid item key={category.id} xs={3} sm={4} md={2} lg={2}>
            <Link href={category.link}>
              <Box className={classes.categoryBox}>
                <Image
                  src={category.image}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "50%", height: "auto" }}
                  alt="burger-icon"
                />
                <Typography className={classes.categoryNameText}>
                  {category.name}
                </Typography>
              </Box>
            </Link>
          </Grid>
        ))}
      </>
    );
  };

  const RenderProducts = () => {
    return (
      <>
        {getFilterProducts().map((product) => (
          <Grid item key={product.id} xs={6} sm={6} md={3} lg={3}>
            <Box className={classes.ratingBox}>
              <Typography className={classes.ratingText}>
                {product?.rating}/5(100+)
              </Typography>
            </Box>

            <Box className={classes.productBox}>
              <Link href={`${product?.restoran}/${product?.title}`}>
                <Image
                  src={product?.thumbnail}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                  alt="product-image"
                />
              </Link>
              <Box className={classes.productDescriptionBox}>
                <Box className={classes.textBox}>
                  <Typography className={classes.productRestoranText}>
                    {product?.restoran}
                  </Typography>
                  <Typography className={classes.productNameText}>
                    {product?.title}
                  </Typography>
                </Box>
                <Typography className={classes.productPriceText}>
                  {product?.price}
                  {product?.currency}
                </Typography>
              </Box>
              <Button
                sx={{
                  my: 1,
                  display: "flex",
                  width: "100%",
                  borderRadius: "10px",
                  color: "#1B2326",
                  borderColor: "#FF4B3A",
                  fontSize: "14px",
                  fontWeight: "400",
                  textTransform: "capitalize",
                  border: "2px solid #FF4B3A",
                }}
                variant="outlined"
                onClick={() => addToBasket(product)}
              >
                Sepete Ekle
              </Button>
            </Box>
          </Grid>
        ))}
      </>
    );
  };

  return (
    <>
      <Grid container className={classes.main}>
        <Grid item xs={12}>
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
        <Container maxWidth="lg">
          <Grid item xs={12} className={classes.contentBox}>
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
            <Grid container spacing={2} className={classes.categories}>
              <RenderProductsCategory />
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.contentBox}>
            <Box>
              <Typography variant="h4" className={classes.titleText}>
                Restoranlar
              </Typography>
              <Box
                sx={{
                  borderBottom: "5px solid #1B2326",
                  width: "20%",
                  marginTop: "4px",
                }}
              />
            </Box>
            <Grid container spacing={2} className={classes.categories}>
              <RenderProducts />
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
}
