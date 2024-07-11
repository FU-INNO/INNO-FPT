import { Button } from "antd";
import { GoogleOutlined } from "@ant-design/icons";

const Login = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-white flex-col">
        <div className="p-6 bg-black rounded-lg shadow-lg">
          <h3 className="  font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-500 ">
            Đăng nhập
          </h3>
          <Button
            icon={<GoogleOutlined />}
            className="flex items-center justify-center w-full mb-4 text-white bg-red-500 hover:bg-red-600"
          >
            <span>Tiếp tục với Google</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Login;
