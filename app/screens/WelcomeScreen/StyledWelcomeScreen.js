import styled from "styled-components/native";

export const TitleContainer = styled.View`
  text-align: left;
  margin-left: 24px;
`;

export const Title = styled.Text`
  font-size: 50px;
  font-weight: bold;
  line-height: 48px;
  color: ${(props) => (props.type === "light" ? colors.black : colors.primary)};
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.black};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const SvgContainer = styled.Text`
  margin-top: 30px;
`;
