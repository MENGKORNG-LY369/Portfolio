import Experience from "../components/Experience";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
      <div className="px-12">
        <Header />
        <Experience />
      </div>
    </>
  )
}