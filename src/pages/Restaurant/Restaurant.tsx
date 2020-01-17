import React, { Fragment, useState, useEffect } from "react";
import { Card } from "../../components";
import { Row, Col } from "antd";
import { Restaurant } from "../../interfaces";
import { getRandomRestaurant } from "../../api/restaurant";
import { Redirect } from "react-router-dom";
import "./restaurant.css";

export default () => {
  const [excludedCategories, setExcludedCategories] = useState<Array<string>>(
    []
  );
  const [restaurant, setRestaurant] = useState<Restaurant>({
    name: "",
    category: "",
    latitude: -1,
    longitude: -1,
    menu: ""
  });
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    const res: Restaurant | undefined = getRandomRestaurant(excludedCategories);
    if (res !== undefined) {
      setRestaurant(res);
      console.log(excludedCategories);
    } else {
      setRedirect(true);
    }
  }, [excludedCategories]);

  const excludedThisCategory = (category: string) => {
    if (!excludedCategories.includes(category)) {
      setExcludedCategories(excludedCategories.concat(category));
    }
  };
  return redirect ? (
    <Redirect to="/no-restaurant" />
  ) : (
    <div className="restaurant-container">
      <Row type="flex" justify="center">
        <Col span={8}>
          <div className="card-container">
            <Card title="Menu" content={restaurant.menu}></Card>
          </div>
          <div className="card-container">
            <Card title="Category" content={restaurant.category}></Card>
          </div>
          <div className="exclude-button">
            <h1 onClick={() => excludedThisCategory(restaurant.category)}>
              {`No ${restaurant.category} food, please`}
            </h1>
          </div>
        </Col>
        <Col span={12}>
          <div className="map"></div>
        </Col>
      </Row>
    </div>
  );
};
