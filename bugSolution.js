```javascript
import React, { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(0);

  useEffect(() => {
    if (count !== prevCount.current) {
      console.log('Component rendered with count:', count);
      fetch(`/api/data?count=${count}`) 
        .then(response => response.json())
        .then(data => {
          // Do something with the data
        });
      prevCount.current = count; // Update the previous value
    }
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
```