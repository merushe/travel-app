-- Insert all users with default password 'password123'
-- All users will need to change password on first login

-- Managers (Sub Approval)
INSERT OR REPLACE INTO users (email, name, password, role, division, needPasswordChange) VALUES 
('muhammad.salman@biaenergi.com', 'Muhammad Salman', 'password123', 'manager', 'Product Development', 1),
('mohammad.rizki@biaenergi.com', 'Mohammad Rizki', 'password123', 'manager', 'Service Delivery', 1),
('laras.setyowinanti@biaenergi.com', 'Laras Setyowinanti', 'password123', 'manager', 'Business Administration', 1);

-- Main Approver
INSERT OR REPLACE INTO users (email, name, password, role, division, needPasswordChange) VALUES 
('achmad.oskar@biaenergi.com', 'Achmad Oskar Wiriadidjaja', 'password123', 'manager', 'Management', 1);

-- Finance
INSERT OR REPLACE INTO users (email, name, password, role, division, needPasswordChange) VALUES 
('finance@biaenergi.com', 'Finance Team', 'password123', 'finance', 'Finance', 1);

-- Admin
INSERT OR REPLACE INTO users (email, name, password, role, division, needPasswordChange) VALUES 
('admin@biaenergi.com', 'Administrator', 'password123', 'admin', 'Management', 1);

-- Employees (Service Delivery)
INSERT OR REPLACE INTO users (email, name, password, role, division, needPasswordChange) VALUES 
('aldo.sutrisno@biaenergi.com', 'Aldo Sutrisno', 'password123', 'employee', 'Service Delivery', 1),
('anggie.fioerella@biaenergi.com', 'Anggie Fioerella', 'password123', 'employee', 'Service Delivery', 1),
('aprizqi.ramadhani@biaenergi.com', 'Aprizqi Ramadhani', 'password123', 'employee', 'Service Delivery', 1),
('arsandha.santosa@biaenergi.com', 'Arsandha Santosa', 'password123', 'employee', 'Service Delivery', 1),
('fadhli.ikram@biaenergi.com', 'Fadhli Ikram', 'password123', 'employee', 'Service Delivery', 1),
('fauza.helmy@biaenergi.com', 'Fauza Helmy', 'password123', 'employee', 'Service Delivery', 1),
('firdha.maulidya@biaenergi.com', 'Firdha Maulidya', 'password123', 'employee', 'Service Delivery', 1),
('gini.rahmawati@biaenergi.com', 'Gini Rahmawati', 'password123', 'employee', 'Service Delivery', 1),
('hanz.seca@biaenergi.com', 'Hanz Seca', 'password123', 'employee', 'Service Delivery', 1),
('heri.sumartanto@biaenergi.com', 'Heri Sumartanto', 'password123', 'employee', 'Service Delivery', 1),
('kevin.febri@biaenergi.com', 'Kevin Febri', 'password123', 'employee', 'Service Delivery', 1),
('daffa.adriansyah@biaenergi.com', 'Daffa Adriansyah', 'password123', 'employee', 'Service Delivery', 1),
('mahardhyka.prakasha@biaenergi.com', 'Mahardhyka Prakasha', 'password123', 'employee', 'Service Delivery', 1),
('martin.parulian@biaenergi.com', 'Martin Parulian', 'password123', 'employee', 'Service Delivery', 1),
('muhamad.zidan@biaenergi.com', 'Muhamad Zidan', 'password123', 'employee', 'Service Delivery', 1),
('najwa.nurhaliza@biaenergi.com', 'Najwa Nurhaliza', 'password123', 'employee', 'Service Delivery', 1),
('rafi.muchamad@biaenergi.com', 'Rafi Muchamad', 'password123', 'employee', 'Service Delivery', 1),
('sabrina.aulia@biaenergi.com', 'Sabrina Aulia', 'password123', 'employee', 'Service Delivery', 1),
('triwidya.nayaprabha@biaenergi.com', 'Triwidya Nayaprabha', 'password123', 'employee', 'Service Delivery', 1);

-- Employees (Product Development)
INSERT OR REPLACE INTO users (email, name, password, role, division, needPasswordChange) VALUES 
('ade.suryadana@biaenergi.com', 'Ade Suryadana', 'password123', 'employee', 'Product Development', 1),
('arby.rusman@biaenergi.com', 'Arby Rusman', 'password123', 'employee', 'Product Development', 1),
('asep.yan@biaenergi.com', 'Asep Yan', 'password123', 'employee', 'Product Development', 1),
('azka.fitria@biaenergi.com', 'Azka Fitria', 'password123', 'employee', 'Product Development', 1),
('dinar.hidayat@biaenergi.com', 'Dinar Hidayat', 'password123', 'employee', 'Product Development', 1),
('farhan.andiejanto@biaenergi.com', 'Farhan Andiejanto', 'password123', 'employee', 'Product Development', 1),
('geraldo.hatigoran@biaenergi.com', 'Geraldo Hatigoran', 'password123', 'employee', 'Product Development', 1),
('haryo.indrasmoro@biaenergi.com', 'Haryo Indrasmoro', 'password123', 'employee', 'Product Development', 1),
('ibrahim@biaenergi.com', 'Ibrahim', 'password123', 'employee', 'Product Development', 1),
('jehua.dewa@biaenergi.com', 'Jehua Dewa', 'password123', 'employee', 'Product Development', 1),
('ardhana.wahyu@biaenergi.com', 'Ardhana Wahyu', 'password123', 'employee', 'Product Development', 1),
('musyaffa.choirun@biaenergi.com', 'Musyaffa Choirun', 'password123', 'employee', 'Product Development', 1),
('naufal.yassar@biaenergi.com', 'Naufal Yassar', 'password123', 'employee', 'Product Development', 1),
('rafif.syam@biaenergi.com', 'Rafif Syam', 'password123', 'employee', 'Product Development', 1),
('rahmat.hafis@biaenergi.com', 'Rahmat Hafis', 'password123', 'employee', 'Product Development', 1),
('yadhit.prasetya@biaenergi.com', 'Yadhit Prasetya', 'password123', 'employee', 'Product Development', 1);

-- Employees (Business Administration)
INSERT OR REPLACE INTO users (email, name, password, role, division, needPasswordChange) VALUES 
('indra.gunawan@biaenergi.com', 'Indra Gunawan', 'password123', 'employee', 'Business Administration', 1),
('gatot.arozi@biaenergi.com', 'Gatot Arozi', 'password123', 'employee', 'Business Administration', 1),
('nandini.widyadhari@biaenergi.com', 'Nandini Widyadhari', 'password123', 'employee', 'Business Administration', 1),
('nur.sahrul@biaenergi.com', 'Nur Sahrul', 'password123', 'employee', 'Business Administration', 1),
('nyoman.suyasa@biaenergi.com', 'Nyoman Suyasa', 'password123', 'employee', 'Business Administration', 1),
('rmersiana@biaenergi.com', 'Ramina Mersiana', 'password123', 'employee', 'Business Administration', 1),
('teguh.ridwan@biaenergi.com', 'Teguh Ridwan', 'password123', 'employee', 'Business Administration', 1),
('dondy.dwiguntia@biaenergi.com', 'Dondy Dwiguntia', 'password123', 'employee', 'Business Administration', 1);