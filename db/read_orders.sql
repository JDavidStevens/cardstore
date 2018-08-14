Select p.product_name,c.name 
From order o
Join order o on o.product_id=p.product_id
Join customer c on c.auth_id=o.auth_id
