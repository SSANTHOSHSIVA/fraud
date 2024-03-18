
import nexmo

# Your Nexmo API key and API secret
api_key = '18412d48'
api_secret = 'sNjQ85ttHB7eSTzy'

# Create a Nexmo client
client = nexmo.Client(key=api_key, secret=api_secret)

# Recipient's phone number (include country code, e.g., '+1234567890')
to_number = '+919566596860'

# Message content
message = 'Dear Santhoshsiva, We regret to inform you that a fraudulent transaction has been identified involving your account. Here are the details: Buyer: - Username: Sathyavardhan - IP Address: 103.12.143 - Paid amount: ₹50 - Requested amount: ₹100 Regrettably, during this transaction, a loss of ₹50 occurred. Rest assured, your account has been secured, and appropriate measures have been taken by ABC Bank. Updated Balance: - Old balance: ₹500.00 - New balance: ₹550.00 The loss amount of ₹50 will be refunded shortly. Should you have any questions or concerns, please dont hesitate to reach out to us. Sincerely, ABC Bank.'

# Send SMS
response = client.send_message({
    'from': 'Python',
    'to': to_number,
    'text': message
})


# Check if the message was sent successfully
if response['messages'][0]['status'] == '0':
    print("Message sent successfully!")
else:
    print(f"Failed to send message. Error: {response['messages'][0]['error-text']}")
