import { Socials } from "./Socials";

export const Footer = () => {
    return (
        <footer className='bg-primary py-12'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
                    <div className='flex space-x-6 items-center justify-center'>
                        <Socials />
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
