const suma = require('./suma');

test('sumar 2 + 3 debe dar 5', () => {
    expect(suma(2, 3)).toBe(5);
});