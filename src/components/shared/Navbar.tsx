import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  return (
    <Container>
      <Stack
        direction={"row"}
        py={2}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography component={Link} href="/" variant="h4" fontWeight={600}>
          S
          <Box component={"span"} color="primary.main">
            K
          </Box>{" "}
          Health Care
        </Typography>
        <Stack direction={"row"} justifyContent={"space-between"} gap={4}>
          <Typography  component={Link} href="/consultations">Consultations</Typography>
          <Typography  component={Link} href="/healthPlans">Health Plans</Typography>
          <Typography  component={Link} href="/medicine">Medicine</Typography>
          <Typography  component={Link} href="/diagonostics">Diagonostics</Typography>
          <Typography  component={Link} href="/ngos">NGOs</Typography>
        </Stack>
        <Button component={Link} href="/login">
          Login
        </Button>
      </Stack>
    </Container>
  );
};

export default Navbar;
