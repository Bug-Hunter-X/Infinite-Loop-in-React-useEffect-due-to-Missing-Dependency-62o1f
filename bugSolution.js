```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs when count changes
    console.log('Count:', count); 
    return () => {
      console.log('Component unmounted');
    };
  }, [count]); // Add count to dependency array

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```