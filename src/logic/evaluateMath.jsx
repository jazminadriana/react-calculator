import { evaluate } from 'mathjs';

export const evaluateMath = (input) => {
  if (!input) return '';
  try {
    return String(evaluate(input));
  } catch (error) {
    return 'Error';
  }
};