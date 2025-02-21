import Logo from "@/assets/svg/logo"

export const SideMenu = () => {


    return (
        <div>
            <div className="flex gap-2.5">
                <Logo/>
                <div className="flex flex-col ">
                    <p className="text-lg font-semibold">NomNom</p>
                    <p className="text-[#71717A] text-xs font-normal leading-4">Swift delivery</p>
                </div>
            </div>
            <div></div>
        </div>
    )
}