# Elegant Posters Shop

A responsive front-end e-commerce demo for browsing and ordering posters. The project focuses on clean UI, category filtering, a shopping cart experience and a simple customer checkout flow using **HTML, CSS and vanilla JavaScript**.

## Features

- Responsive poster catalog
- Product categories such as music, movies, art, books and novels
- Add products to cart
- Remove products from cart
- Automatic cart total calculation
- Prices displayed in DZD
- Customer name, phone, wilaya, baladia and address fields
- Category filters
- Mobile-friendly cart navigation
- Lightweight implementation with no framework required

## How it works

```text
Browse posters
   ↓
Filter by category
   ↓
Add one or more posters to cart
   ↓
Review total price
   ↓
Enter customer information
   ↓
Confirm the demo order
```

The current confirmation step is intentionally front-end only: the generated order object is displayed in the browser console and is not sent to a production backend.

## Tech stack

- HTML5
- CSS3
- JavaScript
- Font Awesome
- Google Fonts

## Project files

```text
index.html   Main store interface
style.css    Responsive layout and visual design
script.js    Cart, filtering and checkout interactions
photos/      Product images
```

## Run locally

No build step is required.

Clone the project:

```bash
git clone https://github.com/1savage1/shop.git
cd shop
```

Then open `index.html` in a browser or run it with a simple local web server.

## Key JavaScript functionality

The application keeps the cart in memory, renders cart items dynamically, calculates the total price, validates customer name and phone before confirmation, and allows products to be filtered without reloading the page.

## Production improvements

To turn this demo into a complete e-commerce application, the next steps would be:

- Persistent cart storage
- Backend API
- Database integration
- Real order submission
- Authentication
- Product administration dashboard
- Payment and delivery workflow

## Author

Developed by [1savage1](https://github.com/1savage1).
