
// import 'animate.css';

const LinkLogo = ({children}) => {
    return (
        <div>
            <button className='text-white text-2xl bg-[#262f38] p-4 hover:bg-[#44a4fe] transition-all delay-75 ease-linear relative '> <div className='animate__animated animate__bounceInDown '>{children}</div></button>
        </div>
    );
}

export default LinkLogo;