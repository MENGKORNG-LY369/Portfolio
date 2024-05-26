
export default function Reference() {
    const references = [
        {id: 1, name: "Rady Y", position: "IT Coordinator", phone: "012 251 803", email: <a target="_blank" href="rady.y@passerellesnumeriques.org">rady.y@passerellesnumeriques.org</a>},
        {id: 2, name: "Sokhom Hean", position: "English & Professional Life Coordinator", phone: "012 298 253", email: <a target="_blank" href="sokhom.hean@passerellesnumeriques.org">sokhom.hean@passerellesnumeriques.org</a>}
    ];

    return (
        <section className="py-10">
            <h2 className="text-2xl text-slate-700 text-center font-medium mb-5">References</h2>
            <div className="flex gap-10 xl:flex-row md:flex-row flex-col">
                {references.map(ref => (
                    <div className="flex-1 p-4 rounded-md  hover:bg-yellow-50 border hover:border-yellow-50 transition-all" key={ref.id}>
                        <h4 className="text-lg font-semibold">{ref.name}</h4>
                        <h5 className="text-lg font-light mb-2">{ref.position}</h5>
                        <span>Phone: {ref.phone}</span><br />
                        <span>Email: <span className="underline text-slate-800">{ref.email}</span></span>
                    </div>
                ))}
            </div>
        </section>
    )
}
