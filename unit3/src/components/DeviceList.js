import React, { useEffect, useState } from "react";
import Device from "./Device";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const DeviceList = () => {
  const [list, setList] = useState([]);

  const fetchData = (ev) => {
    ev.preventDefault();
    axiosWithAuth()
      .get("/api/rentals")
      .then((res) => {
        setList(res.data);
      })
      .catch((err) => console.log(err));
  };
  const deleteData = (id) => {
    axiosWithAuth()
      .delete(`/api/rentals/delete/${id}`)
      .then((res) => {
        console.log(res.data);
        setList(list.filter((i) => i.id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>DeviceList</h1>
      <button
        onClick={(e) => {
          fetchData(e);
        }}
      >
        CLICK ME
      </button>
      {list.map((item) => (
        <Device item={item} key={item.id} deleteIt={deleteData} />
      ))}
    </div>
  );
};

export default DeviceList;
