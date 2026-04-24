CREATE TABLE IF NOT EXISTS meeting_packages (
    id TEXT PRIMARY KEY,
    projectName TEXT NOT NULL,
    department TEXT NOT NULL,
    startDate TEXT NOT NULL,
    endDate TEXT NOT NULL,
    location TEXT,
    attendees INTEGER DEFAULT 1,
    eventDays INTEGER DEFAULT 1,
    costPerAttendee INTEGER DEFAULT 0,
    additionalCost INTEGER DEFAULT 0,
    totalCost INTEGER DEFAULT 0,
    notes TEXT,
    createdBy TEXT,
    createdAt TEXT
);

CREATE INDEX idx_meeting_packages_project ON meeting_packages(projectName);
CREATE INDEX idx_meeting_packages_dates ON meeting_packages(startDate, endDate);