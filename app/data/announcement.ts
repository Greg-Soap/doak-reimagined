export interface Announcement {
  id: string;
  image: string;
  title: string;
  points: string[];
}

export const announcement: Announcement[] = [
  {
    id: "1",
    image: "/assets/account/announcement.png",
    title: "Updates from DOAK",
    points: [
      "Hey Gbemisola, Doak is having a black Friday week, join us on June 14th and be one of our lucky customers this festive season. To participate in our winning activities, visit our walk in store and say the Easter magic word.",
      "Hey Gbemisola, Doak is having a black Friday week, join us on June 14th and be one of our lucky customers this festive season. To participate in our winning activities, visit our walk in store and say the Easter magic word.",
    ],
  },
];
