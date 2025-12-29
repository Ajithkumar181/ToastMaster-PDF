toastmasters-pdf-generator/
│
├── public/
│   └── logo.png                  # (Optional) Club logo
│
├── src/
│   ├── components/
│   │   ├── forms/
│   │   │   ├── RoleForm.jsx       # User enters roles
│   │   │   ├── SpeakerForm.jsx    # User enters speaker details
│   │   │   └── MeetingForm.jsx    # Date, venue, time, theme, etc.
│   │   │
│   │   ├── pdf/
│   │   │   ├── ToastmastersPDF.jsx # PDF layout & styling
│   │   │   ├── PDFStyles.js        # Centralized PDF styles
│   │   │
│   │   └── ui/
│   │       ├── Input.jsx          # Reusable input component
│   │       └── Button.jsx         # Reusable button
│   │
│   ├── data/
│   │   └── defaultMeeting.js      # Initial empty/default values
│   │
│   ├── pages/
│   │   └── Home.jsx               # Main page (forms + download)
│   │
│   ├── App.jsx                    # App entry logic
│   ├── main.jsx                   # React bootstrap
│   └── index.css                  # Basic UI styling (web only)
│
├── package.json
└── README.md
