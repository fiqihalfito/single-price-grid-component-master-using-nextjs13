import { sectionThree as data } from "../constants"

export default function SectionThree() {
    return (
        <div className="p-6 md:p-10 bg-primary-cyan bg-opacity-75 text-white ">
            <h1 className="text-xl font-bold mb-4">{data.title}</h1>
            <ul>
                {data.benefits.map((item, i) =>
                    <li key={i} className="text-neutral-lightGray/75">{item}</li>
                )}
            </ul>
        </div>
    )
}