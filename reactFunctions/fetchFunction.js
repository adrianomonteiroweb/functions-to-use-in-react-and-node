// retorna encapsulando as lógicas de fetch, status de loading e possível error.

function useFtech(url, options = {}) {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url, options)
      .then(async (response) => {
        const json = await response.json();
        setValue(json);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [url]);

  return { loading, value, error };
}

// exemplo de uso:

function App() {
  const {
    loading,
    value,
    error,
  } = useFetch('https://...');

  if (loading) return 'Carregando...';

  if (error) return 'Ocorreu algum erro.';

  return value.map((post, index) => (
    <div key={ index } >
      { post.title }
    </div>
  ));
}