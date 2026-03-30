const { soma, subtrai } = require('../src/calculator');

test('soma de 2 + 3 é 5', () => {
  expect(soma(2, 3)).toBe(5);
});

test('subtração de 5 - 2 é 3', () => {
  expect(subtrai(5, 2)).toBe(3);
});
