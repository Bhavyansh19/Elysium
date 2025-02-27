CREATE TABLE Bookings (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phoneNo VARCHAR(20) NOT NULL,
    resDate DATE NOT NULL,
    resTime TIME NOT NULL,
    noOfPeople INT NOT NULL,
    specialNotes TEXT
);
