export default function ContactDetails() {
  return (
    <div className="flex flex-col items-center lg:items-stretch gap-10 max-w-[152px]">
      {contactDetails.map((item: IProps, index: number) => (
        <div key={index} className="flex flex-col gap-1">
          <p className="font-bold text-center lg:text-left">{item.title}</p>

          <div className="flex flex-col">
            {item.info.map((info: string, idx: number) => (
              <p key={idx} className="text-primary text-center lg:text-left">
                {info}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const contactDetails: IProps[] = [
  { title: "CALL US:", info: ["+234 816 171 8537", "+234 903 038 3868"] },
  { title: "EMAIL US:", info: ["hr@doakservices.com"] },
  { title: "ADDRESS:", info: ["No 10, Temilanan street, Bodija, Oyo State"] },
];

interface IProps {
  title: string;
  info: string[];
}
