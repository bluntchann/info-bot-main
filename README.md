# info-bot-main
s6 mini project

# InfoBot

InfoBot is an intelligent chatbot and academic management system tailored for IT departments. It streamlines tasks such as accessing academic resources, generating timetables, and facilitating placement-related activities. With role-based access, InfoBot ensures smooth coordination between students, teachers, and the HOD.

---

## Features

### 1. Question Paper Schemes, Syllabi, and Faculty Profiles
- **Students**: View question paper schemes, syllabi, and faculty profiles with placement offers specific to the IT department.

### 2. Placement Section
- Access detailed information about:
  - Placement companies.
  - Eligibility criteria.
  - Placement schedules.

### 3. Timetable Generator
- **For Students**: Personalized timetables including subjects, lab hours, minors, and more.
- **For Teachers**: Manage teaching schedules, mentorship hours, and lab timings.
- **Restrictions**: Teachers outside the department are restricted from unauthorized slot scheduling.

### 4. Note Uploads
- **Teachers**: Upload and update short notes, study materials, and reference guides.

---

## Role-Based Access

### Student Module
- Read-only access to:
  - Question papers, syllabi, faculty profiles.
  - Timetables and placement details.

### Teacher Module
- Upload and update notes for subjects.
- Assign subjects, lab hours, and mentorship sessions.

### HOD Module
- Add and update faculty records.
- Manage teacher schedules to avoid conflicts.
- Approve or reject teacher updates.

---

## Fixed Timetable Format
- **Structure**:
  - **Columns**: Day, Time Slot, Subject, Lab Hours, Faculty Name, Room No.
- **Rules**:
  - Unauthorized scheduling by teachers outside the department is strictly prohibited.

---

## Technical Stack

- **Backend**: Python (FastAPI)
- **Frontend**: React.js with Vite, Tailwind CSS
- **Database**: PostgreSQL / MySQL

---

## System Design

### UML Diagrams
- **Classes**:
  - `Student`: `viewTimetable()`, `getPlacementDetails()`, `viewSyllabus()`
  - `Teacher`: `uploadNotes()`, `allotSubjects()`, `scheduleMentoring()`, `manageLabHours()`
  - `HOD`: `addNewFaculty()`, `approveUpdates()`, `manageTeacherSchedule()`
- **Sequence Diagram**:
  - Outlines interactions among students, teachers, and HODs.

### Flow Diagram
- Visualizes the process for:
  - Timetable generation.
  - Role-based data management.

---

## How to Run the Project

### Prerequisites
- Python 3.9+
- PostgreSQL or MySQL database
- Node.js (for frontend)
- Git

### Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/<your-username>/InfoBot.git
   cd InfoBot


main project clone repository
