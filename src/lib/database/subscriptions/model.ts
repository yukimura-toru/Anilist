import { model } from 'mongoose';
import { subscriptionSchema } from './schema';

export const Subscription = model('User', subscriptionSchema);
