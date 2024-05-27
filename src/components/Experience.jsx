export default function Experience() {
    const experiences = [
        {
            id: 4, name: "PHP Project", school: "Passerelles Numeriques Cambodia", date: "02/2024 - 02/2024",
            description: [
                { id: 1, list: <span>Create a <b>Foodpanda</b> website by using <b>PHP</b>, <b>Bootstrap</b>, <b>JavaScript</b>, Database(<b>MySQL</b>).</span> },
                { id: 2, list: <span>Worke as a team that had five members.</span> },
                { id: 3, list: <span>Responsible as a <b>team leader</b>.</span> },
                { id: 4, list: <span>Version control: <b>GitHub</b>, <b>Jira</b></span> },
                { id: 5, list: <span>Source code: <a target="_blank" className="text-slate-600 underline" href="https://github.com/LY-MENGKORNG/VC-1-GROUP8-Foodpanda">https://github.com/LY-MENGKORNG/VC-1-GROUP8-Foodpanda</a></span> },
            ]
        },
        {
            id: 3, name: "JavaScript Project", school: "Passerelles Numeriques Cambodia", date: "12/2023 - 01/2024",
            description: [
                { id: 1, list: <span>Create a Point of Sale System (<b>POS</b>) by using <b>HTML</b>, <b>SASS</b>, and <b>JavaScript</b>.</span> },
                { id: 2, list: <span>Worke as a team that had three members.</span> },
                { id: 3, list: <span>Responsible as a <b>team leader</b>.</span> },
                { id: 4, list: <span>Version control: <b>GitHub</b></span> },
                { id: 5, list: <span>Website: <a target="_blank" className="text-slate-600 underline" href="https://pos-system-b2.vercel.app/">https://pos-system-b2.vercel.app/</a></span> },
            ]
        },
        {
            id: 2, name: "Python Project (Platformer Game)", school: "Passerelles Numeriques Cambodia", date: "10/2023 - 11/2023",
            description: [
                { id: 1, list: <span>Create a Platformer Game by using Python(<b>Tkinter</b>).</span> },
                { id: 2, list: <span>Worke as a team that had three members.</span> },
                { id: 3, list: <span>Responsible as a <b>team leader</b>.</span> },
                { id: 4, list: <span>Version control: <b>GitHub</b></span> },
                { id: 5, list: <span>Source code: <a target="_blank" className="text-slate-600 underline" href="https://github.com/LY-MENGKORNG/Project_Frog-eat-Flies_C5">https://github.com/LY-MENGKORNG/Project_Frog-eat-Flies_C5</a></span> },
            ]
        },
        {
            id: 1, name: "Web Design Project", school: "Passerelles Numeriques Cambodia", date: "09/2023 - 10/2023",
            description: [
                { id: 1, list: <span>Create a static website about <b>Pet Shop </b>by using <b>HTML</b>, <b>CSS</b>, and <b>Sass</b>.</span> },
                { id: 2, list: <span>Worke as a team that had three members.</span> },
                { id: 3, list: <span>Responsible as a <b>team leader</b>.</span> },
                { id: 4, list: <span>Version control: <b>GitHub</b></span> },
                { id: 5, list: <span>Website: <a target="_blank" className="text-slate-600 underline" href="https://pet-shop-c5.vercel.app/PAGES/service.html">https://pet-shop-c5.vercel.app/PAGES/service.html</a></span> },
            ]
        },
    ];

    return (
        <section className="flex flex-col py-10">
            <h2 className="text-2xl font-medium text-slate-700 mb-3 text-center">School Project</h2>
            <div className="flex gap-10">
                {/* <div className="flex-1"></div> */}
                <div className="flex flex-grow xl:ml-[15%] flex-col justify-between border-l-4 gap-7 border-yellow-200 px-4">
                    {experiences.map(exper => (
                        <div className="flex flex-col relative" key={exper.id}>
                            <span className="w-6 h-6 rounded-[50%] flex absolute bg-yellow-400 left-[-30px] top-1">
                                <span className="flex-1 border-[5px] border-yellow-200 rounded-[50%]"></span>
                            </span>
                            <div className="flex flex-col">
                                <h3 className="font-medium text-xl text-yellow-600">{exper.name}</h3>
                                <span className="xl:absolute -left-44 top-[3px] font-light text-yellow-700">{exper.date}</span>
                            </div>
                            <span className="mb-2 text-lg font-light text-slate-500">{exper.school}</span>
                            <ul className="">
                                {exper.description.map(desc => (
                                    <li className="list-item list-disc list-inside" key={desc.id}>{desc.list}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}