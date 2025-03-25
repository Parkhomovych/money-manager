import {useState} from 'react';

/**
 * @returns [value, bind, clear]
 */
export const useInput = <T>(initialValue: T) => {
  const [value, setValue] = useState<T>(initialValue);

  const onChangeText = (text: string) => setValue(text as T);
  const clear = () => setValue(initialValue);
  const bind = {value, onChangeText};

  return [value, bind, clear] as const;
};
