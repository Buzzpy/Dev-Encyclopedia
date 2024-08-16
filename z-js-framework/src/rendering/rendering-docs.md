# Z Js - Rendering

Documentation, planning and quick reference in regards to z js framework rendering mechanism and strategy

## Todos

- Add more helper functions to make dom manipulation easier
- Work around dom mutation observers to derive component mounted, unmounted, updated methods and wire them up to z js reactive state system (PubSub)

## Currently Added Methods

- fetchComponentContent -- fetches any html file (component) from component directory in root of project and returns it's contents
- createComponent -- creates a new html elemement or component with any arguments as attributes and returns it
- getChildren -- takes a parent element or component and returns an array of it's immediate child elements or components
- replaceComponent -- takes in a component to replace and what to replace it with
- removeComponent -- removes given component or element from dom in reference to it's immediate parent node or element or component
- updateComponent -- takes  target component or element and new content to replace in place of existing inner content



