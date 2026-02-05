import { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ToastmastersPDF from "./ToastmastersPDF";

export default function App() {
 const [meeting, setMeeting] = useState({
  meetingNumber: 300,

  title: "Weekly Toastmasters Meeting",
  date: "2025-12-06",
  day: "Saturday",

  meetingTime: {
    start: "5:30 PM",
    end: "7:30 PM"
  },

  venue: "Lane Consultancy, Perambur",

  // 🔹 WORD & IDIOM
languageItems: {
  word: "Holistic",
  wordMeaning: "Caring for your whole self — mind and body.",
  wordExample: "She lives a holistic life.",
  idiom: "An apple a day keeps the doctor away",
  idiomMeaning: "Healthy habits prevent illness.",
  idiomExample: "He eats well every day."
},


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
  roles: [
    { role: "SAA", name: "TM Kirthiga" },
    { role: "Presiding Officer", name: "TM Stanly Richard" },
    { role: "TMoD", name: "TM Abu" },
    { role: "GE", name: "TM Chithra" },
     { role: "TTM", name: "TM Balaji" }, // ✅ ADDED
    { role: "Timer", name: "TM Ajith" },
    { role: "Ah Counter", name: "TM Savitha" },
    { role: "Grammarian", name: "TM Kirthiga" }
    
  ],

// 🔹 SPEAKERS (3 SPEAKERS)
speakers: [
  {
    speaker: "TM Stanly Richard",
    pathway: "Presentation Mastery",
    level: "Level 1",
    project: "Icebreaker",
    title: "Leading with Awareness, Not Assumptions",
    evaluator: "TM Jayashree",
    timing: "5–7 mins"
  },
  {
    speaker: "TM Gopalkrishna Tharoor",
    pathway: "Presentation Mastery",
    level: "Level 2",
    project: "Effective Body Language",
    title: "My Mentors and How They Paved the Way Forward",
    evaluator: "TM Hussain",
    timing: "5–7 mins"
  },
  
],


  // 🔹 AGENDA
  agenda: [
    { time: "5:15 PM", role: "All", description: "Assembly time and networking" },
    { time: "5:30 PM", role: "SAA", description: "Calls the meeting to order and introduces Presiding Officer" },
    { time: "5:32 PM", role: "Presiding Officer", description: "Opens the meeting, welcomes guests" },
    { time: "5:35 PM", role: "TMoD", description: "Introduces the theme and explains the meeting structure" },
    { time: "5:40 PM", role: "General Evaluator", description: "Explains evaluation team roles" },
    { time: "5:50 PM", role: "Speakers", description: "Prepared Speech Session" },
    { time: "6:15 PM", role: "Table Topics Master", description: "Table Topics Session" },
    { time: "6:31 PM", role: "GE", description: "Evaluation Segment" },
    { time: "6:55 PM", role: "TMoD", description: "Handover to Presiding Officer" },
    { time: "6:57 PM", role: "Presiding Officer", description: "Closing remarks and meeting adjournment" }
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
            {/* ✅ PROJECT DROPDOWN */}
    <select
      value={s.project}
      onChange={(e) => updateSpeaker(i, "project", e.target.value)}
    >
      <option value="">Select Project</option>
      <option>Ice Breaker</option>
      <option>Evaluation and Feedback</option>
      <option>Effective Body Language</option>
      <option>Researching and Presenting</option>
      <option>Persuasive Speaking</option>
      <option>Using Vocal Variety</option>
      <option>Connect with Your Audience</option>
      <option>Dynamic Leadership</option>
      <option>Toastmaster Mentoring</option>
      <option>Speech with a purpose</option>
      <option>Managing difficult audiences</option>
       <option>Motivate Others</option>
      <option>Evaluation and Feedback</option>
      <option>Understanding Your Leadership Style</option>
      
              
    </select>

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

        <button onClick={addSpeaker} className="btn">
        ➕ Add Speaker
      </button>

      {/* ERROR MESSAGE */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* STEP 1: VALIDATE + PREPARE DATA */}
      <button className="btn" onClick={handleGeneratePDF}>
        ✔ Validate Data
      </button>

      {/* STEP 2: DOWNLOAD PDF ONLY IF DATA IS VALID */}
      {pdfData && (
        <PDFDownloadLink
          document={<ToastmastersPDF data={pdfData} />}
          fileName="Toastmasters-Meeting.pdf"
          className="btn"
        >
          {({ loading }) =>
            loading ? "Generating PDF..." : "⬇ Download PDF"
          }
        </PDFDownloadLink>
      )}
    </div>
  );
}