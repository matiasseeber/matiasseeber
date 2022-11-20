import { useEffect, useState } from 'react'
import { Presentation } from './components/Presentation'

export const DarkModeToggle = () => {
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
            setTheme("dark");
        else
            setTheme("light");
    }, []);

    useEffect(() => {
        if (theme == "dark")
            document.documentElement.classList.add("dark");
        else
            document.documentElement.classList.remove("dark");
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme == "dark" ? "light" : "dark");
    }

    return (
        <>
            <button type='button' onClick={handleThemeSwitch} className="fixed Z-10 right-2 top-2 bg-indigo-500 text-lg p-1 rounded-md">{theme == "dark" ? "🔦" : "🌖"}</button>
            <div className='font-inter bg:white dark:bg-slate-900'>
                <Presentation />
            </div>
        </>
    )
}
