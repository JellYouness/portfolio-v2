import { Language, Apps, Storefront, Speed } from '@mui/icons-material';
import Link from 'next/link';
import SlideUp from '@/utils/SlideUp';

const services = [
    {
        title: 'Business Websites',
        description: 'Corporate sites, landing pages, and CMS-driven content that represent your brand and convert visitors into customers.',
        icon: <Language sx={{ fontSize: '60px' }} />
    },
    {
        title: 'Web Applications & SaaS',
        description: 'Dashboards, invoicing tools, booking systems, and management platforms built to scale with your business.',
        icon: <Apps sx={{ fontSize: '60px' }} />
    },
    {
        title: 'E-commerce & Real Estate',
        description: 'Listing platforms with search, filtering, and API integrations — plus AI assistants to guide your users.',
        icon: <Storefront sx={{ fontSize: '60px' }} />
    },
    {
        title: 'UI/UX & Performance',
        description: 'Responsive design, smooth animations, and fast load times that keep users engaged and coming back.',
        icon: <Speed sx={{ fontSize: '60px' }} />
    }
];

const Services = () => {
    return (
        <section id="Services" className="section w-9/12 mx-auto pt-12 pb-10">
            <h3 className="text-5xl pt-10 font-semibold text-center">
                <span className="border-b-4 border-primary-main">Services</span>
            </h3>
            <p className="text-center text-lg text-gray-500 mt-6 max-w-2xl mx-auto">
                End-to-end web development tailored to your business goals.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 items-center py-20 gap-y-10 xl:gap-6">
                {services.map((item, index) => (
                    <SlideUp index={index} key={index}>
                        <div className="flex flex-col items-center gap-2">
                            <div className="flex items-center justify-center w-24 h-24 rounded-full bg-primary-main text-white">
                                {item.icon}
                            </div>
                            <p className="text-2xl font-semibold text-center">{item.title}</p>
                            <p className="text-base text-gray-500 w-60 text-center">{item.description}</p>
                        </div>
                    </SlideUp>
                ))}
            </div>
            <SlideUp>
                <p className="text-center text-gray-500">
                    Every project is scoped to your needs.{' '}
                    <Link href="#Contact" className="border-b-2 border-dashed border-primary-main hover:text-primary-main">
                        Let&apos;s discuss your project →
                    </Link>
                </p>
            </SlideUp>
        </section>
    );
};

export default Services;
