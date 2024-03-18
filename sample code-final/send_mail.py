import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Email configuration
sender_email = "abcbank413@gmail.com"
receiver_email = "ssssanthoshsiva@gmail.com"
password = "uvksorglthxtkpoe"

# Create message object
message = MIMEMultipart()
message["From"] = sender_email
message["To"] = receiver_email
message["Subject"] = "Fraudulent Transaction Alert"

# Email content
body = """
Dear Santhoshsiva,

We regret to inform you that a fraudulent transaction has been identified involving your account. Here are the details:

Buyer:
- Username: Sathyavardhan
- IP Address: 103.12.143
- Paid amount: ₹50
- Requested amount: ₹100

Regrettably, during this transaction, a loss of ₹50 occurred.

Rest assured, your account has been secured, and appropriate measures have been taken by ABC Bank.

Updated Balance:
- Old balance: ₹500.00
- New balance: ₹550.00

The loss amount of ₹50 will be refunded shortly.

Should you have any questions or concerns, please don't hesitate to reach out to us.

Sincerely,
ABC Bank.
"""

# Attach the email body
message.attach(MIMEText(body, "plain"))

# Connect to SMTP server
with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:

#with smtplib.SMTP_SSL("smtp.gmail.com", 587) as server:
    # Login to sender's email
    server.login(sender_email, password)
    # Send email
    server.sendmail(sender_email, receiver_email, message.as_string())
    print("Email sent successfully!")
