import React from "react";
import { Row, Col } from "antd";
import "./index.css";
import { RAN_OUT_MESSAGE } from "../../const";
import { Link } from "react-router-dom";
export default () => {
  return (
    <div className="no-restaurant">
      <img src="./fork.png" alt="food-random" className="icon" />
      <div className="ran-out-message">{RAN_OUT_MESSAGE}</div>
      <Row justify="center" type="flex">
        <Col span={6}>
          <Link to="/restaurant">
            <div className="try-again-button">
              <h1>Try again</h1>
            </div>
          </Link>
        </Col>
      </Row>
    </div>
  );
};
