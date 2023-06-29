import "./components.css";
import FilterItem from "./filterItem";
import { useState, useContext } from "react";
import { SharedArr } from "../App";

export default function FilterForm() {
  const { changeFilterValue } = useContext(SharedArr);

  const [filter, setFilter] = useState("All");
  const handleCheckbox = (event) => {
    setFilter(event.target.value);
    changeFilterValue(event.target.value);
  };
  return (
    <div className="wrap-filter-item w-100 d-flex justify-content-end my-2 gap-2">
      <FilterItem
        label={"All"}
        checked={filter == "All"}
        value={"All"}
        onChange={handleCheckbox}
      ></FilterItem>
      <FilterItem
        label={"Active"}
        checked={filter == "Active"}
        value={"Active"}
        onChange={handleCheckbox}
      ></FilterItem>
      <FilterItem
        label={"Completed"}
        checked={filter == "Completed"}
        value={"Completed"}
        onChange={handleCheckbox}
      ></FilterItem>
    </div>
  );
}
