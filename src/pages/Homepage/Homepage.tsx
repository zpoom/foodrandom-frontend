import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import "./index.css";
import { Credits } from "../../components";
export default () => {
  return (
    <Fragment>
      <h1 className="welcome-message">Welcome to FoodRandom.</h1>
      <Row type="flex" justify="center">
        <Col span={12}>
          <Link to="/restaurant">
            <div className="what-to-eat">
              <h1>What to Eat?</h1>
            </div>
          </Link>
        </Col>
      </Row>
      <Credits />
    </Fragment>
  );
};
