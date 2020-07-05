import React, { useState } from 'react'
import {
    View, StyleSheet, Button,
    TextInput,
    Dimensions,
    Modal,
} from 'react-native'

const GoalInput = ({ addGoalHandler, showModal, cancelAddItem }) => {
    const [enteredGoal, setEnteredGoal] = useState(null);


    const goalInputHandler = (goal) => {

        setEnteredGoal(goal);
    }

    return (
        <Modal visible={showModal} animationType="slide">
            <View style={{ ...styles.inpContainer }}>
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder='Course Goal ..... '
                    value={enteredGoal}
                    onChangeText={goalInputHandler}
                    style={{ ...styles.inp }} />
                <Button style={{ ...styles.btn }} title='Add Item' onPress={() => { addGoalHandler(enteredGoal), setEnteredGoal('') }} />
                <Button title="Cancel Add" onPress={cancelAddItem} />
            </View>
        </Modal>
    )
}


export default GoalInput;

const styles = StyleSheet.create({
    inp: {
        borderWidth: 1,
        borderColor: 'gray',
        width: Dimensions.get('window').width * 0.7,
        fontSize: 25,
        borderRadius: 20,
        padding: 10,
        paddingLeft: 20,
        marginTop: -5
    },
    inpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 100
    }

});