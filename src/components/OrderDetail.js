import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import {Card, CardSection} from './common';

const OrderDetail = ({ order }) => {
  const { id, name, postId } = order;

  return (
    <Card>
      <CardSection>

        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>ORDER ID:  {id}</Text>
          <Text>CUSTOMER NAME:  {name}</Text>
          <Text>ORDER DATE:  {postId}</Text>
        </View>
      </CardSection>

    </Card>
  );
};

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  }
})

export default OrderDetail;
