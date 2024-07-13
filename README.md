# Exam React JS ( practice ) - 2024 - 07 - 13

## 1. What to do?
- Clone this repository
- Create a new branch with your name
- Follow the instructions of the exam
- run `npm install` to install the dependencies
- run `npm run dev` to start the development project
- Push your code to the repository after the exam is finished

## 2. Information
- You have 1 hour and half to complete the exam
- You can use the internet to search for information
- You can use the code editor of your choice
- You can use the terminal

## 3. Exam Instructions
- Create in folder "Pages" a new file called "Home.jsx" this file will have a text and a button that will redirect to the page "/books"
- In Routes.jsx create a new route that will render the component "Home.jsx" in the index
- In Routes.jsx create a new route that will render the component "Books.jsx" in the path "/books"
- In Routes.jsx create a new route that will render the component "Checkout.jsx" in the path "/checkout"
- In Routes.jsx create a new route that will render the non-existent component "NotFound.jsx" in the path "*" (any route)
- Create a folder called "Contexts" and inside it create a file called "CartContext.jsx" this file will have a context that will have:
    - A state called "cart" that will be an array of objects
    - A function called "addToCart" that will receive an object and add it to the "cart" state
    - A function called "removeFromCart" that will receive an object and remove it from the "cart" state
    - A function called "clearCart" that will clear the "cart" state
- Create a folder called "Providers" and inside it create a file called "CartProvider.jsx" this file will have a provider that will wrap the entire application and provide the context created in the previous step
- In the CartProvider component create a reducer that will have a state which is an array of books as defined in "Data/books.js" and the following actions:
    - ADD_TO_CART
    - REMOVE_FROM_CART
    - CLEAR_CART
- Use the reducer in the CartProvider component to manage the state of the cart in the context provider
- In the "App.jsx" file wrap the entire application with the "CartProvider" component
- Create a hook called useCart that return the context created in the "CartContext.jsx" file and make sure you are using it inside the CartProvider component.
- In the "Books.jsx" file use the useCart hook to add the books to the cart instead of the empty array there.
- In the "Checkout.jsx" file use the useCart hook to show the books added to the cart and a button to remove them from the cart.
- In the 'Components' folder replace the functions with the methods from useCart hook to add and remove books from the cart.