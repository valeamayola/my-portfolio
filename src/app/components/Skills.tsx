export default function Skills() {
    return (
        <section id="skills" className="bg-pink-100 p-10 md:p-20 items-start">
            <h1 className="text-3xl md:text-5xl font-bold text-pink-600">Skills</h1>
            <div className="flex flex-col md:flex-row mt-5">
                <div className="flex flex-wrap md:flex-col mr-0 md:mr-52">
                <h2 className="font-bold text-xl md:text-2xl text-gray-800">Soft Skills</h2>
                <ul className="mt-2 flex flex-wrap md:flex-col">
                    <li className="my-2 text-lg font-medium">Comunicación afectiva</li>
                    <li className="my-2 text-lg font-medium">Trabajo en equipo</li>
                    <li className="my-2 text-lg font-medium">Capacidad de aprendizaje</li>
                    <li className="my-2 text-lg font-medium">Resolución de problemas</li>
                    <li className="my-2 text-lg font-medium">Atención al detalle</li>
                </ul>
                </div>
                <div className="flex flex-col mt-5 md:mt-0">
                <h2 className="font-bold text-xl md:text-2xl text-gray-800">Skills</h2>
                <div className="flex flex-row">
                <ul className="flex flex-col">
                    <li className="my-2 text-lg font-medium">HTML</li>
                    <li className="my-2 text-lg font-medium">CSS / Tailwind / Bootstrap</li>
                    <li className="my-2 text-lg font-medium">JavaScript</li>
                    <li className="my-2 text-lg font-medium">TypeScript</li>
                    <li className="my-2 text-lg font-medium">React</li>
                </ul>
                <ul className="flex flex-col ml-5 md:ml-20">
                    <li className="my-2 text-lg font-medium">NextJS</li>
                    <li className="my-2 text-lg font-medium">Git/GitHub</li>
                    <li className="my-2 text-lg font-medium">Figma</li>
                    <li className="my-2 text-lg font-medium">Jira</li>
                    <li className="my-2 text-lg font-medium">Scrum</li>
                </ul>
                </div>
                </div>
            </div>
        </section>
    )
}