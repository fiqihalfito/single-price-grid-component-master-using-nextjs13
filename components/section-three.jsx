import { sectionThree as data } from "../constants"

export default function SectionThree() {
    return (
        <div className="p-6 bg-primary-cyan bg-opacity-75 text-white rounded-b-md">
            <h1 className="text-xl font-bold mb-4">{data.title}</h1>
            <ul>
                {data.benefits.map((item, i) =>
                    <li key={i} className="text-neutral-lightGray">{item}</li>
                )}
            </ul>
        </div>
    )
}