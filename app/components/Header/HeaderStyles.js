import {StyleSheet} from 'react-native';

import normalize from '../../helpers/normalize';

export default StyleSheet.create({
  container: {
    padding: normalize(false, 16),
    flexDirection: 'row',
    alignItems: 'center'
  },
  user: {
    width: 50,
    height: 50
  },
  search: {
    marginLeft: 'auto',
    marginRight: 4
  }
});
