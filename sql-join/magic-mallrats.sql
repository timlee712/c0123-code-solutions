select f.title,
       c."firstName",
       c."lastName"
  from rentals as r
  join inventory as i using ("inventoryId")
  join customers as c using ("customerId")
  join films as f using ("filmId")
  where f.title = 'Magic Mallrats';
