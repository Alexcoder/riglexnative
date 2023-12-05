import React from 'react';
import Calculate from '../Calculate';
import { Text, View } from 'react-native';

const Result = () => {
  const { Lead, Tail, Displacement } = Calculate();
  return (
    <View >
        <Text style={{color: "white"}}>Lead Slurry {Lead()} bbl</Text>
        <Text style={{color: "white"}}>Tail Slurry {Tail()} bbl</Text>
        <Text style={{color: "white"}}>Displacement {Displacement()} bbl</Text>
    </View>
  )
}

export default Result;
