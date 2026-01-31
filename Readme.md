# IT3040 - Assignment 1: Test Automation Project
**System:** SwiftTranslator (Singlish to Sinhala)
**Student ID:** IT23683754

## 📌 Project Overview
This repository contains the automated test suite for **Assignment 1 (IT3040 - ITPM)**. The project utilizes **Playwright** to perform functional and UI testing on the [SwiftTranslator](https://www.swifttranslator.com/) application.

The automation covers:
* Positive functional scenarios (Simple, Compound, Complex sentences).
* Negative functional scenarios (robustness against typos, numbers, and symbols).
* UI validation (Real-time output updates).

## ⚙️ Prerequisites
Before running the tests, ensure you have the following installed:
* **Node.js** (v14 or higher)
* **npm** (Node Package Manager)

## 🚀 Installation Instructions
1.  **Clone the repository**:
    ```bash
    git clone [https://github.com/Wishal-Gamage/IT3040-Assignment1-IT23683754.git](https://github.com/Wishal-Gamage/IT3040-Assignment1-IT23683754.git)
    cd IT3040-Assignment1-IT23683754
    ```

2.  **Install project dependencies:**
    This command installs Playwright and required libraries.
    ```bash
    npm install
    ```

3.  **Install Playwright Browsers:**
    ```bash
    npx playwright install chromium
    ```

## ▶️ How to Run Tests
This project is configured to run on **Google Chrome (Chromium)**. To ensure stability and prevent server blocking (HTTP 429/Connection Reset), tests are configured to run sequentially (1 worker).

### **Option 1: Run All Tests (Recommended)**
This will execute all test cases in "Headed" mode (you will see the browser open).
```bash
npx playwright test --headed