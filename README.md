# Unnecessary API Calls in React useEffect Hook

This repository demonstrates a common issue in React applications where an API call is made unnecessarily within a `useEffect` hook, leading to performance problems.  The problem stems from the useEffect hook running after every render, even when the value in the dependency array hasn't changed.  This is often seen when fetching data based on a state variable that doesn't always update causing repeated requests. 

## Problem

The `bug.js` file contains a React component that increments a counter.  Each increment triggers a fetch request, regardless of whether the count has actually changed. This inefficiently makes repeated calls to the server. 

## Solution

The `bugSolution.js` file provides a solution using the `useRef` hook to track previous values. The API call only happens if the `count` value is different from the previously stored value.  This significantly improves performance by reducing unnecessary API requests.