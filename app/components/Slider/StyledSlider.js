import styled from "styled-components/native";
import { Platform } from "react-native";

import colors from "../../styles/colors";

export const Title = styled.Text`
  font-size: 40px;
  font-weight: 800;
  line-height: 40px;
  color: ${(props) =>
    props.type === "light" ? colors.darkerGray : colors.primary};
`;

export const Subtitle = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: ${colors.darkerGray};
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const SvgContainer = styled.Text`
  margin-left: auto;
  margin-bottom: 4px;
  transform: scale(0.95);
`;
