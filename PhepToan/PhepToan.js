import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Calculator() {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const result = useSelector((state) => state.result);

  const handleAdd = () => {
    dispatch({ type: 'ADD', payload: parseFloat(value) || 0 });
  };

  const handleSubtract = () => {
    dispatch({ type: 'SUBTRACT', payload: parseFloat(value) || 0 });
  };

  const handleMultiply = () => {
    dispatch({ type: 'MULTIPLY', payload: parseFloat(value) || 0 });
  };

  const handleDivide = () => {
    dispatch({ type: 'DIVIDE', payload: parseFloat(value) || 0 });
  };

  const handleReset = () => {
    dispatch({ type: 'RESET' });
    setValue('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a number"
        keyboardType="numeric"
        value={value}
        onChangeText={(text) => setValue(text)}
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handleAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleSubtract}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleMultiply}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleDivide}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
          <Text style={styles.resetButtonText}>Reset</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.result}>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 5,
    width: 50,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  resetButton: {
    backgroundColor: '#e74c3c',
    padding: 15,
    borderRadius: 5,
    width: '30%',
    alignItems: 'center',
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
