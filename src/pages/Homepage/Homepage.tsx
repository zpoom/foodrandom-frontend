import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col } from "antd";
import "./Homepage.css";
export default () => {
  return (
    <Fragment>
      <Row type="flex" justify="center">
        <Col span={12}>
          <Link to="/restaurant">
            <div className="what-to-eat">
              <h1>What to Eat?</h1>
            </div>
          </Link>
        </Col>
      </Row>
    </Fragment>
  );
};
