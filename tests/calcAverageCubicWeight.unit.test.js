const calcAverageCubicWeight = require("../calcAverageCubicWeight");

const mockedApiCall = () => {
  const response = {
    objects: [
      {
        category: "Gadgets",
        title: "10 Pack Family Car Sticker Decals",
        weight: 120,
        size: {
          width: 15,
          length: 13,
          height: 1
        }
      },
      {
        category: "Air Conditioners",
        title: "Window Seal for Portable Air Conditioner Outlets",
        weight: 235,
        size: {
          width: 26,
          length: 26,
          height: 5
        }
      },
      {
        category: "Batteries",
        title: "10 Pack Kogan CR2032 3V Button Cell Battery",
        weight: 60,
        size: {
          width: 5.8,
          length: 19,
          height: 0.3
        }
      },
      {
        category: "Cables & Adapters",
        title: "3 Pack Apple MFI Certified Lightning to USB Cable (3m)",
        weight: 90,
        size: {
          width: 10,
          length: 20,
          height: 3
        }
      },
      {
        category: "Air Conditioners",
        title: "Kogan 10,000 BTU Portable Air Conditioner (2.9KW)",
        weight: 26200,
        size: {
          width: 49.6,
          length: 38.7,
          height: 89
        }
      }
    ],
    next: "null"
  };
  return new Promise((resolve, reject) => {
    resolve(response);
  });
};

describe("default test", () => {
  test("Test case", async () => {
    expect(
      await calcAverageCubicWeight(
        "test/api/a",
        "Air Conditioners",
        mockedApiCall
      )
    ).toBe(0);
  });
});
