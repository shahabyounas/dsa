const { boatsToSavePeople } = require("./boatsToSavePeople");

describe("boatsToSavePeople", () => {
  test("It should return the maximum number of boats", () => {
    const people = [3,5,3,4]
    const limit = 5

    expect(boatsToSavePeople(people, limit)).toEqual(4);
    expect(boatsToSavePeople([3,2,2,1], 3)).toEqual(3);
  });

});
