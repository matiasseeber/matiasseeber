import {
    FiInstagram,
    FiGithub
} from 'react-icons/fi';

export const social = [
    {
        icon: <FiInstagram />,
        href: 'https://www.instagram.com/matiasseeber9/',
    },
    {
        icon: <FiGithub />,
        href: 'https://github.com/matiasseeber',
    },
];

export const Socials = () => {
    return (
        <ul className='flex -space-x-6'>
            {social.map((item, index) =>
                <li className='flex justify-center items-center text-accent'key={index}>
                    <a className='text-base text-[20px] mx-7 hover:scale-125 transition-all hover:text-accent-hover' href={item.href} target={'_blank'}>{item.icon}</a>
                </li>
            )}
        </ul>
    )
}
