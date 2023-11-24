USE `web-db`;

-- Tiếp tục với các câu lệnh INSERT khác tương tự


-- Insert users

INSERT INTO Users (id, displayName, username, email, password, isAdmin, createdAt, updatedAt) VALUES
(1, 'Nguyet', 'NguyetLe', 'nguyetle@gmail.com', '123456', 0, '2023-11-18 17:16:35', '2023-11-18 17:16:35'),
(2, 'Vinh', 'DuyVinh', 'vinh@gmail.com', '123456', 1, '2023-11-18 17:17:23', '2023-11-18 17:17:23'),
(3, 'Thai', 'ThaiDui', 'thai@gmail.com', '123456', 0, '2023-11-18 17:16:35', '2023-11-18 17:16:35');
-- Insert favorite foods
