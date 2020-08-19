import styled from 'styled-components/native';

import normalize from '../../helpers/normalize';
import colors from '../../styles/colors';

export const CategoryList = styled.View`
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 6px;
  margin-left: -4px;
`;

export const Category = styled.View`
  margin-top: 6px;
`;

export const CategoryText = styled.Text`
  align-self: center;
  margin-top: 24px;
  font-family: gotham-bold;
  text-transform: uppercase;
  font-size: ${normalize(true, 12)};
  color: ${colors.white};
`;
