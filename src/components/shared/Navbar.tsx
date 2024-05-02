import { Box, Container, Stack, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Container>
      <Stack direction={"row"} py={2} justifyContent={"space-between"}>
        <Typography variant="h5" component="h1" fontWeight={600}>
          S<Box component={"span"} color="primary.main">K</Box> Health Care
        </Typography>
      </Stack>
    </Container>
  );
};

export default Navbar;
