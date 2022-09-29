import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIcecream } from "../redux";

const HooksIcecreamContainer = () => {
  const numOfIcecream = useSelector((state) => state.icecream.numOfIcecream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Ice-creams - {numOfIcecream}</h2>
      <button onClick={() => dispatch(buyIcecream())}>But Ice-cream</button>
    </div>
  );
};

export default HooksIcecreamContainer;
