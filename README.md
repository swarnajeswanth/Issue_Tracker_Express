# Issue_Tracker_Express
Checking Project Bugs/Issue using an Issue Tracker Application


Description:
1. This is a backend for an issue tracker application. It is built with Node.js, Express, and MongoDB.

2. To run the application, first install the dependencies by running `npm install`. Then, start the server by running `npm start`. The application will be running on port 8000.

3. The application has two main routes: `/` and `/project_description/:id`. The `/` route renders the home page, which lists all of the projects in the database. The `/project_description/:id` route renders the project description page for a particular project.

Routes:

1. The application also has three sub-routes under the `/project_description/:id` route: `/filter`, `/filter1`, and `/del`. The `/filter` route allows users to filter the issues in a project by author and name. The `/filter1` route allows users to filter the issues in a project by description, title, and labels. The `/del` route allows users to delete a project.

Project:


1. To create a new project, users can go to the `/create_project` page and fill out the form. To edit a project, users can go to the `/edit/:id` page and make changes to the form.

2. The application uses MongoDB to store data about projects and issues. Projects have a name, description, author, and completion status. Issues have a title, description, labels, and author.

3. The application uses Express to handle routing and requests. Express is a popular web framework for Node.js.

4. The application uses EJS to render views. EJS is a template engine for JavaScript.

EJS Layouts:

1. The application uses express-ejs-layouts to create layouts for views. Layouts allow you to define a common header and footer for all of your views.

2. The application uses mongoose to connect to MongoDB. Mongoose is a popular MongoDB ODM for Node.js.
3. The application uses body-parser to parse form data. Body-parser is a middleware for Express that parses form data.


SnapShot:
Home_Page 

![Home_Page](https://github.com/swarnajeswanth/Issue_Tracker_Express/assets/41503134/5b47715b-2b7f-4b4f-9ca6-3b92bb7224ab)

Project_Creation

![Project_Creation](https://github.com/swarnajeswanth/Issue_Tracker_Express/assets/41503134/73ca2a88-483e-48cc-8f4d-445f86d680a9)


Project_Description

![Project_Description](https://github.com/swarnajeswanth/Issue_Tracker_Express/assets/41503134/ecf10ec6-1313-4fd8-9f17-b1bf19842af4)

