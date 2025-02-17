var priceChart = {
  // D1 prices
  "D1-8.2-8.2": 6051.6,
  "D1-8.2-9.84": 7261.92,
  "D1-8.2-11.5": 8487.0,
  "D1-8.2-13.1": 9667.8,
  "D1-8.2-14.8": 10922.4,
  "D1-8.2-16.42": 12117.96,
  "D1-8.2-18.0": 13284.0,
  "D1-8.2-19.8": 14612.4,
  "D1-8.2-21.4": 15793.2,
  "D1-8.2-22.11": 16317.18,
  "D1-9.84-8.2": 7261.92,
  "D1-9.84-9.84": 8714.3,
  "D1-9.84-11.5": 10184.4,
  "D1-9.84-13.1": 11601.36,
  "D1-9.84-14.8": 13106.88,
  "D1-9.84-16.42": 14541.55,
  "D1-9.84-18.0": 15940.8,
  "D1-9.84-19.8": 17534.88,
  "D1-9.84-21.4": 18951.84,
  "D1-9.84-22.11": 19580.62,
  "D1-11.5-8.2": 8487.0,
  "D1-11.5-9.84": 10184.4,
  "D1-11.5-11.5": 11902.5,
  "D1-11.5-13.1": 13558.5,
  "D1-11.5-14.8": 15318.0,
  "D1-11.5-16.42": 16994.7,
  "D1-11.5-18.0": 18630.0,
  "D1-11.5-19.8": 20493.0,
  "D1-11.5-21.4": 22149.0,
  "D1-11.5-22.11": 22883.85,
  "D1-13.1-8.2": 9667.8,
  "D1-13.1-9.84": 11601.36,
  "D1-13.1-11.5": 13558.5,
  "D1-13.1-13.1": 15444.9,
  "D1-13.1-14.8": 17449.2,
  "D1-13.1-16.42": 19359.18,
  "D1-13.1-18.0": 21222.0,
  "D1-13.1-19.8": 23344.2,
  "D1-13.1-21.4": 25230.6,
  "D1-13.1-22.11": 26067.69,
  "D1-14.8-8.2": 10922.4,
  "D1-14.8-9.84": 13106.88,
  "D1-14.8-11.5": 15318.0,
  "D1-14.8-13.1": 17449.2,
  "D1-14.8-14.8": 19713.6,
  "D1-14.8-16.42": 21871.44,
  "D1-14.8-18.0": 23976.0,
  "D1-14.8-19.8": 26373.6,
  "D1-14.8-21.4": 28504.8,
  "D1-14.8-22.11": 29450.52,

  // D2 prices
  "D2-16.42-8.2": 12117.96,
  "D2-18.0-8.2": 13284.0,
  "D2-19.67-8.2": 14516.46,
  "D2-16.42-9.84": 14541.55,
  "D2-18.0-9.84": 15940.8,
  "D2-19.67-9.84": 17419.75,
  "D2-16.42-11.5": 16994.7,
  "D2-18.0-11.5": 18630.0,
  "D2-19.67-11.5": 20358.45,
  "D2-16.42-13.1": 19359.18,
  "D2-18.0-13.1": 21222.0,
  "D2-19.67-13.1": 23190.93,
  "D2-16.42-14.8": 21871.44,
  "D2-18.0-14.8": 23976.0,
  "D2-19.67-14.8": 26200.44,
  "D2-16.42-16.42": 24265.48,
  "D2-18.0-16.42": 26600.4,
  "D2-19.67-16.42": 29068.33,
  "D2-16.42-18.0": 26600.4,
  "D2-18.0-18.0": 29160.0,
  "D2-19.67-18.0": 31865.4,
  "D2-16.42-19.8": 29260.44,
  "D2-18.0-19.8": 32076.0,
  "D2-19.67-19.8": 35051.94,
  "D2-16.42-21.4": 31624.92,
  "D2-18.0-21.4": 34668.0,
  "D2-19.67-21.4": 37884.42,
  "D2-16.42-22.11": 32674.16,
  "D2-18.0-22.11": 35818.2,
  "D2-19.67-22.11": 39141.33,

  // D3 prices
  "D3-29.3-22.11": 58304.07,
  "D3-29.3-21.4": 56431.8,
  "D3-29.3-19.8": 52212.6,
  "D3-29.3-18.0": 47466.0,
  "D3-29.3-16.42": 43299.54,
  "D3-29.3-14.8": 39027.6,
  "D3-29.3-13.1": 34544.7,
  "D3-29.3-11.5": 30325.5,
  "D3-29.3-9.84": 25948.08,
  "D3-29.3-8.2": 21623.4,
  "D3-27.8-22.11": 55319.22,
  "D3-27.8-21.4": 53542.8,
  "D3-27.8-19.8": 49539.6,
  "D3-27.8-18.0": 45036.0,
  "D3-27.8-16.42": 41082.84,
  "D3-27.8-14.8": 37029.6,
  "D3-27.8-13.1": 32776.2,
  "D3-27.8-11.5": 28773.0,
  "D3-27.8-9.84": 24619.68,
  "D3-27.8-8.2": 20516.4,
  "D3-26.3-22.11": 52334.37,
  "D3-26.3-21.4": 50653.8,
  "D3-26.3-19.8": 46866.6,
  "D3-26.3-18.0": 42606.0,
  "D3-26.3-16.42": 38866.14,
  "D3-26.3-14.8": 35031.6,
  "D3-26.3-13.1": 31007.7,
  "D3-26.3-11.5": 27220.5,
  "D3-26.3-9.84": 23291.28,
  "D3-26.3-8.2": 19409.4,
  "D3-24.7-22.11": 49150.53,
  "D3-24.7-21.4": 47572.2,
  "D3-24.7-19.8": 44015.4,
  "D3-24.7-18.0": 40014.0,
  "D3-24.7-16.42": 36501.66,
  "D3-24.7-14.8": 32900.4,
  "D3-24.7-13.1": 29121.3,
  "D3-24.7-11.5": 25564.5,
  "D3-24.7-9.84": 21874.32,
  "D3-24.7-8.2": 18228.6,
  "D3-22.11-22.11": 43996.69,
  "D3-22.11-21.4": 42583.86,
  "D3-22.11-19.8": 39400.02,
  "D3-22.11-18.0": 35818.2,
  "D3-22.11-16.42": 32674.16,
  "D3-22.11-14.8": 29450.52,
  "D3-22.11-13.1": 26067.69,
  "D3-22.11-11.5": 22883.85,
  "D3-22.11-9.84": 19580.62,
  "D3-22.11-8.2": 16317.18,
  "D3-21.4-22.11": 42583.86,
  "D3-21.4-21.4": 41216.4,
  "D3-21.4-19.8": 38134.8,
  "D3-21.4-18.0": 34668.0,
  "D3-21.4-16.42": 31624.92,
  "D3-21.4-14.8": 28504.8,
  "D3-21.4-13.1": 25230.6,
  "D3-21.4-11.5": 22149.0,
  "D3-21.4-9.84": 18951.84,
  "D3-21.4-8.2": 15793.2,
};

var lengthOptions = {
  D1: [
    { value: "8.2", text: "8 ft 2 inch" },
    { value: "9.84", text: "9 ft 10 in" },
    { value: "11.5", text: "11 ft 6 in" },
    { value: "13.1", text: "13 ft 1 in" },
    { value: "14.8", text: "14 ft 9 in" },
  ],
  D2: [
    { value: "19.67", text: "19 ft 8 in" },
    { value: "18.0", text: "18 ft 0 in" },
    { value: "16.42", text: "16 ft 5 in" },
  ],
  D3: [
    { value: "29.3", text: "29 ft 6 in" },
    { value: "27.8", text: "27 ft 10 in" },
    { value: "26.3", text: "26 ft 3 in" },
    { value: "24.7", text: "24 ft 7 in" },
    { value: "22.11", text: "22 ft 11 in" },
    { value: "21.4", text: "21 ft 4 in" },
  ],
};

var projectionOptions = [
  { value: "22.11", text: "22 ft 11 in" },
  { value: "21.4", text: "21 ft 4 in" },
  { value: "19.8", text: "19 ft 8 in" },
  { value: "18.0", text: "18 ft 0 in" },
  { value: "16.42", text: "16 ft 5 in" },
  { value: "14.8", text: "14 ft 9 in" },
  { value: "13.1", text: "13 ft 1 in" },
  { value: "11.5", text: "11 ft 6 in" },
  { value: "9.84", text: "9 ft 10 in" },
  { value: "8.2", text: "8 ft 2 inch" },
];

var installationFeeByDesign = {
  D1: { value: "1500", text: "$1,500" },
  D2: { value: "2500", text: "$2,500" },
  D3: { value: "3500", text: "$3,500" },
};

// Screen prices based on height and width dimensions
var screenPrices = {
  "6 ft 7 inch": {
    "4 ft 11 inch": 224.0,
    "6 ft 7 inch": 271.0,
    "8 ft 2 inch": 303.0,
    "9 ft 10 inch": 348.0,
    "11 ft 5 inch": 374.0,
    "13 ft 1 inch": 415.0,
    "14 ft 9 inch": 457.0,
    "16 ft 4 inch": 499.0,
    "19 ft 8 inch": 561.0,
  },
  "8 ft 2 inch": {
    "4 ft 11 inch": 260.0,
    "6 ft 7 inch": 303.0,
    "8 ft 2 inch": 359.0,
    "9 ft 10 inch": 395.0,
    "11 ft 5 inch": 447.0,
    "13 ft 1 inch": 472.0,
    "14 ft 9 inch": 531.0,
    "16 ft 4 inch": 581.0,
    "19 ft 8 inch": 681.0,
  },
  "9 ft 10 inch": {
    "4 ft 11 inch": 311.0,
    "6 ft 7 inch": 367.0,
    "8 ft 2 inch": 438.0,
    "9 ft 10 inch": 441.0,
    "11 ft 5 inch": 549.0,
    "13 ft 1 inch": 594.0,
    "14 ft 9 inch": 658.0,
    "16 ft 4 inch": 722.0,
    "19 ft 8 inch": 850.0,
  },
  "10+ Ft ask pricing": {},
};

export {
  priceChart,
  lengthOptions,
  projectionOptions,
  installationFeeByDesign,
  screenPrices,
};
