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
    end: "7:00 PM"
  },

  venue: "Lane Consultancy, Perambur",

  // 🔹 WORD & IDIOM
  languageItems: {
    word: "Resilience",
    wordMeaning: "The ability to recover quickly from difficulties",
    wordExample: "Her resilience helped her overcome challenges.",
    idiom: "Break the ice",
    idiomMeaning: "To start a conversation in a social setting",
    idiomExample: "He told a joke to break the ice."
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
    { role: "SAA", name: "TM  Kumar" },
    { role: "Presiding Officer", name: "TM Priyadarshan" },
    { role: "TMoD", name: "TM Karthik" },
    { role: "GE", name: "TM Suresh" },
     { role: "TTM", name: "TM Arun" }, // ✅ ADDED
    { role: "Timer", name: "TM Manoj" },
    { role: "Ah Counter", name: "TM Deepak" },
    { role: "Grammarian", name: "TM Ravi" }
    
  ],

// 🔹 SPEAKERS (3 SPEAKERS)
speakers: [
  {
    speaker: "TM Hariharan",
    pathway: "Presentation Mastery",
    level: "Level 1",
    project: "Icebreaker",
    title: "The Power of Consistency",
    evaluator: "TM Anand",
    timing: "5–7 mins"
  },
  {
    speaker: "TM Kavin Kumar",
    pathway: "Presentation Mastery",
    level: "Level 2",
    project: "Effective Body Language",
    title: "Small Habits, Big Results",
    evaluator: "TM Pradeep",
    timing: "5–7 mins"
  },
  {
    speaker: "TM Nithya Shree",
    pathway: "Presentation Mastery",
    level: "Level 1",
    project: "Icebreaker",
    title: "Confidence Begins Within",
    evaluator: "TM Lavanya",
    timing: "5–7 mins"
  }
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





import { Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import logo from "./assets/logo.png";

const BLUE = "#004165";
const YELLOW = "#F2DF74";
const LIGHT_GRAY = "#FAFAFA";
const MEDIUM_GRAY = "#E5E7EB";
const BORDER = "#D1D5DB";
const DARK_TEXT = "#111827";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    paddingBottom: 64,
    fontSize: 9,
    fontFamily: "Helvetica",
    color: DARK_TEXT,
    lineHeight: 1.35,
    backgroundColor: "#FFFFFF"
  },

  /* ===== MAIN LAYOUT ===== */
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    minHeight: "100%",
    flexGrow: 1
  },

  leftPanel: {
    width: "28%",
    backgroundColor: YELLOW,
    paddingHorizontal: 14,
    paddingVertical: 16,
    borderRightWidth: 2,
    borderRightColor: BORDER,
    borderRightStyle: "solid",
    height: "auto",
    flexGrow: 1
  },

  rightPanel: {
    width: "72%",
    paddingLeft: 20,
    paddingRight: 2,
    flexGrow: 1,
    minHeight: "100%"
  },

  leftSectionTitle: {
    fontSize: 10.5,
    fontWeight: "bold",
    color: BLUE,
    marginTop: 16,
    marginBottom: 8,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 65, 101, 0.3)",
    borderBottomStyle: "solid"
  },

  leftText: {
    fontSize: 9,
    marginBottom: 5,
    lineHeight: 1.3
  },

  leftLabel: {
    fontWeight: "bold",
    color: BLUE,
    marginRight: 4
  },

  /* ===== HEADER ===== */
  header: {
    borderBottomWidth: 3,
    borderBottomColor: BLUE,
    borderBottomStyle: "solid",
    paddingBottom: 18,
    marginBottom: 22
  },

  logoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },

  logo: {
    width: 62,
    height: 62,
    marginRight: 18
  },

  headerText: {
    flex: 1
  },

  clubTitle: {
    fontSize: 21,
    fontWeight: "bold",
    color: BLUE,
    marginBottom: 5
  },

  meetingTitle: {
    fontSize: 13.5,
    fontWeight: "bold",
    color: DARK_TEXT,
    marginBottom: 7
  },

  subHeader: {
    fontSize: 9.8,
    color: BLUE,
    marginBottom: 2
  },

  /* ===== SECTION ===== */
  section: {
    marginBottom: 24,
    flexShrink: 0
  },

  sectionTitle: {
    backgroundColor: BLUE,
    color: "#FFFFFF",
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 12,
    borderRadius: 3
  },

  /* ===== TABLE ===== */
  table: {
    borderWidth: 1.5,
    borderColor: BORDER,
    borderStyle: "solid",
    borderRadius: 4,
    overflow: "hidden",
    marginBottom: 5
  },

  tableHeader: {
    flexDirection: "row",
    backgroundColor: YELLOW,
    borderBottomWidth: 1.5,
    borderBottomColor: BORDER,
    borderBottomStyle: "solid"
  },

  tableHeaderText: {
    color: BLUE,
    fontWeight: "bold",
    fontSize: 10,
    paddingVertical: 9,
    paddingHorizontal: 7,
    textAlign: "left"
  },

  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 0.75,
    borderBottomColor: BORDER,
    borderBottomStyle: "solid",
    minHeight: 34,
    alignItems: "center"
  },

  lastRow: {
    borderBottomWidth: 0
  },

  altRow: {
    backgroundColor: LIGHT_GRAY
  },

  cellTime: {
    width: "16%",
    paddingVertical: 8,
    paddingHorizontal: 7,
    fontWeight: "bold",
    textAlign: "center",
    borderRightWidth: 0.75,
    borderRightColor: BORDER,
    borderRightStyle: "solid"
  },

  cellRole: {
    width: "24%",
    paddingVertical: 8,
    paddingHorizontal: 7,
    borderRightWidth: 0.75,
    borderRightColor: BORDER,
    borderRightStyle: "solid"
  },

  cellDesc: {
    width: "60%",
    paddingVertical: 8,
    paddingHorizontal: 7
  },

  /* ===== SPEAKERS ===== */
  speakersSection: {
    marginBottom: 10,
    flexShrink: 0
  },

  speakersContainer: {
    flexDirection: "column",
    gap: 14
  },

  speakerBox: {
    borderWidth: 1.5,
    borderColor: BORDER,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 14,
    backgroundColor: "#FFFFFF",
    marginBottom: 2
  },

  speakerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 8,
    flexWrap: "wrap"
  },

  speakerName: {
    fontSize: 11.5,
    fontWeight: "bold",
    color: BLUE,
    flex: 1,
    marginBottom: 6
  },

  badgeRow: {
    flexDirection: "row",
    flexWrap: "nowrap",
    gap: 8,
    marginBottom: 4
  },

  badge: {
    fontSize: 8.5,
    borderWidth: 1,
    borderColor: BLUE,
    borderStyle: "solid",
    color: BLUE,
    paddingVertical: 3,
    paddingHorizontal: 7,
    borderRadius: 12,
    backgroundColor: "rgba(0, 65, 101, 0.08)"
  },

  speakerDetailRow: {
    flexDirection: "row",
    marginBottom: 4,
    alignItems: "flex-start",
    minHeight: 16
  },

  speakerLabel: {
    fontSize: 9.2,
    fontWeight: "bold",
    color: DARK_TEXT,
    width: 85,
    minWidth: 85
  },

  speakerValue: {
    fontSize: 9.2,
    flex: 1,
    lineHeight: 1.4,
    paddingRight: 5
  },

  /* ===== FOOTER ===== */
  footer: {
    position: "absolute",
    bottom: 22,
    left: 30,
    right: 30,
    textAlign: "center",
    fontSize: 9,
    color: BLUE,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: BORDER,
    borderTopStyle: "solid",
    backgroundColor: "#FFFFFF"
  }
});

/* ================= COMPONENT ================= */
const ToastmastersPDF = ({ data }) => {
  if (!data) {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <Text>No data available</Text>
        </Page>
      </Document>
    );
  }

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          {/* ===== LEFT PANEL ===== */}
          <View style={styles.leftPanel}>
            <Text style={styles.leftSectionTitle}>Meeting Details</Text>
            <Text style={styles.leftText}>
              <Text style={styles.leftLabel}>Meeting #:</Text> {data.meetingNumber}
            </Text>
            <Text style={styles.leftText}>{data.day}, {data.date}</Text>
            <Text style={styles.leftText}>{data.meetingTime?.start} – {data.meetingTime?.end}</Text>
            <Text style={styles.leftText}>{data.venue}</Text>

            <Text style={styles.leftSectionTitle}>Leadership Team</Text>
            {data.leadershipTeam?.map((l, i) => (
              <Text key={i} style={styles.leftText}>
                <Text style={styles.leftLabel}>{l.role}:</Text> {l.name}
              </Text>
            ))}

            <Text style={styles.leftSectionTitle}>Word & Idiom</Text>
            <Text style={styles.leftText}>
              <Text style={styles.leftLabel}>Word:</Text> {data.languageItems?.word}
            </Text>
            <Text style={styles.leftText}>
              <Text style={styles.leftLabel}>Meaning:</Text> {data.languageItems?.wordMeaning}
            </Text>
            <Text style={styles.leftText}>
              <Text style={styles.leftLabel}>Example:</Text> {data.languageItems?.wordExample}
            </Text>

            <Text style={[styles.leftText, { marginTop: 8 }]}>
              <Text style={styles.leftLabel}>Idiom:</Text> {data.languageItems?.idiom}
            </Text>
            <Text style={styles.leftText}>
              <Text style={styles.leftLabel}>Meaning:</Text> {data.languageItems?.idiomMeaning}
            </Text>
            <Text style={styles.leftText}>
              <Text style={styles.leftLabel}>Example:</Text> {data.languageItems?.idiomExample}
            </Text>

            <Text style={styles.leftSectionTitle}>Role Players</Text>
            {data.roles?.map((r, i) => (
              <Text key={i} style={styles.leftText}>
                <Text style={styles.leftLabel}>{r.role}:</Text> {r.name}
              </Text>
            ))}
          </View>

          {/* ===== RIGHT PANEL ===== */}
          <View style={styles.rightPanel}>
            <View style={styles.header}>
              <View style={styles.logoRow}>
                <Image src={logo} style={styles.logo} />
                <View style={styles.headerText}>
                  <Text style={styles.clubTitle}>Toastmasters Club Meeting</Text>
                  <Text style={styles.meetingTitle}>
                    Meeting #{data.meetingNumber} • {data.title}
                  </Text>
                  <Text style={styles.subHeader}>
                    {data.day}, {data.date} | {data.meetingTime?.start} – {data.meetingTime?.end}
                  </Text>
                  <Text style={styles.subHeader}>{data.venue}</Text>
                </View>
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Meeting Agenda</Text>
              
              <View style={styles.table}>
                <View style={styles.tableHeader}>
                  <Text style={[styles.cellTime, styles.tableHeaderText]}>Time</Text>
                  <Text style={[styles.cellRole, styles.tableHeaderText]}>Role</Text>
                  <Text style={[styles.cellDesc, styles.tableHeaderText]}>Description</Text>
                </View>

                {data.agenda?.map((item, i) => (
                  <View 
                    key={i} 
                    style={[
                      styles.tableRow, 
                      i % 2 === 1 && styles.altRow,
                      i === data.agenda.length - 1 && styles.lastRow
                    ]}
                  >
                    <Text style={styles.cellTime}>{item.time}</Text>
                    <Text style={styles.cellRole}>{item.role}</Text>
                    <Text style={styles.cellDesc}>{item.description}</Text>
                  </View>
                ))}
              </View>
            </View>

            <View style={styles.speakersSection}>
              <Text style={styles.sectionTitle}>Prepared Speakers</Text>
              <View style={styles.speakersContainer}>
                {data.speakers?.map((s, i) => (
                  <View key={i} style={styles.speakerBox}>
                    <View style={styles.speakerHeader}>
                      <Text style={styles.speakerName}>{s.speaker}</Text>
                      <View style={styles.badgeRow}>
                        <Text style={styles.badge}>Pathway: {s.pathway}</Text>
                        <Text style={styles.badge}>Level: {s.level}</Text>
                      
                      </View>
                    </View>
                    
                    <View style={styles.speakerDetailRow}>
                      <Text style={styles.speakerLabel}>Speech Title:</Text>
                      <Text style={styles.speakerValue}>{s.title}</Text>
                    </View>

                    {/* ✅ PROJECT (added just after Speech Title) */}

  <View style={styles.speakerDetailRow}>
    <Text style={styles.speakerLabel}>Project:</Text>
    <Text style={styles.speakerValue}>{s.project}</Text>
  </View>
                    
                    <View style={styles.speakerDetailRow}>
                      <Text style={styles.speakerLabel}>Evaluator:</Text>
                      <Text style={styles.speakerValue}>{s.evaluator}</Text>
                    </View>
                    
                    <View style={styles.speakerDetailRow}>
                      <Text style={styles.speakerLabel}>Timing:</Text>
                      <Text style={styles.speakerValue}>{s.timing}</Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>

        <Text style={styles.footer}>
          Toastmasters International • Where Leaders Are Made • Meeting #{data.meetingNumber}
        </Text>
      </Page>
    </Document>
  );
};

export default ToastmastersPDF;