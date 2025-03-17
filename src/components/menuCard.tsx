import { MenuCardProps } from "@/type";

export const HeaderCard = (props: MenuCardProps) => {
    const { title, Logo, onClick } = props;

    return (
        <div className="flex gap-2.5 rounded-full px-6 h-[40px] justify-center items-center w-[165px] cursor-pointer bg-red-400" onClick={onClick}>
            <Logo />
            <p className="font-medium leading-5 text-sm">{title}</p>
        </div>
    )
}