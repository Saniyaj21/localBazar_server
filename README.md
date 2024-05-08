# localBazar_server

This documentation provides an overview of the routes and functionalities available in this Project.

## Installation

1. Clone this repository.
2. Install dependencies using npm:
   Use `npm install` to install dependencies.


3. Set up environment variables as needed.

## Usage

### Authentication

- This API requires authentication for certain routes. Ensure to include the authentication token in the request headers.

### Routes

#### Create Product

- **URL:** `/api/products/create`
- **Method:** POST
- **Authentication Required:** Yes
- **Request Body:**
- `productName`: Name of the product (String)
- `price`: Price of the product (Number)
- `stock`: Available stock of the product (Number)
- `discount`: Discount on the product (Number)
- `totalPrice`: Total price of the product after discount (Number)
- `description`: Description of the product (String)
- `productImage`: Object containing URL and public ID of the product image
- `shopRef`: ID of the shop to which the product belongs

#### Get Product Details

- **URL:** `/api/products/:productid`
- **Method:** GET
- **Authentication Required:** Yes
- **Parameters:**
- `productid`: ID of the product
- **Response:** Details of the requested product.

#### Get All Products of a Shop

- **URL:** `/api/products/shop/:shopid`
- **Method:** GET
- **Authentication Required:** Yes
- **Parameters:**
- `shopid`: ID of the shop
- **Response:** All products belonging to the specified shop.

#### Update Product Details

- **URL:** `/api/products/update-details/:productid`
- **Method:** PATCH
- **Authentication Required:** Yes
- **Parameters:**
- `productid`: ID of the product
- **Request Body:** Updated details of the product.
- **Response:** Updated product details.

#### Update Product Pictures

- **URL:** `/api/products/update-picture/:productid`
- **Method:** PATCH
- **Authentication Required:** Yes
- **Parameters:**
- `productid`: ID of the product
- **Response:** Product image updated.

#### Delete Product

- **URL:** `/api/products/delete/:productid`
- **Method:** DELETE
- **Authentication Required:** Yes
- **Parameters:**
- `productid`: ID of the product
- **Response:** Product deleted successfully.

## Error Handling

- The API returns appropriate error messages and status codes for invalid requests or server errors.

## Contributors

- [Saniyaj Mallik](https://saniyajmallik.vercel.app/)


