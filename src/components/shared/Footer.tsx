import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebookImg from "@/assets/landing_page/facebook.png";
import instagramImg from "@/assets/landing_page/instagram.png";
import linkedinImg from "@/assets/landing_page/linkedin.png";
import twitter from "@/assets/landing_page/twitter.png";

const Footer = () => {
  return (
    <Box bgcolor={"rgb(17, 26, 34)"}>
      <Container>
        <Stack direction={"row"} justifyContent={"center"} gap={4} py={3}>
          <Typography color={"white"} component={Link} href="/consultations">
            Consultations
          </Typography>
          <Typography color={"white"} component={Link} href="/healthPlans">
            Health Plans
          </Typography>
          <Typography color={"white"} component={Link} href="/medicine">
            Medicine
          </Typography>
          <Typography color={"white"} component={Link} href="/diagonostics">
            Diagonostics
          </Typography>
          <Typography color={"white"} component={Link} href="/ngos">
            NGOs
          </Typography>
        </Stack>
        <Stack direction={"row"} justifyContent={"center"} gap={4} py={3}>
          <Image
            src={facebookImg}
            alt="facebook image"
            width={40}
            height={40}
          />
          <Image
            src={instagramImg}
            alt="facebook image"
            width={40}
            height={40}
          />
          <Image
            src={linkedinImg}
            alt="facebook image"
            width={40}
            height={40}
          />
          <Image src={twitter} alt="facebook image" width={40} height={40} />
        </Stack>
        {/* <div className="border-b-[1px] border-dashed"></div> */}

        <Box sx={{
          border: "1px dashed lightgray"
        }}></Box>
        <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} gap={4} py={4}>
          <Typography color={"white"} component={Link} href="/consultations">
            &copy;2024. Ph Healthcare. All Rights Reserved
          </Typography>
          <Typography color={"white"} component={Link} href="/" variant="h4" fontWeight={600}>
            S
            <Box component={"span"} color="primary.main">
              K
            </Box>{" "}
            Health Care
          </Typography>
          <Typography color={"white"} component={Link} href="/ngos">
            Privacy Policy! Terms and Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
