# Plan

- Read React-Bootstrap docs
- Read how to authenticate a user using Firebase Auth Google Account sign-in 

# Requirements 

- A login with Google button.
- A text box for city
- A text box for profile ("I'm a really cool guy")
- A submit button

# Submit Button
- The Firebase Database, which only I can see, accepts the following fields. The document ID should be the ID of the user.

  - city: The value in the "city" form field.
  - name: The value in the "user" form field.
  - userId: The unique user ID (available via Google. Please don't make a user ID yourself).
  - imageUrl: The Google profile picture of the image (available via Google).

# Optional 
 - If the user is logged in with Google, hide the Google button and show their email.

# Switch
- A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. 