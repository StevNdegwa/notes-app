
# Notes App

An application to take notes.

### Tech stack   
- [Typescript](https://www.typescriptlang.org/) programming language
- [React](https://reactjs.org/) web framework
    -  [Styled Components](https://styled-components.com/) for styling
    -  [React hook form](https://react-hook-form.com/) for creating forms
    -  [React router dom](https://v5.reactrouter.com/) for application routing
- [Framer Motion](https://www.framer.com/motion/) for handling animations
- [Dexie](https://dexie.org/) IndexedDB framework
- [Editor.js](https://editorjs.io/) editor

### Application structure
Applies clean architecture principles
- **src/application**
    contains app login
    - Shared state (recoil and react context)
    - Business logic
- **src/infrastructure** contains app infrastructure setup
    - Database (IndexedDB) configuration
- **src/presentation**
    Contains ui (React) components. Follows the atomic design principles
    - common has reusable components - mainly atoms and molecules
    - pages has the components for the pages
- **src/shared**
    Contains shared code
    - interfaces
    - enums
- **src/ui**
    Contains styling and themes code
    - style
    - theme
- **src/utils**
    Utilities library

### Hosted
Hosted on netlify
Uses Netlify CI/CD

## Authors
- [@StevNdegwa](https://github.com/StevNdegwa)

## Acknowledgements

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)
