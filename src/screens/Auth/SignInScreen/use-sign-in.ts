import {useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {signIn, useAppDispatch} from '../../../store';

const signInSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email format'),
  password: z.string().min(1, 'Password is required'),
});

export type SignInFormData = z.infer<typeof signInSchema>;
const defaultValues: SignInFormData = {email: '', password: ''};

export const useSignIn = () => {
  const dispatch = useAppDispatch();

  const form = useForm<SignInFormData>({resolver: zodResolver(signInSchema), defaultValues});

  const onSubmit = async (data: SignInFormData) => {
    try {
      await dispatch(signIn(data)).unwrap();
    } catch (err) {
      form.setError('root', {message: err as string});
      console.log('error submit sign in', err);
    }
  };

  return {form, onSubmit};
};

// vlad@gmail.com
