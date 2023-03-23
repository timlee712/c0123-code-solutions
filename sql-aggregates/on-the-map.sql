select co.name as countries,
       count(c."cityId") as cities
  from countries as co
  join cities as c using ("countryId")
  group by co.name;
