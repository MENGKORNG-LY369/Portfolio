import { AcademicCapIcon, BookOpenIcon } from "@heroicons/react/24/solid"

export default function Education() {
    const certificates = [
        { id: 1, school: "Hun Sen Peamchi kong", name: "Hight School Certificate" , image: BookOpenIcon, description: ""  },
        { id: 2, school: "Passerelles Numeriques Cambodia", name: "Associate Degree", image: AcademicCapIcon, description: "" },
    ]
  return (
    <div className="py-10">
        <div className="flex gap-5 xl:flex-row sm:flex-col">
            {certificates.map(certificate => (
                <div key={certificate.id} className="flex gap-4 xl:mx-auto sm:mx-0">
                    <div className="rounded-lg bg-[#FFEF5C] w-9 h-9 flex justify-center items-center">
                        {<certificate.image className="w-7 "/>}
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-[20px]">{certificate.name}</h2>
                        <span className="text-slate-500 font-light">{certificate.school}</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
