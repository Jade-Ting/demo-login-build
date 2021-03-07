import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Result } from 'antd';

const Home = () => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      history.push("/login");
    }
  });

  return <Result
    status="success"
    title="登录成功"
  />;
};

export default Home;
