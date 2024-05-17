import React, { useState, useEffect } from 'react';

function DarkModeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    // Alterna o modo escuro
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    // Atualiza a classe do elemento raiz quando o estado muda
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <div>
            <button className='w-14 h-6 text-white font-bold bg-black rounded dark:text-black dark:bg-white' onClick={toggleDarkMode}>
                {darkMode ? 'Light' : 'Dark'}
            </button>
        </div>
    );
}

export default DarkModeToggle;