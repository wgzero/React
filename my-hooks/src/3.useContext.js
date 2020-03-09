import React, { useContext } from 'react';

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};
// 创造颜色
const ThemeContext = React.createContext(themes.light);
// 应用初始启动
function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}
// 中间传递
function Toolbar(props) {
  console.log('props', props)  // {}
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  // 绑定ThemeContext.Provider
  const theme = useContext(ThemeContext);

  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      hello  zero
    </button>
  );
}

export default App;