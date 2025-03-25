import {isDisabledButton} from './helpers';
import {useInput} from '../../../../../hooks';
import {Categories, TransactionType} from '../../../../../store';

export const useModalTransaction = (
  type: TransactionType,
  onSubmit: (data: {amount: number; description: string; category: Categories}) => void,
  onClose: () => void,
) => {
  const [amount, amountBind, clearAmount] = useInput('');
  const [description, descriptionBind, clearDescription] = useInput('');
  const [category, categoryBind, clearCategory] = useInput<Categories | undefined>(undefined);
  const isDisabled = isDisabledButton(type, amount, description, category);

  const handleSubmit = () => {
    if (isDisabled || !category) return;

    onSubmit({amount: parseFloat(amount), description, category});
    clearAmount();
    clearDescription();
    clearCategory();
    onClose();
  };
  return {
    amount,
    amountBind,
    description,
    descriptionBind,
    category,
    categoryBind,
    isDisabled,
    handleSubmit,
  };
};
