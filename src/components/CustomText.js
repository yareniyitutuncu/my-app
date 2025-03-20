import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const CustomText = ({secureOrNo, title, setValue, value, name}) => {
    return(
        <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={secureOrNo}
          value={value}
          onChangeText={setValue}
          placeholder={name}
        />
      </View>

    );
}

export default CustomText;

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        width: '80%',
      },
      title: {
        fontSize: 18,
        color: 'white',
        marginBottom: 5,
      },
      input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
        backgroundColor: 'gray',
        borderRadius: 5,
      },
})