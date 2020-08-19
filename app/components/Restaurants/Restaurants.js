import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';

import styles from './RestaurantsStyles';
import {
  RestaurantList,
  Restaurant,
  RestaurantDiscount,
  Discount,
  DiscountText,
  RestaurantTitle,
  RestaurantDescription
} from './StyledRestaurants';
import restaurants from '../../helpers/restaurants';
import Rating from '../../assets/svg/Rating.svg';

export default () => (
  <View style={styles.container}>
    <Text style={styles.title}>Restaurantes</Text>
    <ScrollView horizontal={true}>
      <RestaurantList>
        {restaurants.map(({id, name, rating, time, discount, image}) => (
          <TouchableOpacity key={id}>
            <Restaurant>
              <Image style={{width: 110, height: 110}} source={image} />
              <RestaurantDiscount>
                <Discount>
                  <DiscountText>{`${discount}%${'\n'}DCTO`}</DiscountText>
                </Discount>
              </RestaurantDiscount>
              <RestaurantTitle>{name}</RestaurantTitle>
              <RestaurantDescription>
                <Rating />
                <Text>{` ${rating}  `}</Text>
                <Text>{`${time}min.`}</Text>
              </RestaurantDescription>
            </Restaurant>
          </TouchableOpacity>
        ))}
      </RestaurantList>
    </ScrollView>
  </View>
);
