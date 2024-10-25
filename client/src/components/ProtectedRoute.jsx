import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GetCurrentUser } from "../api/users";
import { message, Layout, Menu } from "antd";
const { Header } = Layout;

import {
  HomeOutlined,
  LogoutOutlined,
  ProfileOutlined,
  UserOutlined,
} from "@ant-design/icons";

function ProtectedRoute({ children }) {
  const [user, setUser] = useState({});

  const navigate = useNavigate();
  //all the logic for validation and redirection

  //add menu
  const navItems = [
    {
      key: "home",
      label: <span onClick={() => navigate("/")}>Home</span>,
      icon: <HomeOutlined />,
    },
    {
      key: "user",
      label: `${user?.name || ""}`,
      icon: <UserOutlined />,
      children: [
        {
          key: "myprofile",
          label: (
            <span
              onClick={() => {
                user.isAdmin ? navigate("/admin") : navigate("/profile");
              }}
            >
              My profile
            </span>
          ),
          icon: <ProfileOutlined />,
        },
        {
          key: "logout",
          label: (
            <Link
              to="/Login"
              onClick={() => {
                localStorage.removeItem("token");
              }}
            >
              Logout
            </Link>
          ),
          icon: <LogoutOutlined />,
        },
      ],
    },
  ];

  const getValidUser = async () => {
    try {
      const response = await GetCurrentUser();
      if (!response.data.isAdmin) {
        navigate("/");
      }
      setUser(response.data);
      message.success(`welcome back ${response.data.name}`);
    } catch (error) {
      console.error(error);
      message.error(error.message);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getValidUser();
    } else {
      navigate("/login");
    }
  }, []);

  // console.log(children);

  return (
    <>
      <Layout>
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="logo-contain" style={{ width: "100%" }}>
            <h3 className="demo-logo text-white m-0" style={{ color: "white" }}>
              Book my Show
            </h3>
          </div>
          <div className="menu-contain" style={{ width: "100%" }}>
            <Menu
              theme="dark"
              mode="horizontal"
              items={navItems}
              style={{ justifyContent: "flex-end" }}
            />
          </div>
        </Header>

        <div>
          {user?.name || ""}
          {children}
        </div>
      </Layout>
    </>
  );
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
