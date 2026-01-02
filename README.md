🎂 Birthday Reminder Automation (n8n + Google Sheets)

An automated workflow built using n8n that sends birthday reminder emails one day before a person’s birthday, using data stored in Google Sheets.

This project demonstrates practical automation, date handling, conditional logic, and third-party integrations.

🚀 Features

📅 Runs automatically every day using Schedule Trigger  
📊 Reads birthday data from Google Sheets  
🧠 Filters records where birthday is tomorrow  
✉️ Sends a reminder email to a fixed recipient  
🔒 Secure setup (credentials not committed)

🛠 Tech Stack

n8n – Workflow automation  
Google Sheets API – Data source  
JavaScript (n8n Code node) – Date filtering logic  
Email (SMTP or Gmail node) – Notifications  
Git and GitHub – Version control  

🧩 Workflow Overview

1. Schedule Trigger  
   Runs once daily (for example, 5:00 PM IST)

2. Google Sheets (Read)  
   Fetches rows containing  
   name  
   birthday (DD/MM or YYYY-MM-DD)

3. Code Node (JavaScript)  
   Filters entries whose birthday is tomorrow

4. Email Node  
   Sends reminder email to a single configured email address

📧 Sample Email Content

Hi 👋  
This is a reminder that tomorrow is {{name}}’s birthday 🎂🎉

🔐 Security Notice

Credentials are NOT included in this repository

The following are intentionally excluded

Google OAuth credentials  
Email or SMTP credentials  
API keys or tokens  

You must configure these manually inside your n8n instance.

🧪 How to Use

1. Import workflow.json into your n8n instance  
2. Connect your Google Sheets credentials  
3. Connect your Email credentials  
4. Update  
   Spreadsheet ID  
   Sheet name  
   Recipient email  
5. Activate the workflow  

💡 Use Cases

Personal birthday reminders  
Team or HR birthday notifications  
Community or club member alerts  

📌 What This Project Demonstrates

Real-world automation design  
Working with external APIs  
Date manipulation and logic  
Clean and secure GitHub practices  

🙌 Author

Rajveer Singh  
Engineering Student | Automation and Web3 Enthusiast
