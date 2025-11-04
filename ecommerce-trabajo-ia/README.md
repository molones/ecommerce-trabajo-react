# eCommerce Project

This is an eCommerce application built with React. The application fetches products from an external API and displays them in a user-friendly interface.

## Project Structure

```
ecommerce-trabajo-ia
├── public
│   └── index.html
├── src
│   ├── index.jsx
│   ├── index.css
│   ├── App.jsx
│   ├── App.css
│   ├── reportWebVitals.jsx
│   ├── setupTests.jsx
│   ├── components
│   │   ├── Header.jsx
│   │   ├── SearchBar.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductGrid.jsx
│   │   └── Footer.jsx
│   ├── pages
│   │   └── Home.jsx
│   ├── hooks
│   │   └── useFetchProducts.js
│   ├── services
│   │   └── productsService.js
│   ├── contexts
│   │   └── CartContext.jsx
│   ├── styles
│   │   └── variables.css
│   └── tests
│       └── App.test.jsx
├── package.json
├── .gitignore
└── README.md
```

## Features

- Fetches products from the API at [DummyJSON](https://dummyjson.com/products/category/laptops).
- Displays products in a grid layout.
- Includes a search bar for product filtering.
- Responsive design for mobile and desktop views.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd ecommerce-trabajo-ia
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
npm start
```
This will launch the app in your default web browser.

## Testing

To run tests, use:
```
npm test
```

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.