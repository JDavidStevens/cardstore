Select product_name from products p
Join order o on o.product_id=p.product_id
Join customer c on c.auth_id=p.auth_id
