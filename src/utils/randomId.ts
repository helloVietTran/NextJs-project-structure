import { customAlphabet } from 'nanoid';

// Chỉ định tập ký tự gồm a-z và 0-9
const generateRandomId = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 6);

export const randomId = generateRandomId(); // Ví dụ: a3b9d0
