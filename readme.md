# 🇧🇩 Bangladesh Emergency Service Directory

A responsive government emergency service directory web application that provides instant access to national helplines in Bangladesh.

This project allows users to:
- View essential emergency contact numbers
- Make simulated calls (coin-based system)
- Copy numbers instantly
- Track call history
- React with heart interactions

---

## 🚀 Live Features

### 📞 Call System
- Each call costs **20 coins**
- Prevents calls if insufficient balance
- Displays real-time call alerts
- Logs call details in the Call History panel

### 📋 Copy Functionality
- One-click number copy
- Clipboard API integration
- Live copy counter update

### ❤️ Heart Reaction System
- Users can like services
- Real-time heart counter tracking

### 🕒 Call History
- Dynamically generated
- Shows service name, number, and call time
- Clear history button available

---

## 🧠 Core Technologies Used

- HTML5
- Tailwind CSS
- DaisyUI
- Vanilla JavaScript (DOM Manipulation)
- Clipboard API
- Google Fonts
- Font Awesome Icons

---

## 📂 Project Structure
```
Bangladesh-Emergency-Service-Directory/
│
├── index.html
├── styles.css
├── script.js
│
└── assets/
├── logo.png
├── logo-dark.png
├── emergency.png
├── police.png
├── fire-service.png
├── ambulance.png
├── brac.png
├── Bangladesh-Railway.png
├── coin.png
└── heart.png
```


---

## ⚙️ How It Works

### 1️⃣ Coin System
- Default balance: 100 coins
- Each call deducts 20 coins
- Validation prevents negative balance

### 2️⃣ Dynamic DOM Manipulation
- Call history is appended dynamically
- No page reload required
- Pure JavaScript event-driven logic

### 3️⃣ Clipboard Integration
- Uses `navigator.clipboard.writeText()`
- Secure and modern browser-compatible method

---

## 🎯 Learning Objectives Demonstrated

- DOM traversal and manipulation
- Event listeners
- Conditional validation logic
- Dynamic UI rendering
- Real-time counter updates
- Clean UI structuring using Tailwind utility classes

---

## 🔮 Future Improvements (Optional Enhancements)

- Store call history in LocalStorage
- Add search functionality
- Add filtering by service type
- Convert to modular JS structure
- Add dark mode toggle

---

## 📌 Author

Developed as a frontend learning project focusing on DOM manipulation and interactive UI systems.

---

## 📜 Disclaimer

This project is built for educational purposes and simulates emergency service interactions.