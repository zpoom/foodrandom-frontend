import { Restaurant } from "../interfaces";
import axios from "axios";
const dummyRestaurants: Array<Restaurant> = [
  {
    latitude: 13.768864,
    longitude: 100.540041,
    name: "Sushi Hiro",
    category: "Japanese",
    menu: "Salmon sashimi"
  },
  {
    latitude: 48.0,
    longitude: -122.0,
    name: "Dummy2",
    category: "C2",
    menu: "M1"
  },
  {
    latitude: 48.0,
    longitude: -122.0,
    name: "Dummy3",
    category: "C3",
    menu: "M1"
  },
  {
    latitude: 48.0,
    longitude: -122.0,
    name: "Dummy4",
    category: "C4",
    menu: "M4"
  },
  {
    latitude: 48.0,
    longitude: -122.0,
    name: "Dummy5",
    category: "C5",
    menu: "M5"
  },
  {
    latitude: 48.0,
    longitude: -122.0,
    name: "Dummy1",
    category: "C1",
    menu: "M2"
  },
  {
    latitude: 48.0,
    longitude: -122.0,
    name: "Dummy2",
    category: "C2",
    menu: "M3"
  },
  {
    latitude: 48.0,
    longitude: -122.0,
    name: "Dummy3",
    category: "C3",
    menu: "M2"
  },
  {
    latitude: 48.0,
    longitude: -122.0,
    name: "Dummy4",
    category: "C4",
    menu: "M1"
  },
  {
    latitude: 48.0,
    longitude: -122.0,
    name: "Dummy5",
    category: "C5",
    menu: "M1"
  },
  {
    latitude: 48.0,
    longitude: -122.0,
    name: "Dummy1",
    category: "C1",
    menu: "M10"
  }
];
const baseUrl: string = "localhost:8080";
const query: string = `{hello}`;
export const getRandomRestaurant = (excludedCategories: Array<string>) => {
  const randomizedRestaurants = dummyRestaurants.filter(restaurant => {
    return !excludedCategories.includes(restaurant.category);
  });
  const randIdx: number = Math.floor(
    Math.random() * randomizedRestaurants.length
  );
  return randomizedRestaurants.length === 0
    ? undefined
    : randomizedRestaurants[randIdx];
};

// export async function getRandomRestaurant(excludedCategories: Array<string>) {
//   const res = await axios.post(`${baseUrl}/graphql`, query);
//   console.log(res.data);
// }
