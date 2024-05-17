import { Link } from 'react-router-dom';

import ButtonDarkMode from '../components/ButtonDarkMode';

function Header() {
    return (
        <header className='flex justify-center items-center w-full h-12 shadow-lg dark:bg-slate-900'>
            <div className='flex justify-between items-center w-4/5 h-full'>
                <p className='text-blue-500 font-bold text-2xl'>Hort</p>
                <div className='flex items-center gap-6'>
                    <nav className='flex items-center gap-4 dark:text-white'>
                        <Link to="/">Sobre mim</Link>
                        <Link to="/">Projetos</Link>
                        <Link to="/">Blog</Link>
                        <Link to="/">Contato</Link>
                    </nav>
                    <ButtonDarkMode />
                </div>
            </div>
        </header>
    );
}

export default Header;

