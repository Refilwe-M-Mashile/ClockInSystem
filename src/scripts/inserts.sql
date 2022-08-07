USE master;
GO
USE GirlHackDB;
GO
    --Employees Data
INSERT INTO
    dbo.Employers (
        FirstName,
        LastName,
        Rating,
        Reviews
    )
VALUES
    (
        'Refilwe',
        'Mashile',
        4,
        'Good Person, respects all employees'
    ),
    ('Gugu',
        'Mokwena',
        1,
        'Very rude.'
    ),
    (
        'Joshua',
        'Collins',
        5,
        'The best employee ever!!'
    )