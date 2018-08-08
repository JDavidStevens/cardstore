Create table Products(
    product_id Serial Primary Key Not Null,
    product_name Varchar(50),
    product_description Varchar(50),
    price decimal,
    picture Text);

Create table Customers(
    id serial primary key not null,
    auth_id text,
    name Varchar(75),
    email Varchar(75),
    picture text
    );