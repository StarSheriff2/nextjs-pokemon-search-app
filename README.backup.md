## Description
I have deployed an app in vercel that consumes the [Pokemon Api](https://pokeapi.co/)

### Live
[pokemon-api-g1ef-git-my-implementation-starsheriff2.vercel.app](https://pokemon-api-g1ef-git-my-implementation-starsheriff2.vercel.app/)

## Type of change

- [x] New feature

## Checklist
Please review and check the following:

- [x] Use all the required technoilogies:
   - React Query
   - [- Stitches.dev](https://stitches.dev/) for the styling
   - Next.js
   - TypeScript
   - Zustand for state management (Didn't actually use it, but did set it up)
- [ ] All new and existing tests passed.
- [x] Use component-driven development with an atomic design pattern (atoms, molecules, etc.)

## Screenshots

<img width="1316" alt="Screenshot 2023-02-24 at 08 56 53" src="https://user-images.githubusercontent.com/61250665/221210550-5ee2aaf5-3880-46e0-a147-c5c4439c9f21.png">
<img width="1374" alt="Screenshot 2023-02-24 at 08 57 09" src="https://user-images.githubusercontent.com/61250665/221210546-1780b80c-c5f4-442f-b21b-4272a4eccdd0.png">
<img width="1155" alt="Screenshot 2023-02-24 at 08 57 34" src="https://user-images.githubusercontent.com/61250665/221210537-8e6719eb-c1a8-441a-8041-dae63b8bae86.png">
<img width="1181" alt="Screenshot 2023-02-24 at 08 57 20" src="https://user-images.githubusercontent.com/61250665/221210542-d5a98d86-a1dd-4ef1-aeb8-c373e62e1a80.png">

## Setup Requirements

- node >= v16.18.1
- next >= 13.1.6

## Deploy

- Run  `yarn`
- Run `yarn dev`
- Open [localhost:3000](localhost:3000) in your web browser

## Project Description
- Styling
  - Created a stitches config file for all color swatches, and other style variables
  - Created a global style and typography style with stitches
  - Made the page responsive by using css grids and auto-fit
- Composition and Design Pattern
  - Followed the atomic design principles to make the code maintainable and scalable
  - Created multiple hooks for a cleaner code
- Optimization
  - Configured stitches for server-side rendering
  - Cache every page for a single Pokemon (Links turn purple once the data has been cached)
  - Used SSR to cache the Details page for faster loading
  - Made as few API calls as possible to load content
- UX
  - Implemented infinite scrolling to load API pages as user scrolls page
  - Implemented debounce feature in the search bar to give user query suggestions
  - Implemented spinners for loading time
  - Search for any query in the search text box when clicking on "Search"
  - Show custom page for a 404 Not Found error

> I'd like to say that this was a very challenging project, as I had almost no experience with Next.js, React Query, Zustand, and the Atomic Design Pattern. I had to do lots of research to know how to implement all of these frameworks correctly into the project.
The most challenging part was implemeting the infinite scroll feature.
I feel most proud of the SSR implementation for the details page!
