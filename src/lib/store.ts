import { writable } from 'svelte/store';
import type { PromoState } from './types';

export const promoState = writable<PromoState>('hidden');
