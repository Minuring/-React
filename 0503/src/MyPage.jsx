import useTheme from "./useTheme";
import Header from "./jsxCode/Header"
import Main from "./jsxCode/Main"
import ThemeContext from "./ThemeContext";
import ThemeBtn from "./jsxCode/ThemeBtn"

function MyPage() {
    
    const [theme, toggleTheme] = useTheme();

    const pageStyle = {
        width: "80%",
        marginLeft: "10%",
        marginRight: "10%",
        fontSize: "large"
      };

    return (
        <div style={pageStyle}>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <Header />
                <ThemeBtn/>
                <Main />
            </ThemeContext.Provider>
        </div>
    );
}

export default MyPage;