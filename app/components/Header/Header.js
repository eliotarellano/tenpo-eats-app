import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';

import styles from './HeaderStyles';
import SearchIcon from '../../assets/svg/Search.svg';

export default () => (
  <View style={styles.container}>
    <TouchableOpacity>
      <Image style={styles.user} source={require('../../assets/Elipse.png')} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.search}>
      <SearchIcon />
    </TouchableOpacity>
  </View>
);
