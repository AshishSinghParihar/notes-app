# NotesApp
This is a demo Angular application that enbales Signup/Login for a user and allows the user to create notes of type Text, List, Link and Image. All the data is saved in application's local memory hence all the data would be erased when the application loads/refreshes.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

## Setting up the application

### Step 1: Clone/Unzip application
The application is available in [GitHub](https://github.com/AshishSinghParihar/notes-app).
Use Git Bash and enter command
>> `git clone https://github.com/AshishSinghParihar/notes-app.git`
to clone the application in your system.

Alternatively, use the zip file and unzip in your system.

### Step 2: Install dependencies
Open Command Prompt and go into the application's home directory and install the dependencies by typing the following command -
>> `npm install`
This will intall all the dependencies of the application.

### Step 3: Serve the application
Run below command to run the application on local browser
>> `ng serve`
Navigate to `http://localhost:4200/` in your browser. The app will automatically reload if you change any of the source files.

## Features of the application

### Sign up
The first page of the application is the Sign up page.
The application allows to register a user by entering basic details of the user with below validation
`First name` : Required field,
`Last name` : Required field,
`Username` : Required field, alphanumeric with space or special characters,
`Password` : Required field, alphnumeric with special characters,
`Date of birth`,
`Email` : Valid email pattern,
`Phone number` : Numerical

A user can be registered only when above validations are passed.

### Login
A user can login by entering valid `Username` and `Password`.
If the credentials do not match any registered user's credentials, error message is shown.

### Create notes
After logging in, a user can create notes of type `Text`, `List`, `Link` and `Image`.
The notes can be edited or deleted.
For `List` notes, the user can make list of items and and mark items as done or delete items.





