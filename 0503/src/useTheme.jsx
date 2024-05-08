import { useState, useEffect } from 'react';

function useTheme() {
    
    const THEME = {
        BLUE : {
            id : "1",
            blockBG: "aliceblue",
            textBG: "skyblue"
        },
        GRAY : {
            id : "2",
            blockBG: "whitesmoke",
            textBG: "indianred"
        }
    };

    const [theme, setTheme] = useState(THEME.BLUE);

    useEffect(() => {
        if (theme.id == '1') {
            setTheme(THEME.GRAY);
        } else {
            setTheme(THEME.BLUE);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme.id === '1' ? THEME.GRAY : THEME.BLUE;
        setTheme(newTheme);
        console.log(theme.id);
    };

    return [theme, toggleTheme];
}

export default useTheme;