import React from 'react';
import Calculate from '../Calculate';
import { Text, View } from 'react-native';

const Result = () => {
  const { Lead, Tail, Displacement } = Calculate();
  return (
    <View style={{color: "white"}}>
        <Text>Lead Slurry {Lead()} bbl</Text>
        <Text>Tail Slurry {Tail()} bbl</Text>
        <Text>Displacement {Displacement()} bbl</Text>
    </View>
  )
}

export default Result;
