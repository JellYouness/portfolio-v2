import Link from 'next/link';
import SlideUp from '@/utils/SlideUp';

const steps = [
    {
        number: '01',
        title: 'Discovery',
        description: 'You share your idea, goals, and timeline. We align on what success looks like.',
    },
    {
        number: '02',
        title: 'Proposal',
        description: 'I scope the work and send a clear plan with deliverables and a transparent quote.',
    },
    {
        number: '03',
        title: 'Build',
        description: 'Design and development with regular updates so you always know where things stand.',
    },
    {
        number: '04',
        title: 'Launch',
        description: 'Delivery, handoff, and post-launch support to make sure everything runs smoothly.',
    },
];

const Process = () => {
    return (
        <section id="Process" className="section w-9/12 mx-auto pt-12 pb-10">
            <h3 className="text-5xl pt-10 font-semibold text-center">
                <span className="border-b-4 border-primary-main">Process</span>
            </h3>
            <p className="text-center text-lg text-gray-500 mt-6 max-w-2xl mx-auto">
                A straightforward path from idea to launch.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 py-20">
                {steps.map((step, index) => (
                    <SlideUp index={index} key={index}>
                        <div className="flex flex-col items-center gap-4 text-center">
                            <span className="text-4xl font-bold text-primary-main">{step.number}</span>
                            <p className="text-2xl font-semibold">{step.title}</p>
                            <p className="text-base text-gray-500 max-w-xs">{step.description}</p>
                        </div>
                    </SlideUp>
                ))}
            </div>
            <SlideUp>
                <p className="text-center text-lg">
                    <Link href="#Contact" className="border-b-2 border-dashed border-primary-main hover:text-primary-main font-semibold">
                        Ready to start? Let&apos;s talk →
                    </Link>
                </p>
            </SlideUp>
        </section>
    );
};

export default Process;
