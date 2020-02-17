# Portfolio site with Express
The goal of this programm is to use server-side code to create a (potential) page to showcase my portfolio of projects I worked on so far. It uses the Express framework for handling the requests to the different routes and Pug as the viewing engine. The template(s) for the layout of the different routes was taken from Team Treehouse and might be changed later on. I focused on creating the functionality and on restyling the CSS.

### Main mechanics and functionality
- The page is basically split into 3 routes: the index, an about section and the dynamically generated project-section for each individual project

- Each project section is linked to the GitHub site and to its live version

- The data which is needed for the individual project views is stored in a separate .json file. In the Pug view, iteration and interpolation is used on that data to
display all the information as necessary

- An error handler was set up for requesting non-existent routes or projects

### Styling
In terms of styling, I tried to make the site a bit more vivid:

- The paragraphs are using a more playful, handwritten-style font

- Instead of dull white space I placed a fixed background-image with warmer colors

- Added text shadows and changed text color a bit to get better contrast on the new background

- The project images got a border shadow. The large images also have a border-radius

- The large project images are sliding in sequentially instead of just appearing instantly
