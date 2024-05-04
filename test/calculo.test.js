const { soma, sub, mult, div } = require('../calculo');

test('Soma de dois números', () => {
    expect(soma(1, 2)).toBe(3);
});

test('Subtração de dois números', () => {
    expect(sub(3, 2)).toBe(1);
});

test('Multiplicação de dois números', () => {
    expect(mult(2, 3)).toBe(6);
});

test('Divisão de dois números', () => {
    expect(div(6, 2)).toBe(3);
});
