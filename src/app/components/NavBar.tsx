import Link from "next/link";

export default function NavBar() {
    return (
        <div className="navbar bg-transparent px-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#1f2937"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href="/" className="text-pink-700 font-medium">Inicio</a></li>
                        <li><a href="#about" className="text-pink-700 font-medium">Sobre mi</a></li>
                        <li><a href="#skills" className="text-pink-700 font-medium">Skills</a></li>
                        <li><a href="#portfolio" className="text-pink-700 font-medium">Portfolio</a></li>
                        <li><a href="#contact" className="text-pink-700 font-medium">Contacto</a></li>
                    </ul>
                </div>
                <Link href="/" className="text-lg font-semibold text-gray-800 hover:bg-transparent">Valentina.</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 items-center">
                    <li><a href="/" className="font-medium text-gray-800">Inicio</a></li>
                    <li><a href="#about" className="font-medium text-gray-800">Sobre mi</a></li>
                    <li><a href="#skills" className="font-medium text-gray-800">Skills</a></li>
                    <li><a href="#portfolio" className="font-medium text-gray-800">Portfolio</a></li>
                    <a href="#contact" className="btn border-2 border-pink-100 btn-sm bg-pink-100 font-bold text-pink-600 rounded-full hover:bg-transparent hover:text-pink-100 hover:border-pink-100">Contáctame</a>
                </ul>
            </div>
        </div>
    )
}