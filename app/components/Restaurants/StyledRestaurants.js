import styled from "styled-components/native";

import normalize from "../../helpers/normalize";
import colors from "../../styles/colors";

export const RestaurantList = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;

export const Restaurant = styled.View`
  margin-right: ${normalize(true, 6)};
  margin-bottom: 10px;
  margin-top: 6px;
`;

export const RestaurantDiscount = styled.View`
  flex-direction: row;
  align-self: flex-end;
`;

export const Discount = styled.View`
  padding: 5px;
  text-align: center;
  background-color: ${colors.primary};
  margin-bottom: -26px;
  border-radius: 50px;
  bottom: 116px;
  left: 4px;
`;

export const DiscountText = styled.Text`
text-align:center;
font-size: ${normalize(true, 8)}
color: white;`;

export const RestaurantTitle = styled.Text`
  align-self: center;
  font-family: gotham-regular;
  font-size: ${normalize(true, 13)};
  font-weight: 100;
`;

export const RestaurantDescription = styled.Text`
  align-self: center;
  font-family: gotham-regular;
  font-size: ${normalize(true, 12)};
`;
