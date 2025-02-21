export interface NotificationProps {
  type: string;
  announcementId?: string;
  title?: string;
  status?: string;
  order_number?: string;
  details: string;
}

export const notification: NotificationProps[] = [
  // {
  //   type: "delivery",
  //   order_number: "12267880",
  //   status: "Arriving Today",
  //   details:
  //     "Samuel Enikhan (09030383868) is delivering your order today from 12pm to 3pm.",
  // },
  // {
  //   type: "announcement",
  //   announcementId: "1",
  //   title: "Updates from DOAK",
  //   details:
  //     "Hey Gbemisola, Doak is having a black Friday week, join us on June 14th and be one of our lucky customers thi..",
  // },
  // {
  //   type: "failed-delivery",
  //   status: "Failed Delivery",
  //   order_number: "12267880",
  //   details:
  //     "Samuel Enikhan (09030383868) could not reach you to deliver your drinks.",
  // },
  // {
  //   type: "cancelled-delivery",
  //   status: "Cancelled Delivery",
  //   order_number: "12267880",
  //   details: "Your order has been cancelled as requested.",
  // },
  // {
  //   type: "successful-delivery",
  //   status: "Deliveryed Successful",
  //   order_number: "12267880",
  //   details:
  //     "Your order has been delivered successfully. Thank you for trusting DOAK!",
  // },
  // {
  //   type: "invalid-address",
  //   status: "Invalid Address",
  //   order_number: "12267880",
  //   details:
  //     "DOAK services could not identify your address. Please provide a valid address to order.",
  // },
  // {
  //   type: "shipped",
  //   status: "Shipped",
  //   order_number: "12267880",
  //   details:
  //     "Your order is on the way. Arrival falls between Fri 19th Mar - Tue 22nd Mar.",
  // },
];
