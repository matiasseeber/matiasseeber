import {
    FiYoutube,
    FiInstagram,
    FiGithub,
    FiDribbble,
    FiLayout,
    FiSettings,
    FiPenTool,
    FiTag,
    FiMail,
    FiMapPin,
  } from 'react-icons/fi';

export const social = [
    {
        icon: <FiYoutube />,
        href: '',
    },
    {
        icon: <FiInstagram />,
        href: '',
    },
    {
        icon: <FiGithub />,
        href: '',
    },
];

export const Footer = () => {
    return (
        <footer className='bg-primary py-12'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
                    <div className='flex space-x-6 items-center justify-center'>
                        {social.map((item, index) => {
                            const { href, icon } = item;
                            return (
                                <a className='text-accent text-base' href={href} key={index}>
                                    {icon}
                                </a>
                            );
                        })}
                    </div>
                    <div>
                        <img src={""} alt='' />
                    </div>
                    <p className='text-paragraph opacity-80 text-[15px]'>
                        &copy; 2022 Matias Seeber. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
