import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Dashboard from "../components/Dashboard/Dashboard";
import Header from "../components/Header/Header";
import Button from "../components/UI/Button";
import { axiosInstance } from "../config";
import { authActions } from "../redux/authRedux";

const DashboardPage = () => {
  // const [data, setData] = useState([]);
  // const [file, setFile] = useState(null);

  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(authActions.logout());
  };

  // const uploadHandler = async (e) => {
  //   console.log("uploading");
  //   e.preventDefault();

  //   // const file = document.getElementById("input-file").files;
  //   // console.log(file);

  //   const formData = new FormData();
  //   formData.append("img", file);
  //   console.log(formData);
  //   const res = await axiosInstance.post("/data", formData);
  //   console.log(res);
  // fetch("/", {
  //   method: "POST",
  //   body: formData,
  // }).then((r) => {
  //   console.log(r);
  // });
  // console.log(file[0]);

  return (
    <div>
      <Header />
      <Dashboard />
    </div>
  );
};

export default DashboardPage;
