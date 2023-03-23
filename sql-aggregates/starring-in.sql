select g.name as genre,
       count(fg."filmId") as "count"
  from genres as g
  join "filmGenre" as fg using ("genreId")
  join films as f using ("filmId")
  join "castMembers" as cm using ("filmId")
  join actors as a using ("actorId")
  where a."actorId" = 178
  group by g.name;
