export interface Voucher {
  discount: string;
  condition: number;
  code: string;
  validity: { from: string; till: string };
}

export const voucher: Voucher[] = [
  {
    discount: "20%",
    condition: 56000,
    code: "wan365xy",
    validity: { from: "10/25/2021", till: "10/24/23" },
  },
  {
    discount: "20%",
    condition: 56000,
    code: "wan365xe",
    validity: { from: "10/25/2021", till: "10/24/23" },
  },
  {
    discount: "20%",
    condition: 56000,
    code: "wan365xw",
    validity: { from: "10/25/2021", till: "10/24/23" },
  },
  {
    discount: "20%",
    condition: 56000,
    code: "wan365xc",
    validity: { from: "10/25/2021", till: "10/24/23" },
  },
];
