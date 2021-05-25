const unroll = require("./unroll");

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

});


describe("Test unroll functionality", function () {
  const grid = [
    [0, 1, 2],
    [7, 8, 3],
    [6, 5, 4]
  ]
  const nums = unroll(grid)
  test("Left", function () {
    expect(nums[2]).toBe(2)
  })
  test("Down", function() {
    expect(nums[4]).toBe(4)
  })
  test("right", function () {
    expect(nums[5]).toBe(5)
  })
  test("up", function () {
    expect(nums[7]).toBe(7)
  })
  test("middle", function () {
    expect(nums[8]).toBe(8)
  })
  test("multiple loops work", function () {
    const grid = [
      [1, 2, 3, 4, 5],
      [16, 17, 18, 19, 6],
      [15, 24, 25, 20, 7],
      [14, 23, 22, 21, 8],
      [13, 12, 11, 10, 9]
    ];
    const nums = unroll(grid);
    expect(nums[23]).toBe(24)
  })
});

describe("Returns undefined on invalid input", function () {
  test("no array", function () {
    expect(unroll([])).toBeUndefined();
  })
  test("not a square array", function () {
    expect(unroll[[1, 2], [1]]).toBeUndefined();
  })
})

