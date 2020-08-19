import styled from 'styled-components/native';

import normalize from '../../helpers/normalize';
import colors from '../../styles/colors';

export const Title = styled.Text`
  font-size: ${normalize(true, 40)};
  font-weight: 800;
  line-height: ${normalize(true, 38)};
  color: ${props => (props.type === 'light' ? colors.darkerGray : colors.primary)};
`;

export const Subtitle = styled.Text`
  font-size: ${normalize(true, 11.5)};
  font-weight: bold;
  color: ${colors.darkerGray};
  text-transform: uppercase;
  letter-spacing: 2.4px;
  font-family: gotham-bold;
`;

export const SvgContainer = styled.View`
  margin-left: auto;
  transform: scale(0.95);
`;
