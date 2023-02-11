import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

// Styles
import styles from '../styles'

const ProfileButtonContainer = ({
    buttonTitle,
    onPress,
}) => {
    return (
        <View style={styles.profileButtonContainer}>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.profileButtonText}>{buttonTitle}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProfileButtonContainer