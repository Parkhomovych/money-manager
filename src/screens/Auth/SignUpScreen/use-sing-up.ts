import {z} from 'zod';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {signUp, useAppDispatch} from '../../../store';

const signUpSchema = z
  .object({
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
const defaultValues: SignUpFormData = {email: '', password: '', confirmPassword: ''};

export const useSignUp = () => {
  const dispatch = useAppDispatch();

  const form = useForm<SignUpFormData>({resolver: zodResolver(signUpSchema), defaultValues});

  const onSubmit = async (data: SignUpFormData) => {
    console.log(data);
    try {
      await dispatch(signUp(data)).unwrap();
    } catch (err) {
      console.log('error submit sign up', err);
      form.setError('root', {message: err as string});
    }
  };

  return {form, onSubmit};
};
