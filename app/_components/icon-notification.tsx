import Image from "next/image";

interface IProps {
  icon: string;
  notification: boolean;
}
export default function IconNotification({ icon, notification }: IProps) {
  return (
    <div className="relative w-7 h-7 cursor-pointer">
      <Image src={icon} alt="icon" fill />
      {notification && (
        <span className="w-[10px] h-[10px] bg-black rounded-full absolute top-0 right-0" />
      )}
    </div>
  );
}
