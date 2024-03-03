# Fragrance Haven - E-Commerce Web Application
 <p align="center">
 <b>Developed with .NET Core 7.0 x Bootstrap 5 x React.js</b>
 <img src="https://res.cloudinary.com/dhpo94oka/image/upload/v1709399843/Github/Description/m52d4ld8nwaugu6zruum.png" alt="Tech Stacks">
 </p>

Visit the [live demo](https://fragrancehaven.vercel.app/) to explore the application.

**Testers can either register for a new account or click on Admin Test or User Test button on the sign in page**

This is the respository for the frontend and the repository for the backend can be found here: [Fragrance Haven API](https://github.com/ChrisShim98/fragrancehaven_api)

## Features

### For Every User:

- **Registration**: Users can register for a new account using reactive forms that guide them through the required details.
- **Secure Login**: Secure login using JSON Web Tokens (JWT) for communication between the server and client.
- **Pages**: Home, All Products, About Us, and FAQ pages.
- **Account Management**: 
  - Login
  - Register
  - Update password on the My Account page.
- **Shopping**:
  - Add products to cart
  - Make payments on items
  - View transaction receipts
- **Product Interaction**:
  - Products have multiple images
  - Users can flip through product images
  - Users can view other users' reviews on each product and add their own reviews.
- **Product Filtering and Sorting**:
  - Filter products on the All Products page by:
    - On sale
    - With reviews
    - In stock
  - Sort products by name, price, and amount in stock.
- **Pagination**: Products are paginated.
- **Search**: Search bar for users to search available products.

### For Admins (Accessed via Admin Dashboard):

- **Product Management**:
  - Create products
  - Delete products
  - Update products
  - Search through products to be updated
  - Add images to products
  - Delete images from products
  - Delete customer reviews on products
  - Set main picture that will be displayed first to customers
  - Add sale prices to products
- **Transaction Management**:
  - View transaction receipts of all users
  - Search transactions by either the customer name or receipt number
  - Refund transactions
- **Analytics**:
  - View analytics of sales:
    - Total revenue
    - Total gain
    - Total loss
    - Total amount of units sold
    - Total amount of units refunded
  - Analytics displayed in bar and doughnut charts.
  - Analytics can be filtered by the following time periods:
    - Today
    - Yesterday
    - Last 7 days
    - Last 30 days
    - Last 4 weeks
    - Last 3 months
    - Last 6 months
    - Last 12 months
  - Custom date period selector for analytics.

## Tech Stack Description

This e-commerce application harnesses the power of modern technologies to provide a seamless user experience:

### Frontend:
- **React**: Driving the client-facing aspect of the application, React offers a flexible and efficient framework for building dynamic user interfaces. With React, components are reusable and state management is simplified, facilitating the development of interactive single-page applications.

- **Tailwind CSS**: Tailwind CSS is used for styling, providing a utility-first approach that enables rapid development and customization of the user interface. By leveraging Tailwind CSS, the application achieves a clean and modern design with minimal CSS overhead.

### Backend:
- **.NET Core 7**: Serving as the foundation of the server-side functionalities, .NET Core 7 offers a cross-platform, high-performance framework for building scalable and reliable applications. With .NET Core, developers benefit from robust features such as asynchronous programming, dependency injection, and MVC architecture, enhancing productivity and maintainability.

- **ASP.NET Core**: Complementing .NET Core, ASP.NET Core is an open-source framework that facilitates the development of web applications. ASP.NET Core provides tools and libraries for building RESTful APIs, handling authentication and authorization, and interacting with databases. Its modular and lightweight nature ensures optimal performance and flexibility.

By leveraging React, Tailwind CSS, and .NET Core 7, this e-commerce application achieves a balance of performance, scalability, and maintainability, providing users with a seamless shopping experience.


## Deployment Strategy

The deployment process for this application involves several steps to ensure seamless delivery:

1. **Backend Deployment**:
   - **Dockerization**: The API server, built with .NET Core, is dockerized within an Ubuntu (Linux) server environment using Docker containers.
   - **Cloud Platform**: The dockerized API is then deployed to Fly.io, a cloud Platform as a Service (PaaS) provider.

2. **Frontend Deployment**:
   - **Build and Compression**: The React frontend application is built and optimized for production.
   - **Cloud Platform**: The built frontend application is hosted on Vercel, a cloud platform optimized for hosting static sites and serverless functions.

This deployment strategy ensures efficient deployment of both the backend API and the frontend application, with automatic updates triggered by changes in the respective codebases.

## Screenshots
### Users  
  
| Home Page  | All Products |
| ------------- | ------------- |
| <img width="500" src="https://res.cloudinary.com/dhpo94oka/image/upload/v1709491970/Github/FragranceHaven/xlxjhs3n1cn3f8i3uk1d.png" alt="Home Page">  | <img width="500" src="https://res.cloudinary.com/dhpo94oka/image/upload/v1709492049/Github/FragranceHaven/thd65pv1gymcpshrt3tg.png" alt="All Products">  |

| About Us  | FAQs |
| ------------- | ------------- |
| <img width="500" src="https://res.cloudinary.com/dhpo94oka/image/upload/v1709492158/Github/FragranceHaven/lh5lkettlmxwafadq7cc.png" alt="About Us">  | <img width="500" src="https://res.cloudinary.com/dhpo94oka/image/upload/v1709492206/Github/FragranceHaven/kunpx1msaaaj7cldkrjv.png" alt="FAQs">  |

| Product Details  | My Account Page |
| ------------- | ------------- |
| <img width="500" src="https://res.cloudinary.com/dhpo94oka/image/upload/v1709492340/Github/FragranceHaven/adpsmg5dzcr9jmapcclw.png" alt="Product Details">  | <img width="500" src="https://res.cloudinary.com/dhpo94oka/image/upload/v1709492966/Github/FragranceHaven/aw7xgceygaqujgf34ryo.png" alt="Add Review">  |

| Cart  | Checkout |
| ------------- | ------------- |
| <img width="500" src="https://res.cloudinary.com/dhpo94oka/image/upload/v1709492419/Github/FragranceHaven/urwty2dznu3ysm3qoo9e.png" alt="Cart">  | <img width="500" src="https://res.cloudinary.com/dhpo94oka/image/upload/v1709492531/Github/FragranceHaven/wekftnuq8h9kj6ynozip.png" alt="Checkout">  |

| Payment Success  | Sign In |
| ------------- | ------------- |
| <img width="500" src="https://res.cloudinary.com/dhpo94oka/image/upload/v1709492641/Github/FragranceHaven/rvenhf8mntivn1syadtt.png" alt="Payment Success">  | <img width="500" src="https://res.cloudinary.com/dhpo94oka/image/upload/v1709492713/Github/FragranceHaven/z4zytybttsllzjgx35hl.png" alt="Sign In">  |

| Register  | My Account Page |
| ------------- | ------------- |
| <img width="500" src="https://res.cloudinary.com/dhpo94oka/image/upload/v1709493044/Github/FragranceHaven/xyvkwmb9iook2kruehrz.png" alt="Register">  | <img width="500" src="https://res.cloudinary.com/dhpo94oka/image/upload/v1709492833/Github/FragranceHaven/c8g4fwc68vpxb8tmxsuv.png" alt="My Account Page">  |

  
### Admin  
  

| Modify My Account  | Add Product |
| ------------- | ------------- |
| <img width="500" src="https://res.cloudinary.com/dhpo94oka/image/upload/v1709493213/Github/FragranceHaven/iw1e2hohnwkrro3knlfx.png" alt="Modify My Account">  | <img width="500" src="https://res.cloudinary.com/dhpo94oka/image/upload/v1709493269/Github/FragranceHaven/y06l1zgru9kfgg0ezvpc.png" alt="Add Product">  |

| Edit Product  | Add Photo |
| ------------- | ------------- |
| <img width="500" src="https://res.cloudinary.com/dhpo94oka/image/upload/v1709493364/Github/FragranceHaven/urbpbtdmgo4tbshkxogx.png" alt="Edit Product">  | <img width="500" src="https://res.cloudinary.com/dhpo94oka/image/upload/v1709493434/Github/FragranceHaven/zj9s86p2v8q1tpumzndq.png" alt="Add Photo">  |

| View Transactions  | Analytics |
| ------------- | ------------- |
| <img width="500" src="https://res.cloudinary.com/dhpo94oka/image/upload/v1709493529/Github/FragranceHaven/odxchulcb1rqbfswnug9.png" alt="View Transactions">  | <img width="500" src="https://res.cloudinary.com/dhpo94oka/image/upload/v1709493638/Github/FragranceHaven/dizjv25pacym4ajzdyiz.png" alt="Analytics">  |
