import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Header from "../components/Header/Header";
import { axiosInstance } from "../config";
import { authActions } from "../redux/authRedux";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(authActions.logout());
  };

  const uploadHandler = async (e) => {
    console.log("uploading");
    e.preventDefault();

    // const file = document.getElementById("input-file").files;
    // console.log(file);

    const formData = new FormData();
    formData.append("img", file);
    console.log(formData);
    const res = await axiosInstance.post("/data", formData);
    console.log(res);
    // fetch("/", {
    //   method: "POST",
    //   body: formData,
    // }).then((r) => {
    //   console.log(r);
    // });
    // console.log(file[0]);
  };

  

  return (
    <div>
      <Header />
      <h1>Dashboard</h1>
      <button onClick={handleLogOut}>Logout</button>
      {/* <form
        action="/upload"
        method="POST"
        encType="multipart/form-data"
        onSubmit={uploadHandler}
      >
        <div>
          <input
            type="file"
            name="file"
            id="testImg"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="file"
            name="file"
            id="testImg2"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <button type="submit">Submit</button>
        <button type="submit">Show</button>
      </form>
       */}
    </div>
  );
};

export default Dashboard;
