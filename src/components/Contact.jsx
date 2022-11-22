const contact = [
    {
        icon: <FiMail />,
        title: 'Have a question?',
        subtitle: 'I am here to help you.',
        description: 'Email me at matiasseeber@gmail.com',
    },
    {
        icon: <FiMapPin />,
        title: 'Current Location',
        subtitle: 'Buenos Aires, Argentina',
    },
];


import {
    FiMail,
    FiMapPin,
} from 'react-icons/fi';

import emailjs from "emailjs-com";
import { useState } from 'react';

const succesfullEmail = "Thank you for your email!, i will answer you as soon as possible.";

const failedEmail = "Email could not be sent.";

export const Contact = () => {
    const [response, setResponse] = useState("");

    const handleOnSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_obw85ja', 'template_2bvi1r3', e.target, 'Givi4AvbEVHDXRVZN')
            .then(() => {
                setResponse(succesfullEmail);
            }, () => {
                setResponse(failedEmail);
            });
    }

    return (
        <section className='section bg-tertiary' id='contact'>
            <div className='container mx-auto'>
                <div className='hiddenAnimation flex flex-col items-center text-center'>
                    <h2 className='font-inter section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block'>
                        Contact me
                    </h2>
                    <p className='subtitle'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam
                        labore nisium illum cupiditate reiciendis a numquam
                    </p>
                </div>
                <div
                    className='flex flex-col lg:gap-x-8 lg:flex-row'
                >
                    <div
                        className='hiddenAnimation flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2'
                    >
                        {contact.map((item, index) => {
                            const { icon, title, subtitle, description } = item;
                            return (
                                <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                                    <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl'>
                                        {icon}
                                    </div>
                                    <div>
                                        <h4 className='font-body text-xl mb-1'>{title}</h4>
                                        <p className='mb-1 text-paragraph'>{subtitle}</p>
                                        <p className='text-accent font-normal'>{description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <form
                        className='space-y-8 w-full max-w-[780px] hiddenAnimation'
                        onSubmit={handleOnSubmit}
                    >
                        <div className='flex gap-8'>
                            <input className='input' type='text' placeholder='Your name' name='name' required={true} />
                            <input className='input' type='email' placeholder='Your email' name='email' required={true} />
                        </div>
                        <input className='input' type='text' placeholder='Subject' name='subject' required={true} />
                        <textarea
                            className='textarea'
                            placeholder='Your message' required={true} name='message'
                        ></textarea>
                        <button className='btn btn-lg bg-accent hover:bg-secondary-hover transition-all hover:scale-125 transition-all duration-500' type='submit'>
                            Send message
                        </button>
                        <div className=''>
                            {
                                response == succesfullEmail && <p className='block text-green-500 border border-green-500 w-fit p-3'>
                                    {succesfullEmail}
                                </p>}

                            {
                                response == failedEmail && <p className='block text-red-500 border border-red-500 w-fit p-3'>
                                    {failedEmail}
                                </p>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
