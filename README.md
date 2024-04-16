# User Management Dashboard
The User Management Website is a platform designed to manage user data efficiently. It provides functionality to add, view, edit, and delete user records.

# Links 

deployed on netlify - https://jolly-toffee-301912.netlify.app/

# Features
Add User: Easily add new users to the system.
View User List: See a list of all users on the home page.
Edit User: Edit user details, such as their name, email, and department.
Delete User: Remove a user from the system.

 # Installation
To run the User Management Website locally, follow these steps:

Clone the repository:

1.bash
Copy code
git clone https://github.com/your-username/user-management-website.git
Navigate to the project directory:

2. bash
Copy code
cd user-management-website
Install dependencies:

3. bash
Copy code
npm install
Start the development server:

4. bash
Copy code
npm start
Open your web browser and navigate to http://localhost:3000.

# Usage
Add User: Click on the "Add User" button to add a new user. Fill out the required information in the form and submit.
View User List: The home page displays a list of all users. Each user card contains options to edit or delete the user.
Edit User: Click on the "Edit" button on a user card to modify their details. You will be redirected to a form pre-filled with the user's existing information.
Delete User: Click on the "Delete" button on a user card to remove the user from the system.

# Technologies Used
React
Node.js
Express
MongoDB

Folder Structure
   User Managment Dashboard
    ├── README.md
    ├── node_modules
    ├── package-lock.json
    ├── package.json
    ├── .gitignore
    ├── public
    └── src
        └── Components
        │   ├── AddUser.jsx
        │   ├── Navbar.jsx
        │   ├── Pagination.jsx
        │   ├── Skeleton.jsx
        │   ├── Updateusers.jsx
        │   ├── UsersList.jsx
        └── css
        │   ├── AddUser.module.css
        │   ├── Home.module.css
        │   ├── Navbar.module.css
        │   ├── Pagination.module.css
        │   ├── Skeleton.module.css
        │   ├── UsersList.module.css
        ├── images
        │   ├── 1.png
        │   ├── 2.png
        ├── Pages
        │   ├── HomePage.jsx
        │   └── MainRoutes.jsx
        ├── App.css
        ├── App.js
        ├── index.css
        └── index.js
