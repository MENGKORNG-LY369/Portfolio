import { AcademicCapIcon, BookOpenIcon } from "@heroicons/react/24/solid"

export default function Education() {
    const certificates = [
        { id: 1, school: "Hun Sen Peamchi kong", name: "Hight School Certificate" , image: BookOpenIcon, year: "2017 - 2022"  },
        { id: 2, school: "Passerelles Numeriques Cambodia", name: "Pursuing Associate Degree", image: AcademicCapIcon, year: "2022 - 2024" },
    ]
  return (
    <div className="py-10">
        <h2 className="text-2xl mb-5 font-medium text-slate-700 text-center ">Education Background</h2>
        <div className="flex gap-10 xl:flex-row sm:flex-col">
            {certificates.map(certificate => (
                <div key={certificate.id} className="flex items-center flex-1 gap-4 sm:mx-0 p-4 border-l-4 border-yellow-400 bg-yellow-50">
                    <div className="rounded-md bg-white w-9 h-9 flex justify-center items-center">
                        {<certificate.image className="w-7 text-yellow-400 "/>}
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-[20px]">{certificate.name}</h2>
                        <span className="text-slate-700">{certificate.year}</span>
                        <span className="text-slate-500 font-light">{certificate.school}</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
