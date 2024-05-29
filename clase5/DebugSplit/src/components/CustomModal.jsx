import { StyleSheet, Text, View, Modal, Button} from 'react-native'
import React from 'react'

export default function CustomModal({ 
    handleCancel, 
    handleDelete, 
    modalView, 
    itemSelected 
}) {
  return (
    <Modal visible={modalView} transparent={true} animationType="slide">
      <View style={styles.modalStyles}>
        <View style={styles.modalContainer}>
          <View style={styles.textContainer}>
            <Text>Esta seguro que quieres borrar: </Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textModal}></Text>
          </View>
          <View style={styles.textContainer}>
            <Button
              style={styles.btnContainer}
              onPress={handleDelete}
              title="Borrar"
            />
            <Button
              style={styles.btnContainer}
              onPress={handleCancel}
              title="Cancelar"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalStyles: {
    backgroundColor: "#cccc66",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainer: {
    padding: 10,
  },
  btnContainer: {
    flexDirection: "row",
    gap: 20,
  },
  textModal: {
    fontWeight: "bold",
  },
});
