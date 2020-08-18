import styled from "styled-components/native";

import normalize from "../../helpers/normalize";
import colors from "../../styles/colors";

export const FavoritesList = styled.View`
  flex-direction: row;
  margin-top: 10px;
  margin-left: -4px;
`;

export const Product = styled.View`
  margin-top: 6px;
`;

export const RestaurantImage = styled.Image`
  top: 12px;
  left: 14px;
`;

export const ProducInfo = styled.View`
  padding: 10px;
  background-color: ${colors.white};
`;

export const ProductName = styled.Text`
  align-self: flex-start;
  font-family: gotham-regular;
  font-size: ${normalize(true, 12)};
`;

export const ProductRatingSvg = styled.View`
  margin-left: auto;
`;

export const ProductRating = styled.Text`
  margin-left: auto;
  font-family: gotham-regular;
  font-size: ${normalize(true, 12)};
`;

export const RestaurantName = styled.Text`
  margin-top: 2px;
  
  color: ${colors.primary}
  font-family: gotham-bold;
  font-size: ${normalize(true, 12.5)};
`;
