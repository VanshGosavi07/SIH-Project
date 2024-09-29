
---

# AgriConnect: Smart Contract-Based Farming Platform

AgriConnect is a Django-based backend and React-based frontend web application designed to streamline the farming contract process. It provides a decentralized platform where farmers and contractors can create, negotiate, and manage farming contracts efficiently and transparently using blockchain technology.

## Table of Contents
1. [Overview](#overview)
2. [Key Features](#key-features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Technologies Used](#technologies-used)
6. [Links](#links)

## Overview
AgriConnect addresses key issues in contract farming, such as lack of a centralized platform, limited access to contracts, and the interference of middlemen. This platform leverages blockchain for secure contract execution, AI for intelligent contract suggestions, and supports seamless negotiation between farmers and contractors.

## Key Features
- **Centralized Contract Hub**: A platform for diverse contract types.
- **Blockchain-based Contract Management**: Ensures transparency and automated execution.
- **AI-Powered Negotiation**: Suggests fair terms and values during negotiation.
- **Smart Contract Suggestions**: Uses AI to provide contract recommendations based on user profiles.
- **Secure Payments**: Blockchain-based payment gateway ensures secure transactions.
- **End-to-End Security**: 2FA, encryption, and real-time threat detection.

## Installation

### 1. Backend (Django)
1. **Clone the Repository**:
    ```bash
    git clone https://github.com/VanshGosavi07/SIH-Project.git
    cd Backend/Contract_Based_Farming
    ```

2. **Create a Virtual Environment**:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. **Install Dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

4. **Set Up Environment Variables**:
    Create a `.env` file with the following keys:
    ```bash
    SECRET_KEY=your_secret_key
    BLOCKCHAIN_API_KEY=your_blockchain_key
    ```

5. **Run Database Migrations**:
    ```bash
    python manage.py migrate
    ```

6. **Run the Development Server**:
    ```bash
    python manage.py runserver
    ```

### 2. Frontend (React)
1. **Navigate to Frontend Directory**:
    ```bash
    cd D:\Project\SIH Project\Frontend\contract
    ```

2. **Install Node Dependencies**:
    ```bash
    npm install
    ```

3. **Start the React Application**:
    ```bash
    npm start
    ```

## Usage

### 1. Access the Application:
- **Backend (Django)**: Visit `http://127.0.0.1:8000` to access the Django admin and API.
- **Frontend (React)**: Visit `http://localhost:3000` to interact with the frontend application.

### 2. Key Operations:
- **Register/Login**: Users can register or log in.
- **Create and Manage Contracts**: Farmers and contractors can search, negotiate, and manage contracts.
- **Profile Management**: Farmers and contractors can update their profiles and view contract histories.
- **Secure Payments**: Process payments securely through the integrated blockchain payment gateway.

## Technologies Used
- **Frontend**: React.js
- **Backend**: Django (Python)
- **Database**: SQLite (for development) or PostgreSQL (for production)
- **Blockchain**: Smart contracts for secure contract execution
- **AI/ML**: AI for contract suggestions and negotiation
- **Security**: End-to-End Encryption, Two-Factor Authentication (2FA)

## Links
- **GitHub Repository**: [AgriConnect](https://github.com/VanshGosavi07/SIH-Project)
- **ER Diagram**: [ER Diagram Link](https://drive.google.com/drive/folders/1QW0IVgeYEjx_2zXLhBXSwsHu0D6aa6Wu)
- **Figma Design**: [Figma Design Link](https://www.figma.com/proto/WkqhGEseccBr9Mh2zAQM3C/Contract_based_farming?node-id=1-6&node-type=frame&t=53CnNlr4muCblZXF-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A6)
- **Workflow and Tech Stack Diagram**: [Workflow and Tech Stack Link](https://drive.google.com/drive/folders/1LfYLuHNmBzyI5ofbA9PZeRMYagMKX3Rp?usp=drive_link)
- **Video Demonstration**: [YouTube Channel Link](https://youtube.com/@tech_saksham?si=3DPnqPh4KSeoILUT)

--- 

