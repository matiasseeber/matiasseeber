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

export const Socials = () => {
    return (
        <ul className='flex -space-x-6'>
            {social.map((item, index) =>
                <li className='flex justify-center items-center text-accent'key={index}>
                    <a className='text-base text-xl mx-7 hover:scale-125 transition-all hover:text-accent-hover' href={item.href}>{item.icon}</a>
                </li>
            )}
        </ul>
    )
}
