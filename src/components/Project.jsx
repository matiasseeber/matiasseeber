export const Project = ({item}) => {
    return (
        <div key={item.id} className='flex flex-col items-center text-center min-h-[437px]'>
            <div className='mb-8'>
                <img className="max-w-full max-h-[221px]" src={item.image} alt='' />
            </div>
            <h3 className='text-2xl font-semibold capitalize mb-3 font-inter'>{item.name}</h3>
            <p className='text-base max-w-md'>
                {item.description}
            </p>
            <a href={ item.url ? item.url : item.source } className='text-white p-3 cursor-pointer bg-accent hover:bg-accent-hover hover:scale-125 transition-all duration-500 mt-5 min-w-[110px] absolute bottom-0' target={"_blank"} >{ item.url ? "View" : "Source" }</a>
        </div>
    );
}
