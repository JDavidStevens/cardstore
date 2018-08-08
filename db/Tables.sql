Create table Products(
    product_id Serial Primary Key Not Null,
    product_name Varchar(50),
    product_description Varchar(50),
    price decimal);

create table picture(
    picture_id Serial Primary Key Not Null,
    image text,
    product_description Varchar(50),
    foreign key(product_description)references Products(product_description));

Create table Customers(
    id serial primary key not null,
    auth_id text,
    name Varchar(75),
    email Varchar(75),
    picture text
    );