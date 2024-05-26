import SubmitBtn from "../components/button/SubmitBtn";

export default function Contact() {
  return (
    <section className="flex lg:p-10 p-5 items-center justify-center">
      <form action="/" id="form-sign-in" className="flex flex-col py-5 xl:px-32 lg:px-14 md:px-10 px-5 rounded-md mx-auto bg-yellow-50 ">
        <h2 className="font-medium text-2xl py-4 text-yellow-500">Register Your Information</h2>
        <div className="flex gap-5 py-2 ">
          <div className="grid">
            <label className="cursor-pointer text-slate-600" htmlFor="firstName">First Name</label>
            <input className="border px-2 py-1 rounded-sm font-light outline-1 outline-offset-1 outline-yellow-400/30 transition-all" type="text" placeholder="Your first name" id="firstName" required />
          </div>
          <div className="grid">
            <label className="cursor-pointer text-slate-600" htmlFor="lastName">last Name</label>
            <input className="border px-2 py-1 rounded-sm font-light outline-1 outline-offset-1 outline-yellow-400/30 transition-all" type="text" placeholder="Your last name" id="lastName" />
          </div>
        </div>
        <div className="flex gap-5 py-2">
          <div className="grid">
            <label className="cursor-pointer text-slate-600" htmlFor="email">Email</label>
            <input className="border px-2 py-1 rounded-sm font-light outline-1 outline-offset-1 outline-yellow-400/30 transition-all" type="email" placeholder="Your email" id="email" />
          </div>
          <div className="grid">
            <label className="cursor-pointer text-slate-600" htmlFor="phone">Phone</label>
            <input className="border px-2 py-1 rounded-sm font-light outline-1 outline-offset-1 outline-yellow-400/30 transition-all" type="tel" placeholder="Your number phone" id="phone" />
          </div>
        </div>
        <div className="flex gap-5 py-5">
          <SubmitBtn 
            btnType={'submit'}
            text={'Submit'}
            className={'px-7 rounded-sm'}
          />
        </div>
      </form>
    </section>
  )
}
