Movie Analytics Database Project
📌 Project Overview

The Movie Analytics Database is a relational database project designed to manage and analyze movie-related data using SQL.
It demonstrates strong concepts of database design, relationships, constraints, CRUD operations, joins, subqueries, and aggregate functions.

This project is suitable for learning and showcasing Database Systems fundamentals.

🗂️ Database Structure

The database consists of multiple interconnected tables to represent real-world movie analytics:

🔹 Core Tables

Users – Stores user information (name, email)

Movies – Stores movie details (title, genre, release year)

Ratings – Stores movie ratings given by users

WatchHistory – Tracks which user watched which movie and when

🔹 Extended Tables

Directors – Stores director information

Movie_Directors – Many-to-many relationship between movies and directors

Actors – Stores actor details

Movie_Actors – Many-to-many relationship between movies and actors

Reviews – Stores user reviews for movies

All tables use primary keys, foreign keys, and constraints to maintain data integrity.

🔗 Relationships Used

One-to-Many (Users → Ratings, Users → WatchHistory)

Many-to-Many (Movies ↔ Directors, Movies ↔ Actors)

Referential integrity enforced using FOREIGN KEY constraints

⚙️ Features Implemented

✔ Database creation and table design
✔ Data insertion with real-world examples
✔ Update and delete operations
✔ Filtering using WHERE and LIKE
✔ Sorting and limiting results
✔ Aggregate functions (COUNT, AVG)
✔ Grouping with GROUP BY and HAVING
✔ Complex joins (INNER, LEFT, RIGHT)
✔ Subqueries for advanced analytics

📊 Sample Queries Included

Movies released after 2010

Highest rated movie

Average rating per movie and per user

Total movies watched per year

Genre-wise movie count

Actors and directors with total movies

Users who gave the highest rating

Movie with the maximum number of ratings

🧠 Concepts Demonstrated

Relational Database Design

Normalization

SQL Constraints

Joins and Subqueries

Aggregate Functions

Data Analysis using SQL
