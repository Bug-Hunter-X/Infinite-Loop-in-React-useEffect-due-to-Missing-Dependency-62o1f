# React useEffect Infinite Loop Bug
This repository demonstrates a common bug in React applications involving the `useEffect` hook.  The bug arises from an incomplete dependency array, leading to an infinite render loop.

## Bug Description
The `MyComponent` component uses `useEffect` to log the current count. However, `count` is missing from the dependency array, causing the effect to run on every render, triggering a new render, and so on.

## Solution
The solution involves adding `count` to the dependency array.  This ensures the effect only runs when the `count` value changes.