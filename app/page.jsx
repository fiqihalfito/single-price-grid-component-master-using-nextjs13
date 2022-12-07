import SectionOne from "../components/section-one";
import SectionThree from "../components/section-three";
import SectionTwo from "../components/section-two";


export default function Home() {
  return (
    <div className="font-karla h-screen flex flex-col justify-center bg-neutral-lightGray px-8">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  )
}
