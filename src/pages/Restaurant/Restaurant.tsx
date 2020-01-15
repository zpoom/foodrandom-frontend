import React, { Fragment, useState, useEffect } from "react";
import { Card } from "../../components";
import { Row, Col, Button } from "antd";
import { Restaurant } from "../../interfaces";
import { getRandomRestaurant } from "../../api/restaurant";
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

  useEffect(() => {
    const res: Restaurant | undefined = getRandomRestaurant(excludedCategories);
    if (res !== undefined) {
      setRestaurant(res);
      console.log(excludedCategories);
    }
  }, [excludedCategories]);

  const excludedThisCategory = (category: string) => {
    if (!excludedCategories.includes(category)) {
      setExcludedCategories(excludedCategories.concat(category));
    }
  };
  return (
    <div className="restaurant-container">
      <Row type="flex" justify="center">
        <Col span={6}>
          <Card title="Category" content={restaurant.category}></Card>
          <Card title="Menu" content={restaurant.menu}></Card>
          <Button
            type="danger"
            shape="round"
            size="large"
            onClick={() => excludedThisCategory(restaurant.category)}
          >
            {`No ${restaurant.category} food, please`}
          </Button>
        </Col>
        <Col span={12}>
          <div className="map">
            <h3>{restaurant.name}</h3>
            <h3>{restaurant.category}</h3>
            <h3>{restaurant.latitude}</h3>
            <h3>{restaurant.longitude}</h3>
            <h3>{restaurant.menu}</h3>
          </div>
        </Col>
      </Row>
    </div>
  );
};
