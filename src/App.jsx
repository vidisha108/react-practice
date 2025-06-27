// import { UseStateHook } from "./usestatePractice/UseStateHook";
import './App.css';
import { DarkLight, ThemeProvider } from './DarkTheme/ToggleTheme';
// import { FormHandling } from './formHandling/FormHandling';
function App() {
  

  return (
    <>
    {/* <FormHandling /> */}
      {/* <UseStateHook />  */}
      <ThemeProvider>
        <DarkLight />
      </ThemeProvider>
    </>
  )
}

export default App;