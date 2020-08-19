import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors';

const {width, height} = Dimensions.get('window');
const borderRadius = 25;

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: height > 667 ? 44 : 22,
    backgroundColor: colors.gray,
    alignItems: 'center'
  },
  topContainer: {
    flex: 3
  },
  middleContainer: {
    flex: 1,
    padding: height > 812 ? 0 : 4,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: colors.secondary,
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    bottom: 38
  },
  bottomContainer: {
    flex: 4,
    bottom: 60,
    width,
    alignSelf: 'stretch',
    backgroundColor: colors.white,
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    shadowColor: '#000',
    shadowOffset: {height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2
  },
  sectionContainer: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingBottom: 20,
    marginTop: 20
  }
});
