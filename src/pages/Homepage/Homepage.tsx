import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col } from "antd";
import "./homepage.css";
export default () => {
  return (
    <Fragment>
      <Row type="flex" justify="center">
        <Col span={10}>
          <Link to="/restaurant">
            <div className="what-to-eat">
              <h1>What to Eat?</h1>
            </div>
          </Link>
        </Col>
        <img src="./next.png" alt="next" className="next-icon" />
      </Row>
    </Fragment>
  );
};