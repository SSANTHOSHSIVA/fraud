from twilio.rest import Client

# Your Twilio Account SID and Auth Token
account_sid = 'AC06bcb5b7c325043bd70f164ecf034d8a'
auth_token = 'ab12b3ad1177a6fded6d3e3aba5ae86f'

# Create a Twilio client
client = Client(account_sid, auth_token)

# Recipient's WhatsApp number (include country code, e.g., 'whatsapp:+1234567890')
to_whatsapp_number = 'whatsapp:+919865563716'

# Message content
message_body = 'Hello!'

# Send WhatsApp message
message = client.messages.create(
    from_='whatsapp:+919566596860',
    body=message_body,
    to=to_whatsapp_number
)

print(f"Message sent successfully! SID: {message.sid}")
