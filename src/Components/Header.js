import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";

import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";

import History from "./History";
import logo from "../Img/lo.jpg";
const Header = ({ moves }) => {
  const score = useSelector((state) => state.game.score);

  return (
    <div>
      <div className="header">
        <div>
          <img src={logo} />
        </div>
        <div className="buttons">
          <div>
            <Button variant="success">Score: {score}</Button>
          </div>
          <div>
            <Button variant="info">Target :60 </Button>
          </div>
          <div>
            <Button variant="warning"> Moves Left: {moves}</Button>
          </div>
          <div>
            <History>History</History>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
