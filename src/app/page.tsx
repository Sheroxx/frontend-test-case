"use client";

import { Box, Button, Grid, Typography } from "@mui/material";
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

const useStyles = makeStyles(() => ({
  main: {
    backgroundImage: 'url("../../image/start-background.jpg")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backdropFilter: "blur(10px)",
  },

  entranceTitle: {
    fontSize: "44px",
    padding: "16px",
    color: "#ffffffff",
    fontWeight: "600",
  },

  textBox: {
    padding: "20px",
    borderRadius: "20px",
  },

  descriptionText: {
    fontSize: "18px",
    fontWeight: "500",
    padding: "16px",
    color: "white",
  },

  titleText: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#f07818",
    textAlign: "center",
  },

  listBox: {
    background: "#ffffffff",
    borderRadius: "20px",
    marginBottom: "15%",
    marginTop: "15%",
    paddingTop: "24px",
    paddingBottom: "24px",
    paddingLeft: "30px",
    paddingRight: "30px",
    marginRight: "5%",
    marginLeft: "5%",
  },

  bannerImage: {
    objectFit: "cover",
  },

  listText: {
    fontSize: "16px",
    fontWeight: "600!important",
    color: "#000000",
  },

  startBtn: {
    color: "#ffffffff",
    fontWeight: "600",
    backgroundColor: "#f07818",
    borderRadius: "10px",
    padding: "12px 24px 12px 24px",
    "&:hover": {
      backgroundColor: "#ffffffff",
      borderColor: "#ffffffff",
      color: "#f07818",
      boxShadow: "none",
    },
  },

  singleLogo: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "10px",
  },

  loginText: {
    display: "flex",
    justifyContent: "center",
    color: "#f07818",
  },

  registerBtns: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "10px",
  },

  registerBtn: {
    color: "#ffffffff",
    background: "#f07818",
    fontSize: "18px",
    borderColor: "#f07818",
    borderRadius: "20px",
    padding: "12px 24px 12px 24px",
    "&:hover": {
      backgroundColor: "#e50012A6",
      color: "#ffffffff",
      boxShadow: "none",
    },
  },

  loginBtn: {
    color: "#f07818",
    background: "#ffffffff",
    fontSize: "18px",
    borderColor: "#e50012A0",
    borderRadius: "20px",
    padding: "12px 24px 12px 24px",
    "&:hover": {
      backgroundColor: "#f07818",
      borderColor: "#e50012A0",
      color: "#ffffffff",
      boxShadow: "none",
    },
  },
}));

export default function Giris() {
  const classes = useStyles();
  
  const products = useSelector<NameStateType, ProductType[]>(state => state.user.products);
  const search = useSelector<NameStateType, string>(state => state.user.search);

  const getFilterProducts = () => {
    if(search.trim() == "") {
      return products;
    }

    return products
      .filter(product => 
        product.title.toUpperCase().includes(search.toUpperCase()) || product.Restoran.toUpperCase().includes(search.toUpperCase())
      );
  }

  const listText = [
    "Lorem ipsum dolo: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab doloribus aperiam minus quibusdam minima vel ipsam nihil mollitia, vitae facilis?",
    "consectetur adipisicing: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut iure ab repellendus ducimus. Aut eaque, corporis distinctio officia, nisi fugiat temporibus necessitatibus totam ipsa quasi dolore praesentium non quis rerum!",
    "Molestias dignissimos:   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias dignissimos a officiis culpa esse aliquid.",
    "dignissimos a officiis:  Ut iure ab repellendus ducimus. Aut eaque, corporis distinctio officia, nisi fugiat temporibus necessitatibus totam ipsa quasi dolore praesentium non quis rerum!",
  ];

  const textItemList = (listText: any) => {
    return listText.map((item: any, index: any) => (
      <ListItem key={index} disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <DoneOutlineIcon htmlColor="#04D69C" />
          </ListItemIcon>
          <ListItemText className={classes.listText} primary={item} />
        </ListItemButton>
      </ListItem>
    ));
  };

  return (
    <>
      <Grid container className={classes.main}>
        <Grid
          item
          md={7}
          xs={12}
          sm={12}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box className={classes.textBox}>
            <Typography className={classes.entranceTitle}>
              Welcome to Lorem İpsum!
            </Typography>
            <Typography className={classes.descriptionText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              necessitatibus totam cupiditate iure, provident blanditiis facilis
              aspernatur architecto, tempora atque dolorum ea molestiae vero
              commodi perspiciatis ducimus aliquam maiores nulla! provident blanditiis facilis.
            </Typography>
            <Button variant="contained" className={classes.startBtn}>
              Hemen Kullanmaya Başla
            </Button>
          </Box>
        </Grid>
        <Grid md={5} xs={12} sm={12}>
          <Box className={classes.listBox}>
            <Box className={classes.singleLogo}>
              <Image
                src="/image/single-logo.png"
                width={80}
                height={80}
                alt="logo"
              />
            </Box>

            <Typography className={classes.titleText}>
              Lorem ipsum dolor sit amet.
            </Typography>
            <List>{textItemList(listText)}</List>
            <Box className={classes.registerBtns}>
              <Link href="/kayit-ol">
                <Button variant="contained" className={classes.registerBtn}>
                  Kayıt Ol
                </Button>
              </Link>
              <Link href="/giris">
                <Button variant="outlined" className={classes.loginBtn}>
                  Giriş Yap
                </Button>
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}