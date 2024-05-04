import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

const Specialities = async () => {
  const res = await fetch("http://localhost:5000/api/v1/specialities", {
    next: {
      revalidate: 30,
    },
  });
  const { data: specialities } = await res.json();
  //   console.log(specialities);

  return (
    <Container>
      <Box
        sx={{
          marginY: "50px",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            textAlign: "start",
          }}
        >
          <Typography variant="h4" fontWeight={700}>
            Explore Treatment Across Specialities
          </Typography>
          <Typography fontWeight={400} mt={1}>
            Experienced Doctor Accross all Specialities
          </Typography>
        </Box>

        <Stack direction={"row"} gap={4} mt={5}>
          {specialities?.map((speciality: any) => (
            <Box
              key={speciality?.id}
              sx={{
                flex: 1,
                width: "150px",
                backgroundColor: "rgba(245,245, 245, 1)",
                border: "1px solid rgba(250,250, 250, 1)",
                borderRadius: "10px",
                padding: "40px 12px",
                textAlign: "center",
                "& img": {
                  width: "70px",
                  height: "70px",
                  margin: "0 auto",
                },
                "&:hover": {
                    border: "1px solid blue",
                    borderRadius: "10px"
                }
              }}
            >
              <Image
                src={speciality?.icon}
                alt="speciality img"
                width={100}
                height={100}
              />
              <Box>
                <Typography fontWeight={600} fontSize={18} mt={2}>
                  {speciality?.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
        <Button variant="outlined" sx={{
            marginY: "20px"
        }}>Veiw All</Button>
      </Box>
    </Container>
  );
};

export default Specialities;
