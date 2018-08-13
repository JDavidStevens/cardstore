Create table Products(
    product_id Serial Primary Key Not Null,
    product_name Varchar(50),
    product_description Varchar(50),
    price decimal,
    picture text);



Create table Customers( 
    id serial primary key not null,
    auth_id text unique,
    name Varchar(75),
    email Varchar(75),
    picture text
    );

Create table Orders(
    order_id serial primary key not null,
    product_id int REFERENCES products(product_id),
    auth_id text REFERENCES customers(auth_id)
);