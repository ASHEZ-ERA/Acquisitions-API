import {z} from 'zod';

export const signUpSchema = z.object({ 
  name: z.string().min(1, 'Name is required').max(100, 'Name must be less than 100 characters').trim(),
  email: z.string().email('Invalid email address').max(255, 'Email must be less than 255 characters').trim(),
  password: z.string().min(6, 'Password must be at least 6 characters long').max(100, 'Password must be less than 100 characters'),
  role: z.enum(['admin', 'user']).default('user')
});

export const signInSchema = z.object({
  email: z.string().email('Invalid email address').max(255, 'Email must be less than 255 characters').trim(),
  password: z.string().min(6, 'Password must be at least 6 characters long').max(100, 'Password must be less than 100 characters'),
});