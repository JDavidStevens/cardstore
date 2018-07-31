Create table Customers(
    customer_id Serial Primary Key Not Null,
    first_name Varchar(40),
    last_name Varchar(45),
    email Varchar(75),
    product_id Integer,
    Foreign Key(product_id) References Products(product_id)
    );

Create table Products(
    product_id Serial Primary Key Not Null,
    product_name Varchar(50),
    image Text,
    price decimal

)


-- need help with Foreign Key