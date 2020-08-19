import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, ImageBackground} from 'react-native';

import styles from './FavoritesStyles';
import {
  FavoritesList,
  Product,
  RestaurantImage,
  ProducInfo,
  ProductName,
  ProductRating,
  ProductRatingSvg,
  RestaurantName
} from './StyledFavorites';
import favorites from '../../helpers/favorites';
import Rating from '../../assets/svg/Rating.svg';

export default () => (
  <View style={styles.container}>
    <Text style={styles.title}>Tus favoritos</Text>
    <ScrollView horizontal={true}>
      <FavoritesList>
        {favorites.map(({id, name, rating, image, time, restaurantName, restaurantImage}) => (
          <TouchableOpacity key={id}>
            <Product>
              <ImageBackground source={image} style={{width: 260, height: 101}}>
                <RestaurantImage style={{width: 35, height: 35}} source={restaurantImage} />
              </ImageBackground>
              <ProducInfo>
                <View style={{flexDirection: 'row'}}>
                  <ProductName>{name}</ProductName>
                  <ProductRatingSvg>
                    <Rating />
                  </ProductRatingSvg>
                  <ProductRating>{rating}</ProductRating>
                </View>
                <View
                  style={{
                    flexDirection: 'row'
                  }}>
                  <RestaurantName>{restaurantName}</RestaurantName>
                  <ProductRating>{`${time}min`}</ProductRating>
                </View>
              </ProducInfo>
            </Product>
          </TouchableOpacity>
        ))}
      </FavoritesList>
    </ScrollView>
  </View>
);
