# Reservoir Dogs Challenge

The goal of this exercise is to demonstrate ability to work with different backend/frontend technologies.

![index.html](screenshot.png)

## Task
Reveal the real name of robbers given their alias.

1. Clone this repository.
2. Implement `AliasMapper` [stimulus](https://stimulusjs.org/) controller, such that the real name is fetched for selected alias when the "Reveal Name" button is pressed.
3. Robber information is stored in a [SQLite database](data/database.sqlite) in `robber` table.
4. The controller should fetch robber data by making an AJAX request to [api/endpoint.php](api/endpoint.php) where PHP should be used to load the SQLite database file and return the matching alias.
5. Once the data is fetched by the controller, it should be outputted below the form with the alias and name.
6. Old alias value should animate out and new alias value should animate in. (basic fade in/out animation is fine)
7. If there is no name for given alias, write `<unknown>`.

- There is no time limit on this, but take at least a solid hour to work on it.
- Most of the time will probably be spent on getting familiar with languages or libraries.
- Pseudo code and general thoughts on what could be done given more time is welcomed in the code.
- Take into account security and edge cases where needed.

## Support
If there are any questions, you can open an issue or send an email to [Andrej Pavlovic](mailto:apavlovic@allboatsrise.com)

## Requirements
- NPM 6.0+
- Apache server with PHP 7.0+
- PHP should have pdo_sqlite module enabled
- Chrome 70+ (doesn't have to run in other browsers)

## Development setup
- Run `npm install` inside [public](public) folder.
- Server DocumentRoot should be set to [public](public) folder.

## Database Schema + Data
```
TABLE: robber
+----+------------+----------+
| id | alias      | name     |
+----+------------+----------+
| 1  | Mr. White  | Larry    |
+----+------------+----------+
| 2  | Mr. Orange | Freddy   |
+----+------------+----------+
| 3  | Mr. Blonde | Vic Vega |
+----+------------+----------+
| 4  | Mr. Pink   |          |
+----+------------+----------+
| 5  | Mr. Blue   |          |
+----+------------+----------+
| 6  | Mr. Brown  |          |
+----+------------+----------+
```

## Context
[![Why Am I Mr. Pink? - Reservoir Dogs (8/12) Movie CLIP (1992) HD](https://img.youtube.com/vi/4W5KhfJHF_4/0.jpg)](https://www.youtube.com/watch?v=4W5KhfJHF_4)
