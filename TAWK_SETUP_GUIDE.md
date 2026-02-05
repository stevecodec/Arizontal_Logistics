# Tawk.to Integration Guide

## ✅ Integration Complete!

Your Tawk.to live chat has been successfully integrated into your Arizontal Transportation Group website.

---

## 📍 What Was Changed

### 1. **Frontend/index.html**
- ✅ Added Tawk.to script at the bottom (before `</body>`)
- ✅ Added preconnect links for faster loading
- **Your Property ID:** `6983ffb72355191c39542ef3`
- **Widget ID:** `1jglptpv0`

### 2. **Frontend/src/App.tsx**
- ✅ Commented out custom `LiveChatWidget` component
- ✅ Tawk.to widget now loads automatically on all pages

### 3. **Frontend/src/views/cargo/components/RequirementsSection/RequirementsSection.tsx**
- ✅ Updated "Talk to us" button to open Tawk.to chat
- ✅ Uses `Tawk_API.maximize()` method

---

## 🚀 How to Use Tawk.to

### Access Your Dashboard
1. **Login:** https://dashboard.tawk.to
2. **Email:** Use the email you signed up with
3. **Dashboard:** You'll see all incoming chats here

### Mobile Apps
Download the mobile app to respond from anywhere:
- **iOS:** https://apps.apple.com/app/tawk-to/id661033442
- **Android:** https://play.google.com/store/apps/details?id=to.tawk.app

---

## 🎨 Customization Options

### 1. Change Widget Appearance
**Dashboard → Administration → Chat Widget**

**Brand Color:**
- Set to your brand color: `#d58630` (your orange)
- This will match your website design

**Widget Position:**
- Current: Bottom Right
- Options: Bottom Left, Left Side, Right Side

**Widget Style:**
- Bubble style (current)
- Button style
- Custom image

### 2. Customize Welcome Message
**Dashboard → Administration → Chat Widget → Pre-Chat Form**

Suggested welcome message:
```
Welcome to Arizontal Transportation Group! 👋

How can we help you today?
- Get a freight quote
- Become a carrier partner
- Track a shipment
- General inquiry
```

### 3. Set Up Pre-Chat Form (Optional)
**Dashboard → Administration → Chat Widget → Pre-Chat Form**

Collect information before chat starts:
- Name (required)
- Email (required)
- Phone
- Company
- How can we help you? (dropdown)
  - Get a quote
  - Carrier services
  - Track shipment
  - General inquiry

### 4. Set Business Hours
**Dashboard → Administration → Chat Widget → Status → Business Hours**

Configure your availability:
- **Monday-Friday:** 8:00 AM - 6:00 PM EST
- **Timezone:** America/New_York
- **After hours:** Show offline message or collect details

---

## 👥 Add Team Members

### Add Agents/Operators
**Dashboard → Administration → Agents**

1. Click "Add Agent"
2. Enter email address
3. Set role:
   - **Agent:** Can chat with visitors
   - **Admin:** Full access to all settings
   - **Owner:** Complete control

### Organize by Departments
**Dashboard → Administration → Departments**

Create departments for different teams:
- **Sales** - Handle quote requests
- **Operations** - Track shipments
- **Carrier Relations** - Assist carriers
- **Support** - General inquiries

---

## 🔔 Notifications Setup

### Desktop Notifications
**Dashboard → Settings → Notifications**

Enable:
- ✅ Sound notifications
- ✅ Desktop notifications (allow in browser)
- ✅ Email notifications (for missed chats)

### Email Alerts
**Dashboard → Settings → Email Notifications**

Configure:
- New chat started
- Missed chat
- Chat transcript
- Daily/weekly summary

---

## 💬 Using Tawk.to API (Advanced)

The widget supports JavaScript API for custom interactions:

### Open Chat Widget Programmatically
```javascript
// Already implemented in your "Talk to us" button
if (typeof window.Tawk_API !== 'undefined') {
  window.Tawk_API.maximize();
}
```

### Other Useful Methods
```javascript
// Minimize (close) the chat
window.Tawk_API.minimize();

// Hide the widget completely
window.Tawk_API.hideWidget();

// Show the widget
window.Tawk_API.showWidget();

// Set visitor name and email
window.Tawk_API.setAttributes({
  'name': 'John Doe',
  'email': 'john@example.com',
  'hash': 'hash-value'
}, function(error) {});

// Add custom tags
window.Tawk_API.addTags(['carrier', 'new-customer']);

// Track events
window.Tawk_API.addEvent('Quote Requested', {
  origin: 'Charlotte, NC',
  destination: 'Miami, FL'
});
```

### Listen to Events
```javascript
// Chat started
window.Tawk_API.onChatStarted = function() {
  console.log('Chat started');
  // Track in Google Analytics
  gtag('event', 'chat_started');
};

// Chat ended
window.Tawk_API.onChatEnded = function() {
  console.log('Chat ended');
};

// Widget loaded
window.Tawk_API.onLoad = function() {
  console.log('Tawk.to loaded');
};
```

---

## 📊 Analytics & Monitoring

### View Chat Metrics
**Dashboard → Monitoring**

Track:
- Total chats
- Average response time
- Customer satisfaction
- Busiest hours
- Agent performance

### Integrations
**Dashboard → Administration → Apps**

Connect with:
- **Google Analytics** - Track chat events
- **Slack** - Get notifications in Slack
- **Salesforce** - Sync contacts
- **Zapier** - Connect with 3000+ apps

---

## 🎯 Best Practices

### 1. Quick Responses
- **Goal:** Respond within 30 seconds
- **Use:** Canned responses for common questions
- **Setup:** Dashboard → Administration → Shortcuts

### 2. Professional Greeting
Set a greeting message:
```
Hi! Thanks for visiting Arizontal Transportation Group.

I'm [Your Name], how can I help you today?
```

### 3. Collect Information Early
Ask qualifying questions:
- "Are you looking for carrier services or shipping?"
- "What type of freight do you need to ship?"
- "What's your origin and destination?"

### 4. Use Tags
Tag conversations for easy filtering:
- `quote-request`
- `carrier-inquiry`
- `tracking`
- `complaint`
- `follow-up-needed`

### 5. Follow Up
For complex requests:
- Collect email/phone
- Send follow-up email
- Set reminders in Tawk.to

---

## 🔧 Troubleshooting

### Widget Not Showing?
1. Clear browser cache
2. Check browser console for errors
3. Verify script is loading: View Source → Search "tawk.to"
4. Disable ad blockers (some block chat widgets)

### Widget Showing Twice?
- Make sure you removed/commented out the custom LiveChatWidget
- Only one chat widget should be active

### Can't Receive Chats?
1. Check you're logged into dashboard
2. Verify agent status is "Online" (green)
3. Check browser notifications are enabled
4. Install mobile app for on-the-go access

### Customization Not Showing?
- Changes take 1-2 minutes to appear
- Hard refresh browser (Ctrl+Shift+R / Cmd+Shift+R)
- Clear cache

---

## 📱 Recommended Workflow

### For Your Team:

1. **Morning:**
   - Login to dashboard
   - Set status to "Online"
   - Review any missed chats from yesterday

2. **During Business Hours:**
   - Keep dashboard or mobile app open
   - Respond within 30 seconds
   - Use canned responses for speed
   - Tag conversations appropriately

3. **End of Day:**
   - Review open chats
   - Follow up on pending requests
   - Set status to "Away" with message:
     ```
     Thanks for reaching out! We're currently offline.
     
     Business Hours: Mon-Fri, 8AM-6PM EST
     
     Leave your message and we'll respond first thing tomorrow!
     ```

---

## 🎓 Training Resources

### Tawk.to Help Center
- **Documentation:** https://help.tawk.to
- **Video Tutorials:** https://www.youtube.com/c/tawkto
- **Community:** https://community.tawk.to

### Quick Tips
1. **Shortcuts:** Use keyboard shortcuts for faster responses
   - Alt+M: Maximize widget
   - Alt+H: Hide widget
   - Ctrl+Enter: Send message

2. **Canned Responses:** Create shortcuts like:
   - `/quote` → "I'd be happy to help with a freight quote..."
   - `/carrier` → "Thanks for your interest in joining our carrier network..."
   - `/track` → "Let me help you track your shipment..."

3. **Visitor Info:** Check right sidebar for:
   - Visitor location
   - Pages viewed
   - Time on site
   - Previous chats

---

## 🔐 Security & Privacy

### Secure Visitor Data
- All chats are encrypted (SSL/TLS)
- Data stored in secure data centers
- GDPR compliant
- HIPAA available on paid plans

### Remove Old Data
**Dashboard → Monitoring → Chats**
- Delete old conversations
- Export transcripts before deletion
- Set auto-deletion policies

---

## 💰 Pricing & Upgrades

### Current Plan: Free
**Includes:**
- ✅ Unlimited agents
- ✅ Unlimited chats
- ✅ Mobile apps
- ✅ Basic customization
- ✅ File sharing
- ✅ Canned responses

### Paid Plans (Optional)
**Pro ($19/month per agent):**
- Remove Tawk.to branding
- Video/screen sharing
- Visitor monitoring
- Advanced reports
- Priority support

**Enterprise (Custom pricing):**
- White label
- HIPAA compliance
- Dedicated support
- Custom integrations

---

## 📞 Support

### Need Help?
- **Tawk.to Support:** support@tawk.to
- **Live Chat:** Dashboard → Help → Chat with us
- **Status Page:** https://status.tawk.to

### Your Website
- **Frontend URL:** https://arizontal.com
- **Admin Dashboard:** https://dashboard.tawk.to

---

## ✨ Next Steps

1. **Login to Dashboard** → Customize widget appearance
2. **Set Business Hours** → Configure availability
3. **Add Team Members** → Invite agents
4. **Create Canned Responses** → For common questions
5. **Install Mobile App** → Respond on the go
6. **Test the Widget** → Send yourself a test message

---

## 📝 Notes

- The custom `LiveChatWidget` component is still in your codebase but commented out
- If you want to switch back, just uncomment it in `App.tsx` and remove Tawk.to script
- You can keep both (not recommended) but ensure only one displays at a time
- Consider removing unused DOMPurify dependency if not used elsewhere: `npm uninstall dompurify @types/dompurify`

---

**Installed:** February 3, 2026  
**Property ID:** 6983ffb72355191c39542ef3  
**Status:** ✅ Active and Ready to Use

Enjoy your new professional live chat system! 🚀
