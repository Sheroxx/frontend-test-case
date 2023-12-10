"use client";

import React from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Container, Divider, useTheme } from "@mui/material";
import Image from "next/image";
import { usePathname } from "next/navigation";

const useStyles = makeStyles(() => ({
  footer: {
    backgroundColor: "#FF4B3A",
    color: "rgba(0, 0, 0, 0.6)",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    marginTop: "100px",
    paddingBottom: "20px",
  },
  footerContainer: {
    padding: "20px 0",
  },
  footerSection: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    marginBottom: "50px",
  },

  footerMenuText: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#FFF",
    marginTop: "30px",
  },

  footerSocialMediaBox: {
    display: "flex",
    justifyContent: "space-between",
    gap:10,
  },

  socialLinks: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    textAlign: "center",
    fontSize: "112px",
    fontWeight: "700",
    color: "#FFF",
  },

  followSocialBox: {
    alignItems: "center",
    alignContents: "center",
    paddingBottom: "24px",
    paddingTop: "24px",
    paddingLeft: "10px",
    paddingRight: "10px",
    display: "flex",
    justifyContent: "space-around",
  },

  footerMenuAlign: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
}));

export default function Footer() {
  const classes = useStyles();
  const theme = useTheme();

  const pathname = usePathname();
  const customFooterMargin = {
    marginTop: pathname === "/" ? 0 : "125px",
  };

  return (
    <Box className={classes.footer} sx={customFooterMargin}>
      <Container maxWidth="lg">
        <Grid container className={classes.footerContainer} spacing={5}>
          <Grid
            item
            xs={12}
            md={3}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            alignContent={"center"}
          >
            <Box className={classes.footerSection}>
              <Typography className={classes.logoText}>LOGO</Typography>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={3}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            alignContent={"center"}
          >
            <Box className={classes.footerSection}>
              <Typography className={classes.footerMenuText} color="#f07818">
                Menü
              </Typography>
              <Box
                sx={{
                  borderBottom: "5px solid #FFF",
                  width: "100%",
                  my: "5px",
                  borderRadius: "10px",
                }}
              ></Box>
              <Link href="#">
                <Typography className={classes.footerMenuText}>
                  {" "}
                  Ana Sayfa
                </Typography>{" "}
              </Link>
              <Link href="#">
                <Typography className={classes.footerMenuText}>
                  {" "}
                  Hakkımızda
                </Typography>{" "}
              </Link>
              <Link href="#">
                <Typography className={classes.footerMenuText}>
                  {" "}
                  İletişim
                </Typography>{" "}
              </Link>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            alignContent={"center"}
          ></Grid>
          <Grid
            item
            xs={12}
            md={3}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            alignContent={"center"}
          ></Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          borderBottom: "5px solid #FFF",
          width: "100%",
          my: "5px",
          borderRadius: "10px",
        }}
      ></Box>

<Container maxWidth="lg" sx={{
     width:'100%',
      [theme.breakpoints.up('md')]: {
        justifyContent: 'space-between',
        display:'flex',
      },
    }}>
      <Grid item xs={12}>
        <Typography className={classes.footerMenuText} align="center" color="textSecondary">
          © {new Date().getFullYear()}{" "}
          <Link href="#" color="#f07818">
            Lorem İpsum
          </Link>
        </Typography>
      </Grid>
      <Grid item xs={12} >
        <Box className={classes.footerSocialMediaBox}>
          <Link href="#">
            <Typography className={classes.footerMenuText}>
              Facebook
            </Typography>
          </Link>
          <Link href="#">
            <Typography className={classes.footerMenuText}>
              Twitter
            </Typography>
          </Link>
          <Link href="#">
            <Typography className={classes.footerMenuText}>
              Instagram
            </Typography>
          </Link>
          <Link href="#">
            <Typography className={classes.footerMenuText}>
              Youtube
            </Typography>
          </Link>
        </Box>
      </Grid>
    </Container>
    </Box>
  );
}
