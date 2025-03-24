import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '../../../../theme/use-theme';
import {TransactionType} from '../../../../store/TransactionSlice/types';
import {useInput} from '../../../../hooks';

interface ModalTransactionProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (data: {amount: number; description: string; category: string}) => void;
  type: TransactionType;
}

export const ModalTransaction = ({visible, onClose, onSubmit, type}: ModalTransactionProps) => {
  const {theme} = useTheme();
  const styles = getStyles(theme);
  const [amount, amountBind, clearAmount] = useInput('');
  const [description, descriptionBind, clearDescription] = useInput('');
  const [category, categoryBind, clearCategory] = useInput('');
  const isDisabled = disabledButton(type, amount, description, category);

  const handleSubmit = () => {
    if (isDisabled) return;
    onSubmit({amount: parseFloat(amount), description, category});
    clearAmount();
    clearDescription();
    clearCategory();
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
        onTouchStart={onClose}>
        <View style={styles.content} onTouchStart={e => e.stopPropagation()}>
          <View style={styles.header}>
            <Text style={styles.title}>{getTitle(type)}</Text>
            <TouchableOpacity onPress={onClose}>
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
                  <TextInput
                    style={styles.input}
                    {...categoryBind}
                    placeholder="Enter category"
                    placeholderTextColor={theme.placeholder}
                  />
                </View>
              </>
            )}

            <TouchableOpacity
              style={[
                styles.submitButton,
                !amount || !description || !category ? styles.disabled : null,
              ]}
              onPress={handleSubmit}
              disabled={isDisabled}>
              <Text style={styles.submitButtonText}>Add Transaction</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const disabledButton = (
  type: TransactionType,
  amount: string,
  description: string,
  category: string,
) => {
  switch (type) {
    case TransactionType.ADD_BALANCE:
      return !amount;
    case TransactionType.INCOME:
      return !amount || !description || !category;
    case TransactionType.EXPENSE:
      return !amount || !description || !category;
  }
};
const getTitle = (type: TransactionType) => {
  switch (type) {
    case TransactionType.ADD_BALANCE:
      return 'Add Balance';
    case TransactionType.INCOME:
      return 'Add Income';
    case TransactionType.EXPENSE:
      return 'Add Expense';
    default:
      return '';
  }
};

const getStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
      backgroundColor: theme.surface,
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      padding: 24,
      shadowColor: theme.shadow,
      shadowOffset: {width: 0, height: -2},
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 5,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 24,
    },
    title: {
      fontSize: 20,
      fontWeight: '600',
      color: theme.textPrimary,
    },
    form: {
      gap: 16,
    },
    inputContainer: {
      gap: 8,
    },
    label: {
      fontSize: 14,
      color: theme.textSecondary,
    },
    input: {
      backgroundColor: theme.input,
      borderRadius: 12,
      padding: 16,
      fontSize: 16,
      color: theme.textPrimary,
      borderWidth: 1,
      borderColor: theme.border,
    },
    submitButton: {
      backgroundColor: theme.primary,
      borderRadius: 12,
      padding: 16,
      alignItems: 'center',
      marginTop: 8,
    },
    submitButtonText: {
      color: theme.textOnPrimary,
      fontSize: 16,
      fontWeight: '600',
    },
    disabled: {
      opacity: 0.6,
    },
  });
