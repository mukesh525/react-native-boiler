import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

export default Sample = () => {
    return (
        <View style={styles.body}>
            <Text>Hello Sample Functional Component</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: "#FFF",
    }
});


