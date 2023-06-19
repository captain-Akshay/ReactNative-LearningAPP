import React from "react";
import { CompactRestaurantInfo } from "../../../features/resturants/components/compact-restaurant";
export const MapCallout = ({ restaurant }) => (
  <CompactRestaurantInfo isMap restaurant={restaurant} />
);
