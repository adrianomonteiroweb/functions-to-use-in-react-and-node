// Função para persistir o state no localStorage e atualizá-lo sempre que houver alterações no state.

function useLocalStorage(key, initialValue = '') {
  const [state, setState] = useState(() => {
    try {
      const storageValue = localStorage.getItem(key);

      return storageValue
        ? JSON.parse(storageValue)
        : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = useCallback((value) => {
    try {
      setState(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  }, [key]);

  return [state, setValue];
}

// exemplo de uso:

function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  return (
    <div>
      <h1>{ theme }</h1>
      <button
        onClick={ () => setTheme('light') }
      >
        Light
      </button>
      <button
        onClick={ () => setTheme('dark') }
      >
        Dark
      </button>
    </div>
  );
}