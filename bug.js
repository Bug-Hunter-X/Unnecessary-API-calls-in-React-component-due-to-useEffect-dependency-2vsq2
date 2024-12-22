```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render
    console.log('Component rendered with count:', count);
    // Logic to make an API call based on count value
    fetch(`/api/data?count=${count}`)  // This is the line causing the issue
      .then(response => response.json())
      .then(data => {
        // Do something with the data
      });
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```