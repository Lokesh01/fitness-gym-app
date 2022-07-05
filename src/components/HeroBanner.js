import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#ff2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>

      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", sx: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat, Sleep <br /> and Repeat
      </Typography>

      <Typography fontWeight="22px" lineHeight="35px" mb={4}>
        Checkout the most effective exercises
      </Typography>

      <Button
        variant="contained"
        href="#exercises"
        color="error"
        sx={{ backgroundColor: "#ff2625" , padding: "10px"}}
      >
        Explore Exercises
      </Button>

      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{ display: { lg: "block", xs: "none" }, opacity: 0.1 }}
        fontSize="200px"
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
