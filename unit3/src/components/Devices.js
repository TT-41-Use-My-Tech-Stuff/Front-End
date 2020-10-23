import React from "react";
import { useHistory } from "react-router-dom";

const Device = ({ item, deleteIt }) => {
  const history = useHistory();
  function routeToItem(ev, item) {
    ev.preventDefault();
    history.push(`/devicelist/${item.id}`);
  }

  return (
    <div className="item" key={item.id}>
      <img src={item.img_url} />
      <h4>{item.item_name}</h4>
      <h5>{item.category}</h5>
      <p>{item.item_description}</p>
      <p>Rate:${item.rate} per hour</p>
      <button onClick={(ev) => routeToItem(ev, item)}>Edit</button>
      <button
        onClick={() => {
          deleteIt(item.id);
        }}
      >
        Delete{" "}
      </button>
    </div>
  );
};

export default Device;
