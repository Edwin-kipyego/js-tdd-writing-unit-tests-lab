
const { isPalindrome } = require('../utils');

describe('isPalindrome', () => {
  it('returns true for a simple palindrome', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  it('returns false for a non-palindrome', () => {
    expect(isPalindrome('car')).toBe(false);
  });

  it('is case insensitive', () => {
    expect(isPalindrome('Mom')).toBe(true);
  });

  it('returns false for an empty string', () => {
    expect(isPalindrome('')).toBe(false);
  });

  it('throws an error for words with non-alphabetic characters', () => {
    expect(() => isPalindrome('mom!')).toThrow('Input must contain only alphabetic characters.');
  });

  it('throws an error for non-string input', () => {
    expect(() => isPalindrome(123)).toThrow('Input must be a string.');
  });
});
