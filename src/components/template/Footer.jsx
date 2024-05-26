export default function Footer() {
  const sammary = [
    { id: 1, title: 'About', subtitle: ['Hello world ', ' Hello world', 'H ello world'] },
    { id: 2, title: 'Work', subtitle: ['Hello worl d', 'Hel2lo wo rld', 'Hell o world'] },
    { id: 3, title: 'Contact', subtitle: ['Hello wo rld', 'Hell o w orld', 'Hello world'] }
  ];
  return (
    <footer className="flex gap-10 xl:px-20 lg:px-10 md:px-6 px-3 py-7 bg-slate-900 text-white">
      <div className="">
        <h3 className="text-xl font-semibold">Mengkorng Ly</h3>
        <a className="text-slate-200 font-light" target="_blank" href="https://mengkorng.ly@student.passerellesnumeriques.org">mengkorng.ly@student.passerellesnumeriques.org</a>
        <p className="text-slate-200 font-light">087 86 1976</p>
      </div>
      <div className="flex-1 flex justify-between">
        {sammary.map(sam => (
          <div className="" key={sam.id}>
            <h4 className="text-lg font-semibold">{sam.title}</h4>
            <ul className="list-disc list-inside font-light text-slate-400">
              {sam.subtitle.map(sub => (
                <li key={sub}>{sub}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  )
}
