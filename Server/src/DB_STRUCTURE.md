# + REAL

## TABLAS
Character [{characters}]

Favorite

User

1 : 1
User 1 : 1 Favorite
Favorite 1 : 1 User

User [{userId:1, favId: 1}]


N : N
Favorite 1 : N Character
Character 1 : N Favorite

crea TABLA intermedia
FavoriteCharacter [{favId: 1,charId: 1}, {favId: 1,charId: 2}, {favId: 2,charId: 3} ]

---
## Lo que necesitamos para este PI
Characters

Characters <- Favorites

User

N : N
User -> Favorite