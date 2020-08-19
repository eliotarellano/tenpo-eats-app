import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';

import styles from './CategoriesStyles';
import {CategoryList, Category, CategoryText} from './StyledCategories';
import categories from '../../helpers/categories';

export default () => (
  <View style={styles.container}>
    <Text style={styles.title}>Categorías</Text>
    <ScrollView horizontal={true}>
      <CategoryList>
        {categories.map(({id, name, image}) => (
          <TouchableOpacity key={id}>
            <Category>
              <ImageBackground style={{width: 145, height: 65}} source={image}>
                <CategoryText>{name}</CategoryText>
              </ImageBackground>
            </Category>
          </TouchableOpacity>
        ))}
      </CategoryList>
    </ScrollView>
  </View>
);
