import SectionOne from "../components/section-one";
import SectionThree from "../components/section-three";
import SectionTwo from "../components/section-two";


export default function Home() {
  return (
    <div className="font-karla h-screen flex justify-center items-center bg-neutral-lightGray px-8 md:p-0">
      <div className="grid grid-flow-row md:grid-cols-2 md:w-1/2 rounded-md overflow-hidden shadow-md md:shadow-2xl" id="wrapper">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </div>
    </div>
  )
}
