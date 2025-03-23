import {useState} from 'react';

/**
 * @returns [value, toggle, setTrue, setFalse]
 */
export const useBoolean = (initialValue: boolean) => {
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue(prev => !prev);
  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);

  return [value, toggle, setTrue, setFalse] as const;
};
