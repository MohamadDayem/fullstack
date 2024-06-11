-- Insert data into role table
INSERT INTO
    role (role)
VALUES
    ('Admin'),
    ('Documentalist'),
    ('Adherent');

-- Insert data into adherent table
INSERT INTO
    user (
        firstname,
        lastname,
        address,
        phone,
        email,
        password,
        role_id
    )
VALUES
    (
        'Alice',
        'Dupont',
        '123 Rue de la Paix, Paris',
        123456789,
        'alice.dupont@example.com',
        'qsdfqsdfqsdfq',
        3
    ),
    (
        'Bob',
        'Martin',
        '456 Avenue des Champs, Lyon',
        987654321,
        'bob.martin@example.com',
        'qsdfqsdfqsdf',
        3
    ),
    (
        'Charlie',
        'Durand',
        '789 Boulevard Saint-Michel, Marseille',
        555123456,
        'charlie.durand@example.com',
        'qsdfqdfqsdf',
        3
    ),
    (
        'Diane',
        'Bernard',
        '101 Rue du Faubourg, Toulouse',
        444987123,
        'diane.bernard@example.com',
        'qsdfqsdfqsdf',
        2
    ),
    (
        'Eve',
        'Lemoine',
        '202 Place de la Victoire, Bordeaux',
        333789654,
        'eve.lemoine@example.com',
        'qdsfqsdfqsdf',
        1
    );

-- Insert data into category table
INSERT INTO
    category (type, level, language, address)
VALUES
    ('Livre', 'Facile', 'Français', 'Section A'),
    ('Livre', 'Avancé', 'Anglais', 'Section B'),
    ('Revue', 'Intermédiaire', 'Français', 'Section C'),
    ('DVD', 'Débutant', 'Italien', 'Section D'),
    ('Livre', 'Expert', 'Anglais', 'Section E'),
    ('Revue', 'Facile', 'Français', 'Section F'),
    ('DVD', 'Intermédiaire', 'Espagnol', 'Section G'),
    ('Livre', 'Avancé', 'Allemand', 'Section H'),
    ('Revue', 'Débutant', 'Italien', 'Section I'),
    ('DVD', 'Expert', 'Français', 'Section J');

-- Insert data into ouvrage table
INSERT INTO
    ouvrage (
        name,
        author,
        imageURL,
        publication_date,
        category_id
    )
VALUES
    (
        'Le Petit Prince',
        'Antoine de Saint-Exupéry',
        'https://m.media-amazon.com/images/I/710wth0vXZL._AC_UF1000,1000_QL80_.jpg',
        '2024-05-01',
        1
    ),
    (
        'A Brief History of Time',
        'Stephen Hawking',
        'https://m.media-amazon.com/images/I/91ebghaV-eL._AC_UF1000,1000_QL80_.jpg',
        '2024-04-20',
        2
    ),
    (
        'National Geographic',
        'Multiple Authors',
        'https://m.media-amazon.com/images/I/61uRQCNO5-L._AC_UF1000,1000_QL80_.jpg',
        '2024-03-10',
        3
    ),
    (
        'La Dolce Vita',
        'Federico Fellini',
        'https://m.media-amazon.com/images/I/71gRX2YlV-L._AC_UF1000,1000_QL80_.jpg',
        '2024-02-01',
        4
    ),
    (
        'Artificial Intelligence',
        'John McCarthy',
        'https://m.media-amazon.com/images/I/41CtbEUvoVL._AC_UF1000,1000_QL80_.jpg',
        '2024-01-15',
        5
    ),
    (
        'Science et Vie',
        'Multiple Authors',
        'https://m.media-amazon.com/images/I/51xSeKUWqXL._AC_UF1000,1000_QL80_.jpg',
        '2024-01-10',
        6
    ),
    (
        'El Laberinto del Fauno',
        'Guillermo del Toro',
        'https://m.media-amazon.com/images/I/71jjgIV4BDL._AC_UF1000,1000_QL80_.jpg',
        '2024-03-20',
        7
    ),
    (
        'Der Spiegel',
        'Multiple Authors',
        'https://m.media-amazon.com/images/I/91moVGHL7mL._AC_UF1000,1000_QL80_.jpg',
        '2024-04-25',
        8
    ),
    (
        "L'arte Italiana",
        'Various',
        'https://m.media-amazon.com/images/I/716Rs9HQFXL._AC_UF1000,1000_QL80_.jpg',
        '2024-05-05',
        9
    ),
    (
        'César et Rosalie',
        'Claude Sautet',
        'https://m.media-amazon.com/images/I/518x16D0AWL._AC_UF1000,1000_QL80_.jpg',
        '2024-06-10',
        10
    );

-- Insert data into reservation table
INSERT INTO
    reservation (reservation_date, user_id, ouvrage_id)
VALUES
    ('2024-05-20 15:00:00', 1, 2),
    ('2024-05-25 10:00:00', 2, 3),
    ('2024-05-30 09:00:00', 3, 4),
    ('2024-06-01 11:00:00', 4, 5),
    ('2024-06-05 14:00:00', 5, 1),
    ('2024-06-10 10:00:00', 1, 6),
    ('2024-06-15 12:00:00', 2, 7),
    ('2024-06-20 09:30:00', 3, 8),
    ('2024-06-25 14:30:00', 4, 9),
    ('2024-06-30 16:00:00', 5, 10);

-- Insert data into lending table
INSERT INTO
    lending (lending_date, return_date, user_id, ouvrage_id)
VALUES
    (
        '2024-05-01 10:00:00',
        '2024-05-15 10:00:00',
        1,
        1
    ),
    (
        '2024-04-20 14:30:00',
        '2024-05-20 14:30:00',
        2,
        2
    ),
    (
        '2024-03-10 09:00:00',
        '2024-04-10 09:00:00',
        3,
        3
    ),
    (
        '2024-02-01 12:00:00',
        '2024-03-01 12:00:00',
        4,
        4
    ),
    (
        '2024-01-15 11:00:00',
        '2024-02-15 11:00:00',
        5,
        5
    ),
    (
        '2024-01-10 13:00:00',
        '2024-02-10 13:00:00',
        1,
        6
    ),
    (
        '2024-03-20 17:00:00',
        '2024-04-20 17:00:00',
        2,
        7
    ),
    (
        '2024-04-25 16:00:00',
        '2024-05-25 16:00:00',
        3,
        8
    ),
    (
        '2024-05-05 10:00:00',
        '2024-06-05 10:00:00',
        4,
        9
    ),
    (
        '2024-06-10 14:00:00',
        '2024-07-10 14:00:00',
        5,
        10
    );