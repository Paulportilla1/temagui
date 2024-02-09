import React from 'react';
import { View, Text, ScrollView } from 'react-native'; 0
import { H1, H5 } from 'tamagui'; 
import { MyStack } from '../../components/MyStack'; 
import { DemoCard } from '../../components/Card'; 

export default function Tab1() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ alignItems: 'center' }}>
        <H1>Dashboard</H1> 
        <H5>Films</H5> 
      </View>

      <View style={{ flex: 1, justifyContent: 'center' }}>
        <MyStack>
          <DemoCard /> 
        </MyStack>
      </View>
    </ScrollView>
  );
}
