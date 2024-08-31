# Advanced-Redux
Reducer must be pure, side effect free, synchronous functions and any aysnc API calls must not be run in reducers.
Instead od calling API calls in reducers functions  implement inside components (like useEffects()) or inside action items.
Where should our logic (code) go?
Synchronous, side-effect free code (i.e data transformation):
Prefer Reducers

Avoid actions creators and components	

Asynchronous, side-effect code:
Avoid Reducers

Prefer actions creators and components
