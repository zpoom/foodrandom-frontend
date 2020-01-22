import React from "react";
import { Row, Col } from "antd";
import "./index.css";
import { Link } from "react-router-dom";
import { Credits } from "../../components";
export default () => {
  return (
    <div className="no-restaurant">
      <img src="./fork.png" alt="food-random" className="icon" />
      <div className="ran-out-message">
        We ran out of restaurants to suggest, please try again.
      </div>
      <Row justify="center" type="flex">
        <Col xs={{ span: 16 }} xl={{ span: 6 }}>
          <Link to="/restaurant">
            <div className="try-again-button">
              <h1>Try again</h1>
            </div>
          </Link>
        </Col>
      </Row>
      <Credits />
    </div>
  );
};
