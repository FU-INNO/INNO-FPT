import { useEffect } from "react";
import { login } from "../api/auth.api";
import { useUser } from "../hooks/useUser";
import { Spin } from "antd";

const Login = () => {
  const url = window.location;
  const params = new URLSearchParams(url.search);
  const getParams = async () => {
    const id = params.get("id");
    const token = params.get("token");
    return { id, token };
  };

  const { setUser } = useUser();
  const asyncLogin = async () => {
    const { id, token } = await getParams();
    await login({ id, token })
      .then((res) => {
        if (res.status === 200) {
          //save token to local storage
          localStorage.setItem("token", res?.data?.data?.token);
          localStorage.setItem("id", res?.data?.data?.user?.id);
          //save user
          setUser(res?.data?.user);
          //redirect to home
          window.location.href = "/";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    asyncLogin();
  }, []);

  return <Spin tip="Loading..."></Spin>;
};

export default Login;
