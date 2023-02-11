import {View, Text, Modal, TextInput} from 'react-native';
import React from 'react';

// Components
import Button from '../../../common/components/Button';

// Styles
import styles from '../style';

const TaskModal = ({
  visible,
  onRequestClose,
  taskTitle,
  taskDescription,
  onPress,
  onHandleClose,
  buttonTitle,
}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onRequestClose}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTextHeader}>{taskTitle}</Text>
            <Text style={styles.modalTextDescription}>{taskDescription}</Text>
            <View>
              <TextInput
                placeholder="Task Name"
                placeholderTextColor="black"
                cursorColor="black"
                allowFontScaling={false}
                autoCapitalize="words"
                style={styles.modalTextInput}
              />
            </View>
            <View style={styles.modalButtonContainer}>
              <Button title={buttonTitle} onPress={onPress} />
              <Button title="Cancel" onPress={onHandleClose} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TaskModal;
