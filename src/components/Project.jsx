export const Project = ({item}) => {
    return (
        <div key={item.id} className='flex flex-col items-center text-center'>
            <div className='mb-8'>
                <img className="max-w-full" src={item.image} alt='' />
            </div>
            <h3 className='text-2xl font-semibold capitalize mb-3 font-inter'>{item.name}</h3>
            <p className='text-base max-w-md'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit veniam
                obcaecati ipsam.
            </p>
        </div>
    );
}
