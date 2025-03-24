import {useState} from 'react';

/**
 * @returns [value, bind, clear]
 */
export const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const onChangeText = (text: string) => setValue(text);
  const clear = () => setValue('');
  const bind = {value, onChangeText};

  return [value, bind, clear] as const;
};
