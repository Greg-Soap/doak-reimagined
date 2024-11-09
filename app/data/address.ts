export const street: Street[] = [
  {
    value: "option-one",
    name: "Omonaluse Ohkuehne",
    address: "No 14, 19th street BDPA, Ugbowo",
    city: "Benin City",
    state: "Oyo State",
    number: 2348180281937,
  },
  {
    value: "option-two",
    name: "Chukwufumnanya Ochei",
    address: "No 5, Emerald street Suncity Estate, Ikate",
    city: "Lekki-Ajah",
    state: "Lagos State",
    number: 2349030383868,
  },
];

export interface Street {
  value: string;
  name: string;
  address: string;
  number: number;
  city: string;
  state: string;
}
