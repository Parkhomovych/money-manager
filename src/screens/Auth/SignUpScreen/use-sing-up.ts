import {useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {signUp} from '../../../store/AuthSlice/thunks';
import {useAppDispatch} from '../../../store';

const defaultValues: SignUpFormData = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const useSignUp = () => {
  const dispatch = useAppDispatch();

  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues,
  });

  const onSubmit = async (data: SignUpFormData) => {
    console.log(data);
    try {
      await dispatch(signUp(data));
    } catch (err) {
    } finally {
    }
  };

  return {form, onSubmit};
};

const signUpSchema = z
  .object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().min(1, 'Email is required').email('Invalid email format'),
    password: z
      .string()
      .min(6, 'Password must be at least 6 characters')
      .max(50, 'Password is too long'),
    confirmPassword: z.string().min(1, 'Confirm password is required'),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type SignUpFormData = z.infer<typeof signUpSchema>;
