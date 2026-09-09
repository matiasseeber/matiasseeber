export const Portfolio = () => {
    return (
        <section id='companies' className='section bg-primary'>
            <div className='container mx-auto flex justify-center items-center flex-col'>
                <div className='flex flex-col items-center justify-center text-center hiddenAnimation mb-14'>
                    <p className='mb-3 text-xs uppercase tracking-[0.3em] text-accent-hover'>Professional experience</p>
                    <h2 className='section-title font-inter'>Companies I have worked with</h2>
                    <p className='subtitle'>Teams and products where I have contributed across backend engineering, integrations and scalable systems.</p>
                </div>
                <div className='grid w-full gap-5 md:grid-cols-3'>
                    {[
                        { name: "Intramed", detail: "Roemmers group", logo: "./assets/imgs/companies/intramednet_logo.jfif", role: "Senior Backend Engineer", focus: "Event-driven microservices, social network products and cloud infrastructure." },
                        { name: "SiloReal", detail: "Agro technology", logo: "./assets/imgs/companies/siloreal_logo.jfif", role: "Backend Engineer", focus: "Backend platform, geospatial services, IoT, machine learning and blockchain." },
                        { name: "Request S.A", detail: "Fintech / SaaS", logo: "./assets/imgs/companies/request.jfif", role: "Software Developer", focus: "Esker implementations, ERP integrations and client-facing delivery." },
                    ].map((company) => (
                        <article key={company.name} className='hiddenAnimation border border-white/10 bg-secondary p-6 transition-colors duration-300 hover:border-accent'>
                            <div className='mb-7 flex h-24 w-24 items-center justify-center overflow-hidden rounded-sm bg-[#e8e6df]'>
                                <img className='h-full w-full object-cover object-left mix-blend-multiply' src={company.logo} alt={`${company.name} logo`} />
                            </div>
                            <p className='mb-2 text-xs uppercase tracking-[0.2em] text-accent-hover'>{company.detail}</p>
                            <h3 className='mb-3 text-lg font-inter text-white'>{company.role}</h3>
                            <p className='text-sm leading-relaxed text-paragraph'>{company.focus}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
