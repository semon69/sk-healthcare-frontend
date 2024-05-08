import { getUserInfo, removeUser } from "@/services/authService/authServices";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  const userInfo = getUserInfo();
  const router = useRouter();

  const handleLogut = () => {
    removeUser();
    router.refresh();
  };

  return (
    <>
      {userInfo?.email ? (
        <Button onClick={handleLogut} color="error">
          Logout
        </Button>
      ) : (
        <Button component={Link} href="/login">
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;
