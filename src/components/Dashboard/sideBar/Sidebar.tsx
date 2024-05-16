"use client"

import List from "@mui/material/List";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import assets from "@/assets";
import { drawerItems } from "@/utils/drawerItems";
import { UserRole } from "@/types/common";
import SidebarItem from "./SidebarItems";
import { useEffect, useState } from "react";
import { getUserInfo } from "@/services/authService/authServices";

const Sidebar = () => {
    const [userRole, setUserRole] = useState("")
    useEffect(()=> {
        const {role} = getUserInfo()
        setUserRole(role)
    }, [])
  return (
    <Box>
      <Stack
        sx={{
          py: 1,
          mt: 1,
        }}
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={1}
        component={Link}
        href="/"
      >
        <Image src={assets.svgs.logo} width={40} height={40} alt="logo" />
        <Typography
          variant="h6"
          component="h1"
          sx={{
            cursor: "pointer",
          }}
        >
          SK Health Care
        </Typography>
      </Stack>
      <List>
        {drawerItems(userRole as UserRole).map((item, index) => (
          <SidebarItem key={index} item={item} index={index} />
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
