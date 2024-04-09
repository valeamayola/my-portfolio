import Link from "next/link";

export default function NavBar() {
    return (
        <div className="navbar bg-transparent px-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#fafafa"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-zinc-700 rounded-box w-52">
                        <li><a href="/" className="text-zinc-50 font-medium">Inicio</a></li>
                        <li><a href="#about" className="text-zinc-50 font-medium">Sobre mi</a></li>
                        <li><a href="#skills" className="text-zinc-50 font-medium">Skills</a></li>
                        <li><a href="#portfolio" className="text-zinc-50 font-medium">Portfolio</a></li>
                        <li><a href="#contact" className="text-zinc-50 font-medium">Contacto</a></li>
                    </ul>
                </div>
                <Link href="/" className="text-lg font-semibold text-zinc-50 hover:bg-transparent">Valentina.</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 items-center">
                    <li><a href="/" className="font-medium text-zinc-50">Inicio</a></li>
                    <li><a href="#about" className="font-medium text-zinc-50">Sobre mi</a></li>
                    <li><a href="#skills" className="font-medium text-zinc-50">Skills</a></li>
                    <li><a href="#portfolio" className="font-medium text-zinc-50">Portfolio</a></li>
                    <a href="#contact" className="btn border-2 border-violet-300 btn-sm bg-violet-300 font-bold text-violet-700 rounded-full hover:bg-transparent hover:text-violet-300 hover:border-violet-300">Contáctame</a>
                </ul>
            </div>
        </div>
    )
}
