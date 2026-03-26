import { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ToastmastersPDF from "./ToastmastersPDF";

export default function App() {
  const [showEdu, setShowEdu] = useState(false);
  const [editLeadership, setEditLeadership] = useState(false);
 const [meeting, setMeeting] = useState({
  meetingNumber: 317,

  title: "The Environment of Leaders",
 date: new Date().toISOString().split("T")[0],
  day: "Saturday",


  meetingTime: {
    start: "5:30 PM",
    end: "7:30 PM"
  },

  venue: "Lane Consultancy, Perambur",

  // 🔹 WORD & IDIOM hello hhh
languageItems: {
  word: "Cultivate",
  wordMeaning: "To develop or improve over time.",
  wordExample: "Great leaders cultivate trust and growth.",
  idiom: "Set the tone",
  idiomMeaning: "To establish the atmosphere or standard.",
  idiomExample: "A leader sets the tone through actions."
}
,

 // 🔹 LEADERSHIP TEAM (Jan–June 2026)
leadershipTeam: [
  { role: "President", name: "TM Stanly Richard" },
  { role: "Vice President Education (VPE)", name: "TM Chithra" },
  { role: "Vice President Membership (VPM)", name: "TM Karthick" },
  { role: "Vice President Public Relations (VPPR)", name: "TM Arun Charles" },
  { role: "Secretary", name: "TM Sivamanokari" },
  { role: "Treasurer", name: "TM Rajesh" },
  { role: "Sergeant-at-Arms (SAA)", name: "TM Kirthiga" },
  
],


  // 🔹 ROLE PLAYERS
 // 🔹 ROLE PLAYERS
  roles: [
    { role: "SAA", name: "TM Kirthiga" },
    { role: "Presiding Officer", name: "TM Stanly Richard" },
    { role: "Toastmaster of the Day (TMoD)", name: "TM Arun (Successful Club Series)" },
    { role: "General Evaluator (GE)", name: "TM Ajit Kumar" },
    { role: "Table Topics Master (TTM)", name: "TM Issac" },
    { role: "Timer", name: "TM Savitha" },
    { role: "Ah Counter", name: "TM Helen" },
    { role: "Grammarian", name: "TM Aishwarya" }
  ],

  // 🔹 EDUCATIONAL SESSION
educationalSessions: [],

// 🔹 SPEAKERS
speakers: [
    {
      speaker: "TM Chithra",
      pathway: "Motivational Strategies",
      level: "Level 3",
      project: "Journaling The Emotions",
      title: "The Mirror",
      evaluator: "TM Karthick",
      reviewer: "TM Sindhu",
      timing: "5–7 mins"
    },
    {
      speaker: "TM Stanly Richard",
      pathway: "Persuasive Influence",
      level: "Level 2",
      project: "Introduction to Toastmasters Mentoring",
      title: "The First Believer",
      evaluator: "TM Gopalkrishna Tharoor",
      reviewer: "DTM Saro Vel",
      timing: "5–7 mins"
    },
    {
      speaker: "TM Vinoth",
      pathway: "Presentation Mastery",
      level: "Level 1",
      project: "Writing a Speech with Purpose",
      title: "Pressure Makes Diamonds",
      evaluator: "TM Ganesh",
      reviewer: "TM Arun Charles",
      timing: "5–7 mins"
    }
  ],


// 🔹 AGENDA (Final – Ends at 7:30 PM)

agenda: [
  { time: "5:15 PM", role: "All", description: "Assembly time and networking" },
  { time: "5:30 PM", role: "SAA", description: "Calls the meeting to order and introduces Presiding Officer" },
  { time: "5:32 PM", role: "Presiding Officer", description: "Opens the meeting, welcomes guests" },
  { time: "5:35 PM", role: "TMoD", description: "Introduces the theme and explains the meeting structure" },
  { time: "5:40 PM", role: "General Evaluator", description: "Explains evaluation team roles" },

  // 🎤 Prepared Speeches
  { time: "5:50 PM", role: "Speakers", description: "Prepared Speech Session" },

  // 🎯 Table Topics
  { time: "6:35 PM", role: "Table Topics Master", description: "Table Topics Session" },

  // 📝 Evaluation + Closing
  { time: "7:00 PM", role: "General Evaluator", description: "Evaluation Segment + TMoD Handover" },
  { time: "7:20 PM", role: "Presiding Officer", description: "Closing remarks and meeting adjournment" },
  { time: "7:30 PM", role: "All", description: "Official Meeting End" }
]


});




  const [pdfData, setPdfData] = useState(null);
  const [error, setError] = useState("");

  // -------- VALIDATION BEFORE PDF --------
  const validateData = () => {
    if (!meeting.title.trim()) return "Meeting title is required";
    if (!meeting.date) return "Meeting date is required";

    const hasSpeaker = meeting.speakers.some(
      (s) => s.speaker.trim() && s.title.trim()
    );
    if (!hasSpeaker) return "At least one speaker with title is required";

    return "";
  };

  const handleGeneratePDF = () => {
    const err = validateData();
    if (err) {
      setError(err);
      return;
    }

    // ✅ SAFE COPY FOR PDF
    console.log("DATA SENT TO PDF:", meeting);
    setPdfData({ ...meeting });
    setError("");
  };

  // -------- UPDATE FUNCTIONS (unchanged) --------
  const updateRoleName = (index, value) => {
    const roles = [...meeting.roles];
    roles[index].name = value;
    setMeeting({ ...meeting, roles });
  };

  const updateSpeaker = (index, field, value) => {
    const speakers = [...meeting.speakers];
    speakers[index][field] = value;
    setMeeting({ ...meeting, speakers });
  };

  const addSpeaker = () => {
    setMeeting({
      ...meeting,
      speakers: [
        ...meeting.speakers,
        {
          speaker: "",
          pathway: "Presentation Mastery",
          level: "Level 1",
          title: "",
          evaluator: "",
          timing: ""
        }
      ]
    });
  };

  const updateLanguageItem = (field, value) => {
    setMeeting({
      ...meeting,
      languageItems: {
        ...meeting.languageItems,
        [field]: value
      }
    });
  };

  const updateLeadership = (index, value) => {
  const arr = [...meeting.leadershipTeam];
  arr[index].name = value;
  setMeeting({ ...meeting, leadershipTeam: arr });
};

  return (
    <div className="container">
      <h2>Toastmasters PDF Generator</h2>

      {/* Meeting Info */}
      <div className="card">
        <input
    
    placeholder="Meeting Number"
    value={meeting.meetingNumber}
    onChange={(e) =>
      setMeeting({
        ...meeting,
        meetingNumber: Number(e.target.value)
      })
    }
  />
        <input
          placeholder="Theme of the Day"
          value={meeting.title}
          onChange={(e) =>
            setMeeting({ ...meeting, title: e.target.value })
          }
        />

        <input
          type="date"
          value={meeting.date}
          onChange={(e) =>
            setMeeting({ ...meeting, date: e.target.value })
          }
        />

        <input
          placeholder="Venue"
          value={meeting.venue}
          onChange={(e) =>
            setMeeting({ ...meeting, venue: e.target.value })
          }
        />
      </div>

      {/* Roles */}
      <h3>Role Players</h3>
      <div className="card">
        {meeting.roles.map((r, i) => (
          <div className="role-row" key={i}>
            <span className="role-name">{r.role}</span>
            <input
              placeholder="Member Name"
              value={r.name}
              onChange={(e) => updateRoleName(i, e.target.value)}
            />
          </div>
        ))}
      </div>
      {/* Leadership Team */}
<div className="section-header">
  <h3>Leadership Team</h3>

  <button
  onClick={() => setEditLeadership(!editLeadership)}
  className="btn"
  style={{
    background: editLeadership ? "#D4AF37" : "#f1f5f9", // gold when active
    color: editLeadership ? "#111" : "#1E3A5F",
    border: "1px solid #E5E7EB"
  }}
>
  {editLeadership ? "✔ Done" : "✏ Edit"}
</button>
</div>
{/* Edit leadership */}
<div className="card">
  {meeting.leadershipTeam.map((l, i) => (
    <div className="role-row" key={i}>
      <span className="role-name">{l.role}</span>

      {editLeadership ? (
        <input
          placeholder="Member Name"
          value={l.name}
          onChange={(e) => {
            const arr = [...meeting.leadershipTeam];
            arr[i].name = e.target.value;
            setMeeting({ ...meeting, leadershipTeam: arr });
          }}
        />
      ) : (
        <span>{l.name}</span>
      )}
    </div>
  ))}
</div>

      {/* Word & Idiom */}
      <h3>Word & Idiom of the Day</h3>
      <div className="card">
        <h4 className="sub-title">Word of the Day</h4>

        <input
          placeholder="Word"
          value={meeting.languageItems.word}
          onChange={(e) => updateLanguageItem("word", e.target.value)}
        />
        <input
          placeholder="Meaning"
          value={meeting.languageItems.wordMeaning}
          onChange={(e) =>
            updateLanguageItem("wordMeaning", e.target.value)
          }
        />
        <input
          placeholder="Example"
          value={meeting.languageItems.wordExample}
          onChange={(e) =>
            updateLanguageItem("wordExample", e.target.value)
          }
        />

        <hr className="divider" />

        <h4 className="sub-title">Idiom of the Day</h4>

        <input
          placeholder="Idiom"
          value={meeting.languageItems.idiom}
          onChange={(e) => updateLanguageItem("idiom", e.target.value)}
        />
        <input
          placeholder="Meaning"
          value={meeting.languageItems.idiomMeaning}
          onChange={(e) =>
            updateLanguageItem("idiomMeaning", e.target.value)
          }
        />
        <input
          placeholder="Example"
          value={meeting.languageItems.idiomExample}
          onChange={(e) =>
            updateLanguageItem("idiomExample", e.target.value)
          }
        />
      </div>

      {/* Speakers */}
      <h3>Speakers</h3>
      {meeting.speakers.map((s, i) => (
        <div className="speaker-card" key={i}>
           <div className="card-header">
    <span>Speaker {i + 1}</span>

    <button
      className="delete-btn"
      onClick={() => {
        const arr = meeting.speakers.filter((_, idx) => idx !== i);
        setMeeting({ ...meeting, speakers: arr });
      }}
    >
      ✖
    </button>
  </div>
          <input
            placeholder="Speaker Name"
            value={s.speaker}
            onChange={(e) =>
              updateSpeaker(i, "speaker", e.target.value)
            }
          />

          <div className="two-col">
            <select
              value={s.pathway}
              onChange={(e) =>
                updateSpeaker(i, "pathway", e.target.value)
              }
            >
              <option>Presentation Mastery</option>
              <option>Dynamic Leadership</option>
              <option>Engaging Humor</option>
              <option>Motivational Strategies</option>
              <option>Persuasive Influence</option>
              <option>Strategic Relationships</option>
              <option>Visionary Communication</option>
              <option>Icebreaker Speech</option>
             
            </select>

            <select
              value={s.level}
              onChange={(e) =>
                updateSpeaker(i, "level", e.target.value)
              }
            >
              <option>Level 1</option>
              <option>Level 2</option>
              <option>Level 3</option>
              <option>Level 4</option>
              <option>Level 5</option>
            </select>
          </div>
           {/* ✅ PROJECT INPUT (Manual typing) */}
<input
  type="text"
  placeholder="Enter Project"
  value={s.project}
  onChange={(e) => updateSpeaker(i, "project", e.target.value)}
/>

          <input
            placeholder="Speech Title"
            value={s.title}
            onChange={(e) =>
              updateSpeaker(i, "title", e.target.value)
            }
          />

          <div className="two-col">
            <input
              placeholder="Evaluator"
              value={s.evaluator}
              onChange={(e) =>
                updateSpeaker(i, "evaluator", e.target.value)
              }
            />
            <input
              placeholder="Timing"
              value={s.timing}
              onChange={(e) =>
                updateSpeaker(i, "timing", e.target.value)
              }
            />
          </div>
        </div>
      ))}
      {showEdu && (
  <>
    <h3>Educational Session</h3>

    {meeting.educationalSessions.map((e, i) => (
      <div key={i} className="speaker-card">
        <div className="card-header">
    <span>Session {i + 1}</span>

    <button
      className="delete-btn"
      onClick={() => {
        const arr = meeting.educationalSessions.filter((_, idx) => idx !== i);
        setMeeting({ ...meeting, educationalSessions: arr });
      }}
    >
      ✖
    </button>
  </div>
        <input
          placeholder="Topic"
          value={e.topic}
          onChange={(ev) => {
            const arr = [...meeting.educationalSessions];
            arr[i].topic = ev.target.value;
            setMeeting({ ...meeting, educationalSessions: arr });
          }}
        />

        <input
          placeholder="Presenter"
          value={e.presenter}
          onChange={(ev) => {
            const arr = [...meeting.educationalSessions];
            arr[i].presenter = ev.target.value;
            setMeeting({ ...meeting, educationalSessions: arr });
          }}
        />

        <input
          placeholder="Duration"
          value={e.duration}
          onChange={(ev) => {
            const arr = [...meeting.educationalSessions];
            arr[i].duration = ev.target.value;
            setMeeting({ ...meeting, educationalSessions: arr });
          }}
        />
      </div>
    ))}

    {/* Add more sessions */}
   
  </>
)}

      
     
{/* <div className="button-row">
  <button
    onClick={() =>
      setMeeting({
        ...meeting,
        educationalSessions: [
          ...meeting.educationalSessions,
          { topic: "", presenter: "", duration: "" }
        ]
      })
    }
    className="btn"
  >
    ➕ Add More Session
  </button>
</div> */}


{/* ➕ Add Speaker / Educational */}
<div className="button-row">
  <button onClick={addSpeaker} className="btn">
    ➕ Add Speaker
  </button>

  <button
    onClick={() => {
      setShowEdu(true);

      if (meeting.educationalSessions.length === 0) {
        setMeeting({
          ...meeting,
          educationalSessions: [
            { topic: "", presenter: "", duration: "" }
          ]
        });
      }
    }}
    className="btn"
  >
    ➕ Add Educational Session
  </button>
</div>


{/* ❌ Error */}
{error && <p className="error">{error}</p>}



<div className="button-row">
  <button className="btn gold" onClick={handleGeneratePDF}>
    ✔ Validate Data
  </button>

  {pdfData && (
    <PDFDownloadLink
      document={<ToastmastersPDF data={pdfData} />}
      fileName="Toastmasters-Meeting.pdf"
      className="btn"
    >
      {({ loading }) =>
        loading ? "Generating..." : "⬇ Download PDF"
      }
    </PDFDownloadLink>
  )}
</div>
      
    </div>
  );
}