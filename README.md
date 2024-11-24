## Title : Bike Store Website
## Live link : 

## Descripttion :

This website is a bike store application built using Express, Node.js, Mongoose, and TypeScript, with Joi for data validation. It allows users to store new bike data in the database, search for bikes by name, category, or brand, see detailed information about specific bikes, place orders, and calculate the total revenue from all orders. If any error occurred it gives detailed error responses.

## Feature details of Bike Store Website

### 1. Add a new bike

Users can add bike details to the database, including the bike's name, brand, category, price, description, quantity, stock status, and timestamps for creation and updates. The category field is restricted to specific predefined values, ensuring that only valid categories are allowed.

### 2. Get All Bikes

Users can get all bikes that are stored in the database. They receive two types of data one is the filtered data based on their query, and the other is the unfiltered data. If  users provide any query, it is applied to the name, category, or brand fields to filter the data. If no query is provided, all data is returned without any filtering

### 3. Get a Specific Bike

Users also get the details of a specific bike that is stored in the database.By providing the bikes _id user can access the details of that particular bike.

### 4. Update a Bike

Users can update the details of a specific bike using the bike's _id. They can modify any of the fields . When a bike is updated, the timestamp is saved in the updatedAt field.

### 5. Delete a Bike

This website allows users to delete any bike's infomration. By providing the bikes _id user can delete the details of any specific bike.

### 6. Order a Bike

This bike website also allows users to order bikes. When recived an order the system first checks  the bike's quantity. If the quantity is sufficient the user can proceed with the order. When a successful order is made the product quantity is reduced accordingly. If the product quantity reaches 0 the isStock field is updated to false. Additionally, the system calculates the total price for a successful order.

### 7. Total Revenue

User alos calculate the total revenue from all orders. The system calculate the sum of the values of the total price fields from all orders.
