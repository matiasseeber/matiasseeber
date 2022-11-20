const timeline = [
    {
        title: "August 2019 - Universidad Tecnologica Nacional - First line of code",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolor hic error tenetur nam dolore iusto officia accusantium aperiam et?"
    },
    {
        title: "title 1",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolor hic error tenetur nam dolore iusto officia accusantium aperiam et?"
    },
    {
        title: "title 1",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolor hic error tenetur nam dolore iusto officia accusantium aperiam et?"
    },
    {
        title: "title 1",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolor hic error tenetur nam dolore iusto officia accusantium aperiam et?"
    },
    {
        title: "title 1",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolor hic error tenetur nam dolore iusto officia accusantium aperiam et?"
    }
]

export const About = () => {
    return (
        <section className='section bg-secondary' id='about'>
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row gap-24'>
                    <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
                        <div className='flex flex-col'>
                            <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                                Jane Doe
                            </h2>
                            <p className='mb-4 text-accent'>
                                Freelance Frontend Web Developer
                            </p>
                            <hr className='mb-8 opacity-5' />
                            <p className='mb-8'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit tempore
                                earum dolorum quo consequatur rem nihil hic ducimus rerum soluta
                                neque harum velit molestiae dignissimos distinctio dolorum nisi
                                labore culpa nihil. <br />
                                <br />
                                Qui doloremque quod sit accusantium unde totam inventore
                                cupiditate ratione esse maxime eum recusandae ducimus.
                            </p>
                        </div>
                        <button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
                            Contact me
                        </button>
                    </div>
                </div>
            </div>
            <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                    <div className="border-2-2 absolute border-opacity-20 border-accent-hover h-full border" style={{ left: "50%" }}></div>
                    {
                        timeline.map((item, index) =>
                            <div className={`mb-8 flex justify-between items-center w-full ${index % 2 != 0 ? "flex-row-reverse left-timeline" : "right-timeline" }`}>
                                <div className="order-1 w-5/12"></div>
                                <div className="z-9 flex items-center justify-center order-1 bg-accent shadow-xl w-8 h-8 rounded-full">
                                    <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
                                </div>
                                <div className="order-1 bg-accent rounded-lg shadow-xl w-5/12 px-6 py-4">
                                    <h3 className="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
                                    <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        </section>
    );
};
