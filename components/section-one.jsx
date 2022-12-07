import { sectionOne as data } from '../constants'

export default function SectionOne() {
    return (
        <div className='bg-white p-6 md:p-10 space-y-6 md:space-y-0 md:col-span-2'>
            <h1 className='text-primary-cyan text-2xl font-bold md:mb-4'>{data.title}</h1>
            <h1 className='font-bold text-primary-brightYellow md:pb-2'>{data.subtitle}</h1>
            <p className='text-neutral-grayishBlue  leading-8 md:leading-normal'>{data.body}</p>
        </div>
    )
}