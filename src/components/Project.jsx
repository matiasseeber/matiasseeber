export const Project = ({item}) => {
    return (
        <div key={item.id} className='relative flex min-h-[437px] flex-col items-center text-center'>
            <div className='mb-8 flex h-[221px] items-center justify-center'>
                <img className="max-w-full max-h-[221px]" src={item.image} alt='' />
            </div>
            <h3 className='text-2xl font-semibold capitalize mb-3 font-inter'>{item.name}</h3>
            <p className='text-base max-w-md'>
                {item.description}
            </p>
            <a href={ item.url ? item.url : item.source } className='mt-auto min-w-[110px] cursor-pointer bg-accent p-3 text-white transition-all duration-500 hover:scale-105 hover:bg-accent-hover' target={"_blank"} rel='noreferrer' >{ item.url ? "View" : "Source" }</a>
        </div>
    );
}
