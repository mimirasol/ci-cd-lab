const { add, subtract } = require("./calculator");

test("adds 2 whole numbers", () => {
  expect(add(1, 2)).toBe(3);
});

test("subtracts 2 whole numbers", () => {
  expect(subtract(5, 2)).toBe(3);
});

test("test floating numbers", () => {
  expect(subtract(5.5, 2.5)).toBe(3);
  expect(add(1.5, 2.5)).toBe(4);
});
