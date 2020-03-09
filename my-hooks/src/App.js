import React, { useContext } from 'react';

const themes = {
  light: {
    summer: "#000000",
    zero: "#eeeeee"
  },
  dark: {
    summer: "#ffffff",
    zero: "#222222"
  }
}

const ThemesContext = React.createContext(themes.light)

function App (){
  return (
    <ThemesContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemesContext.Provider>
  )
}

function Toolbar(props){
  return (
    <ThemedButton />
  )
}

function ThemedButton(){
  const bg = useContext(ThemesContext)
  return (
    <button style={{background: bg.zero, color: bg.summer}}>
      hello summer
    </button>
  )
}

export default App;