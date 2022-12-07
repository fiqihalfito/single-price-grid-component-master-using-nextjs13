import { sectionOne as data } from '../constants'

export default function SectionOne() {
    return (
        <div className='bg-white p-6 space-y-6 rounded-t-md'>
            <h1 className='text-primary-cyan text-2xl font-bold'>{data.title}</h1>
            <h2 className='font-bold text-primary-brightYellow'>{data.subtitle}</h2>
            <p className='text-neutral-grayishBlue leading-8'>{data.body}</p>
        </div>
    )
}