Select p.product_name,c.name 
From products p
Join orders o on o.product_id=p.product_id
Join customers c on c.auth_id=o.auth_id;
