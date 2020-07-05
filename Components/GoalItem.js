import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'

const GoalItem = ({ item, onDeleteItem }) => {
    return (
        <TouchableWithoutFeedback onPress={() => onDeleteItem(item.id)}>
            <View>
                <Text style={{ ...styles.list }}>{item.value}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    list: {
        marginTop: 20,
        backgroundColor: 'gray',
        padding: 12,
        fontSize: 23,
        fontWeight: 'bold',
        borderRadius: 20,
        overflow: 'hidden'
    }
})