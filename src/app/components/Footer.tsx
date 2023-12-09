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
import { Divider } from "@mui/material";
import Image from "next/image";
import { usePathname } from "next/navigation";

const useStyles = makeStyles(() => ({
  
  footer: {
    backgroundColor: "#f5f2f2",
    color: "rgba(0, 0, 0, 0.6)",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    
    
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
  },
  socialLinks: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  companyDescription: {
    textAlign: "center",
    maxWidth: "70%",
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
  
  const pathname = usePathname();
  const customFooterMargin = {
    marginTop: pathname === '/' ? 0 : '125px',
  };

  return (
    <Box className={classes.footer} sx={customFooterMargin}>
      <Grid container className={classes.footerContainer} spacing={5}>
        <Grid item xs={12} md={12}>
          <Box className={classes.followSocialBox}>
            <Grid item xs={12} md={6}>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" component="h6" color="#f07818">
                  Bizi sosyal medya hesaplarımızdan takip edin:
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className={classes.socialLinks}>
                <Link href="#" color="textSecondary">
                  <FacebookIcon />
                </Link>
                <Link href="#" color="textSecondary">
                  <InstagramIcon />
                </Link>
                <Link href="#" color="textSecondary">
                  <LinkedInIcon />
                </Link>
              </Box>
            </Grid>
          </Box>
          <Divider variant="middle" style={{ marginBottom: "40px" }} />
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
            <Image
              style={{ margin: "10px" }}
              src="/image/new-logo.png"
              width={180}
              height={70}
              alt="single logo"
            />
            <Typography className={classes.companyDescription}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, atque doloribus! Nobis sapiente praesentium molestias porro possimus fugit rerum cumque, at dicta? Nobis, ab eveniet.
            </Typography>
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
            <Typography variant="h6" component="h6" color="#f07818">
              Menü
            </Typography>
            <Divider variant="middle" style={{ marginBottom: "20px" }} />
            <Link href="#">
              <Typography variant="body1" color="textSecondary">
                {" "}
                Lorem ipsum
              </Typography>{" "}
            </Link>
            <Link href="#">
              <Typography variant="body1" color="textSecondary">
                {" "}
                Lorem, ipsum.
              </Typography>{" "}
            </Link>
            <Link href="#">
              <Typography variant="body1" color="textSecondary">
                {" "}
                Lorem, ipsum.
              </Typography>{" "}
            </Link>
            <Link href="#">
              <Typography variant="body1" color="textSecondary">
                {" "}
                Lorem, ipsum.
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
        >
          <Box className={classes.footerSection}>
            <Typography variant="h6" component="h6" color="#f07818">
              Linkler
            </Typography>
            <Divider variant="middle" style={{ marginBottom: "20px" }} />
            <Link href="#" color="textSecondary">
              <Typography variant="body1" color="textSecondary">
                {" "}
                Lorem, ipsum.
              </Typography>{" "}
            </Link>
            <Link href="#" color="textSecondary">
              <Typography variant="body1" color="textSecondary">
                {" "}
                Lorem, ipsum.
              </Typography>{" "}
            </Link>
            <Link href="#" color="textSecondary">
              <Typography variant="body1" color="textSecondary">
                {" "}
                Lorem, ipsum.
              </Typography>{" "}
            </Link>
            <Link href="#" color="textSecondary">
              <Typography variant="body1" color="textSecondary">
                {" "}
                Lorem, ipsum.
              </Typography>
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
        >
          <Box className={classes.footerSection}>
            <Typography variant="h6" component="h6" color="#f07818">
              İletişim
            </Typography>
            <Divider variant="middle" style={{ marginBottom: "20px" }} />
            <Typography variant="body1" color="textSecondary">
              lorem / IPSUM
            </Typography>
            <Typography variant="body1" color="textSecondary">
              info@loremipsum.com
            </Typography>
            <Typography variant="body1" color="textSecondary">
              + 0999 999 99 99
            </Typography>
            <Typography variant="body1" color="textSecondary">
              + 0999 999 99 99
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Typography
        variant="body2"
        align="center"
        color="textSecondary"
        className={classes.footerContainer}
      >
        © {new Date().getFullYear()}{" "}
        <Link href="#" color="#f07818">
         Lorem İpsum
        </Link> Tüm hakları sakldır.
       
      </Typography>
    </Box>
  );
}