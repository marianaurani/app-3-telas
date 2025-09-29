import React from 'react';
import { View, StyleSheet, Platform, StatusBar } from 'react-native';

export const ScreenWrapper = ({ children, backgroundColor = '#fff' }) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 44 : StatusBar.currentHeight || 0,
  },
});

export default ScreenWrapper;