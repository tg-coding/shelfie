update table products
set img = $2,
    name = $3,
    price = $4,
where id = $1;