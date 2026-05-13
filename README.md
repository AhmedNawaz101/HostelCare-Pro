# HostelCare Pro

HostelCare Pro is a role-based hostel management platform that streamlines student complaints, warden and staff workflows, notices, and reporting. The system combines Spring Boot backend services with PostgreSQL persistence, Flyway migrations, secure role-access control, and responsive HTML/CSS/JavaScript interfaces.

## Technologies Used

- Java 17
- Spring Boot 3.2
- Spring Security
- Spring Data JPA
- Spring Validation
- Flyway Database Migrations
- PostgreSQL
- iText PDF generation
- HTML, CSS, JavaScript
- REST API architecture

## Key Features

- Multi-role access for Admin, Warden, Staff, and Student users
- Complaint submission, tracking, assignment, escalation, and status updates
- Notice board management with audience targeting
- Monthly complaint reporting and PDF report generation
- Role-based security enforced by Spring Security
- PostgreSQL-backed persistence with Flyway schema migrations
- Seeded demo accounts for quick launch and testing

## Project Structure

- `backend/` - Spring Boot application
- `backend/src/main/resources/static/` - embedded static frontend pages
- `frontend/` - standalone HTML/CSS/JS prototypes and static client pages
- `db/` - SQL scripts and database creation files

## Setup

1. Install Java 17 and PostgreSQL.
2. Create a database named `hmsdb` and a user with credentials matching `application.yml`.
3. In `backend/src/main/resources/application.yml`, verify the datasource URL, username, and password.
4. Run the Spring Boot application from the `backend/` folder.

## Default Seed Users

- `admin` / `password` (ADMIN)
- `student1` / `password` (STUDENT)
- `warden1` / `password` (WARDEN)
- `staff1` / `password` (STAFF)

## Running

From the `backend/` folder:

```bash
mvn spring-boot:run
```

Then access the application on `http://localhost:8080`.

## Professional Project Name Suggestion

**HostelCare Pro**

## 350-Character Description

HostelCare Pro is a secure role-based hostel management platform that centralizes student issue reporting, complaint tracking, notice distribution, and administrator reporting. Built with Spring Boot, PostgreSQL, Flyway, and a static HTML/JavaScript user interface, it supports admin, warden, staff, and student portals.
