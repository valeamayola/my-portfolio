import InfoProjects from "./InfoProjects";

export default function Portfolio() {
    return (
        <section id="portfolio">
            <div className="bg-pink-500 p-10 md:p-20 items-start">
                <h1 className="text-3xl md:text-5xl font-bold text-pink-100">Portfolio</h1>
            </div>
            <div className="bg-pink-300 pb-10 md:pb-0 px-5 md:px-20 flex flex-col md:flex-row align-center justify-center items-center">
                <img className="flex-1 w-[40rem]" src="/mockup-plants.png" />
                <InfoProjects
                    title="LANDING PAGE SOBRE PLANTAS"
                    description="Creado con Vite, React, JavaScript y TailwindCSS con diseño responsivo."
                    hrefUrl="https://plants-gilt.vercel.app/"
                    hrefGitHub="https://github.com/valeamayola/plants"
                />
            </div>
            <div className="bg-pink-100 pt-10 md:pt-0 px-5 md:px-20 flex flex-col md:flex-row align-center justify-center items-center">
                <InfoProjects
                    title="WEBSITE DE UNA EMPRESA DE LOGÍSTICA"
                    description="Creado con NextJS, React, TypeScript y TailwindCSS con diseño responsivo."
                    hrefUrl="https://logistic-web-flax.vercel.app/"
                    hrefGitHub="https://github.com/valeamayola/logistic-web"
                />
                <img className="flex-1 w-[40rem]" src="/mockup-logistic.png" />
            </div>
        </section>
    )
}