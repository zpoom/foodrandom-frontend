import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button, Row } from "antd";
export default () => {
  return (
    <Fragment>
      <Row type="flex" justify="center">
        <Link to="/restaurant">
          <Button type="primary" size="large">
            What to Eat?
          </Button>
        </Link>
      </Row>
    </Fragment>
  );
};
