/// alterna entre boleanos usando toggle

function useToggle(value1 = true, value2 = false) {
  const [state, setState] = useState(value1);

  const toggle = useCallback(() => {
    setState((prevState) => (
      prevState === value1 ? value2 : value1
    ));
  });

  return [state, toggle];
}

// exemplo de uso:

function App() {
  const [theme, toggleTheme] = useToggle('light', 'dark');

  return (
    <div>
      <h1>{ theme }</h1>
      <button
        onClick={ toggleTheme }
      >
        Toggle Theme
      </button>
    </div>
  );
}