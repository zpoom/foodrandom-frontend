import axios from "axios";
import { baseUrl } from "../const";
const getQuery = (excludedCategories: Array<string>) => {
  return `{ getRandomizedRestaurant(excludedCategories: ${JSON.stringify(
    excludedCategories
  )}){ name,category,latitude,longitude,menu}}`;
};
export const getRandomRestaurant = async (excludedCategories: Array<string>) =>
  (
    await axios({
      url: `${baseUrl}/graphql`,
      method: "post",
      data: {
        query: getQuery(excludedCategories)
      }
    })
  ).data.data.getRandomizedRestaurant;
