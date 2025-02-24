import FoodMenuLogo from "@/assets/svg/food_menu_logo"
import Logo from "@/assets/svg/logo"
import OrderLogo from "@/assets/svg/order_logo"
import SettingLogo from "@/assets/svg/setting_logo"
import { HeaderCard } from "./menuCard"
import Link from "next/link"

export const SideMenu = () => {

    return (
        <div className="h-screen w-[205px] py-9 px-5 flex flex-col gap-10 bg-[#FFF] ">
            <Link href={"/"} className="flex gap-2.5">
                <Logo />
                <div className="flex flex-col ">
                    <p className="text-lg font-semibold">NomNom</p>
                    <p className="text-[#71717A] text-xs font-normal leading-4">Swift delivery</p>
                </div>
            </Link>
            <div className="flex flex-col gap-6">
                <HeaderCard title="Food menu" Logo={FoodMenuLogo} />
                <HeaderCard title="Orders" Logo={OrderLogo} />
                <HeaderCard title="Settings" Logo={SettingLogo} />
            </div>
        </div>
    )
}