import { sectionTwo as data } from "../constants"

export default function SectionTwo() {
    return (
        <div className="p-6 bg-primary-cyan text-neutral-lightGray">
            <h1 className="text-xl font-bold mb-4">{data.title}</h1>
            <div className="flex items-center mb-2">
                <h1 className="text-4xl font-bold ">{data.price}</h1>
                <span className="ml-4 opacity-60 text-lg">{data.time}</span>
            </div>
            <p className="mb-8">{data.info}</p>
            <button className="p-4 text-xl  bg-primary-brightYellow w-full rounded-md text-white shadow-lg">Sign Up</button>
        </div>
    )
}