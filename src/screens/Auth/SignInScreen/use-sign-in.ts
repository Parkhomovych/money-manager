import {useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {signIn} from '../../../store/AuthSlice/thunks';
import {useAppDispatch} from '../../../store';

const defaultValues: SignInFormData = {
  email: '',
  password: '',
};

export const useSignIn = () => {
  const dispatch = useAppDispatch();

  const form = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues,
  });

  const onSubmit = async (data: SignInFormData) => {
    console.log(data);
    try {
      await dispatch(signIn(data));
    } catch (error) {
      console.log(error);
    }
  };

  return {form, onSubmit};
};

const signInSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email format'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(50, 'Password is too long'),
});

export type SignInFormData = z.infer<typeof signInSchema>;
