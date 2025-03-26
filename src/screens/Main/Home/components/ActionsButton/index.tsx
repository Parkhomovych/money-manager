import {TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '../../../../../theme/use-theme';
import {getStyles} from './styles';

type Props = {
  openIncomeModal: () => void;
  openExpenseModal: () => void;
};

export const ActionsButton = ({openIncomeModal, openExpenseModal}: Props) => {
  const {theme} = useTheme();
  const styles = getStyles(theme);
  return (
    <View style={styles.quickActions}>
      <TouchableOpacity style={styles.actionButton} onPress={openExpenseModal}>
        <View style={styles.actionIconContainer}>
          <Icon name="minus-circle" size={28} color={theme.primary} />
        </View>
        <Text style={styles.actionText}>Expenses</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton} onPress={openIncomeModal}>
        <View style={styles.actionIconContainer}>
          <Icon name="plus-circle" size={28} color={theme.primary} />
        </View>
        <Text style={styles.actionText}>Income</Text>
      </TouchableOpacity>
    </View>
  );
};
