# Fullstack Developer Exercise

The goal of this exercise is to demonstrate ability to work with different backend/frontend technologies while incorporating slightly lesser known libraries.

## Task
1. Implement `AbrPersonFavoriteColor` [stimulus](https://stimulusjs.org/) controller, such that favorite color is fetched for the selected ABR person when the "Get Favorite Color" button is pressed.
2. Color information is stored in a [SQLite database](data/database.sqlite).
3. The controller should fetch color data by making an AJAX request to [api/endpoint.php](api/endpoint.php) where PHP will be used to load the SQLite database file and return the appropriate color name.
4. Once the color is fetch by the controller, it should be outputted below the form with the user name and color.
5. Color value should animate in and out. (most basic fade in/out animation is fine)

## Requirements
- NPM 6.0+
- Apache server with PHP 7.0+
- PHP should have pdo_sqlite module enabled
- Chrome 70+

## Development setup
- Run `npm install` inside [public](public)

## Database Schema + Data
```
TABLE: abr_person
+----+--------+------------+
| id | name   | color_name |
+----+--------+------------+
| 1  | Andrej | Blue       |
+----+--------+------------+
| 2  | Andrew | Red        |
+----+--------+------------+
| 3  | James  | Green      |
+----+--------+------------+
| 4  | Thomas | Orange     |
+----+--------+------------+
| 5  | Kayla  | Purple     |
+----+--------+------------+
```
