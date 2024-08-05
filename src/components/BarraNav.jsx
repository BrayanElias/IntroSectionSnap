
const BarraNav = () => {
    return (
        <>
            <div className="flex gap-12 pl-5">
                <img className="pt-5 md:pt-0" src="/public/images/logo.svg" alt="Logo Snap" />
                <div className="hidden md:flex">
                    <ul className="flex gap-9">
                        <li className="flex items-center gap-1">
                            Features<img className="pt-1" src="/public/images/icon-arrow-down.svg" alt="" />
                        </li>
                        <li className="flex items-center gap-1">
                            Company<img className="pt-1" src="/public/images/icon-arrow-down.svg" alt="" />
                        </li>
                        <li>Careers</li>
                        <li>About</li>
                    </ul>
                </div>
            </div>
            <div className="gap-8 p-2 pr-10 hidden md:flex">
                <button>Login</button>
                <button className="border border-black rounded-2xl px-5 py-2">Register</button>
            </div>
            <div className="md:hidden pt-3">
                <img className="w-12" src="/src/images/icon-menu.svg" alt="" />
            </div>
        </>
    )
}

export default BarraNav
