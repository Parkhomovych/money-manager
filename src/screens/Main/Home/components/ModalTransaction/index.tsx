/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Dropdown from 'react-native-input-select';
import {getCategories, getTitle} from './helpers';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '../../../../../theme/use-theme';
import {TransactionType, Categories} from '../../../../../store';
import {useModalTransaction} from './use-modal-transaction';
import {getStyles} from './styles';

interface ModalTransactionProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (data: {amount: number; description: string; category: Categories}) => void;
  type: TransactionType;
}

export const ModalTransaction = ({visible, onClose, onSubmit, type}: ModalTransactionProps) => {
  const {theme} = useTheme();
  const styles = getStyles(theme);

  const {
    amountBind,
    descriptionBind,
    category,
    categoryBind,
    isDisabled,
    handleSubmit,
    handleClose,
  } = useModalTransaction(type, onSubmit, onClose);

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
        onTouchStart={handleClose}>
        <View style={styles.content} onTouchStart={e => e.stopPropagation()}>
          <View style={styles.header}>
            <Text style={styles.title}>{getTitle(type)}</Text>
            <TouchableOpacity onPress={handleClose}>
              <Icon name="close" size={24} color={theme.textSecondary} />
            </TouchableOpacity>
          </View>

          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Amount</Text>
              <TextInput
                style={styles.input}
                {...amountBind}
                keyboardType="numeric"
                placeholder="0.00"
                placeholderTextColor={theme.placeholder}
              />
            </View>

            {type !== TransactionType.ADD_BALANCE && (
              <>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Description</Text>
                  <TextInput
                    style={styles.input}
                    {...descriptionBind}
                    placeholder="Enter description"
                    placeholderTextColor={theme.placeholder}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Category</Text>
                  <Dropdown
                    selectedValue={category}
                    onValueChange={value => categoryBind.onChangeText(value as string)}
                    options={getCategories(type)}
                    placeholder="Select category"
                    dropdownStyle={{
                      ...styles.input,
                      backgroundColor: theme.surface,
                      borderColor: theme.border,
                    }}
                    placeholderStyle={{color: theme.textSecondary, fontSize: 16}}
                    modalControls={{
                      modalOptionsContainerStyle: {
                        backgroundColor: theme.surface,
                        borderTopLeftRadius: 24,
                        borderTopRightRadius: 24,
                      },
                    }}
                    checkboxControls={{
                      checkboxStyle: {backgroundColor: theme.secondary, borderColor: theme.primary},
                      checkboxLabelStyle: {color: theme.textPrimary, fontSize: 16},
                    }}
                    selectedItemStyle={{color: theme.textPrimary, fontSize: 16}}
                    dropdownIcon={
                      <Icon
                        name="chevron-down"
                        style={{marginTop: -5}}
                        size={24}
                        color={theme.textSecondary}
                      />
                    }
                  />
                </View>
              </>
            )}
            <TouchableOpacity
              style={[styles.submitButton, !isDisabled && styles.disabled]}
              onPress={handleSubmit}
              disabled={!isDisabled}>
              <Text style={styles.submitButtonText}>Add Transaction</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};
