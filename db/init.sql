create table products(
    id serial primary key,
    name varchar(25),
    price decimal,
    img text
);

select * from products