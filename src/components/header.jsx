'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Foto2",
        href: "/foto2",
    },
    {
        title: "Foto3",
        href: "/foto3",
    },
    {
        title: "Foto4",
        href: "/foto4",
    },
]


const Header = () => {
    const pathName = usePathname()

    return(
        <div className="w-full flex justify-center items-center gap-2 h-16 bg-pink-300">
            {links.map(link => (
                <li className="text-white" key={link.title}>
                    <Link className={`bg-white p-2 rounded-lg text-black ${pathName === link.href ? "bg-yellow-400 font-bold text-white" : ""}`} href={link.href}>{link.title} </Link>
                </li>
            ))}
        </div>
    )
}


export default Header;