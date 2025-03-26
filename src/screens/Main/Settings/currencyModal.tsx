import {View, Text, TouchableOpacity, Modal, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CurrencyValue} from '../../../store';
import {getStyles} from './styles';
import {useTheme} from '../../../theme/use-theme';

type Props = {
  isModalVisible: boolean;
  setFalse: () => void;
  handleUpdateCurrency: (currency: CurrencyValue) => void;
  selectedCurrency: CurrencyValue;
};

export const CurrencyModal = (props: Props) => {
  const {isModalVisible, setFalse, handleUpdateCurrency, selectedCurrency} = props;
  const {theme} = useTheme();
  const styles = getStyles(theme);

  return (
    <Modal
      visible={isModalVisible}
      animationType="fade"
      onRequestClose={setFalse}
      transparent={true}>
      <View style={styles.modalContainer} onTouchStart={setFalse}>
        <View style={styles.modalContent} onTouchStart={e => e.stopPropagation()}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Select Currency</Text>
            <TouchableOpacity onPress={setFalse}>
              <Icon name="close" size={32} color={theme.textSecondary} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={currencyOptions}
            keyExtractor={item => item.value}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.modalItem}
                onPress={() => {
                  handleUpdateCurrency(item.value);
                  setFalse();
                }}>
                <Text
                  style={[
                    styles.modalItemText,
                    item.value === selectedCurrency && styles.selectedCurrency,
                  ]}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </Modal>
  );
};

const currencyOptions: {label: string; value: CurrencyValue}[] = [
  {label: 'USD', value: 'USD'},
  {label: 'EUR', value: 'EUR'},
  {label: 'UAH', value: 'UAH'},
  {label: 'GBP', value: 'GBP'},
];
