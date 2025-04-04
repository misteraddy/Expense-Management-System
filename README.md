# Expense Management System  

## Overview  
The **Expense Management System** is a monolithic web application designed to help individuals efficiently track, manage, and analyze their daily expenses. By eliminating manual expense tracking, the system enhances transparency, helps users maintain better control over their finances, and streamlines financial planning.

## Features  
- **User Management**: Secure authentication and authorization for users.  
- **Expense Tracking**: Add, update, and manage expenses efficiently.  
- **Category Management**: Categorize expenses for better organization.  
- **Report Generation**:
  - Generate reports for expense analysis using **pie charts**.
  - Generate **PDF reports** (similar to bank statements).  
  - Send expense reports via **email** directly to the user.  

## Architecture  
The system follows a **monolithic architecture**, ensuring scalability, flexibility, and maintainability. The application is modularized into the following key components:  

1. **User Module** – Manages user authentication, roles, and profiles.  
2. **Expense Module** – Handles expense creation, updates, and tracking.  
3. **Category Module** – Allows categorization of expenses for structured reporting.  
4. **Report Module** –
   - Generate reports using **pie charts** for users.
   - Generates **PDF reports** for users.  
   - Allows users to send reports via **email**.  

##  Tech Stack  
- **Frontend**: React, Bootstrap  
- **Backend**: Java (Spring Boot)  
- **Database**: MySQL   
- **Authentication**:  Spring Security  
- **PDF Generation**: iText  
- **Email Service**:  Spring Boot Mail  
