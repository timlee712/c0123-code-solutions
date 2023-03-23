select c."firstName",
       c."lastName",
       sum(p.amount) as "total paid"
  from customers as c
  join payments as p using ("customerId")
  group by c."customerId"
  order by "total paid" desc,
            c."firstName" asc;
