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
  padding: 22,
  paddingBottom: 24,
  fontSize: 7.6,
  fontFamily: "Helvetica",
  color: DARK_TEXT,
  lineHeight: 1.15,
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
  paddingHorizontal: 10,
  paddingVertical: 10,
  borderRightWidth: 1.5,
  borderRightColor: BORDER,
  borderRightStyle: "solid",
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
    marginTop: 12,
    marginBottom: 6,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 65, 101, 0.3)",
    borderBottomStyle: "solid"
  },

  leftText: {
    fontSize: 9,
    marginBottom: 3,
    lineHeight: 1.3
  },

  leftLabel: {
    fontWeight: "bold",
    color: BLUE,
    marginRight: 4
  },

  /* ===== HEADER (Professional + Optimal) ===== */
header: {
  borderBottomWidth: 2,
  borderBottomColor: BLUE,
  borderBottomStyle: "solid",
  paddingBottom: 8,
  marginBottom: 8
},


logoRow: {
  flexDirection: "row",
  alignItems: "flex-start"  // ✅ better for multiline titles
},

logo: {
  width: 46,
  height: 46,
  marginRight: 10
},

clubTitle: {
  fontSize: 10,
  fontWeight: "bold",
  color: BLUE,
  marginBottom: 2,
  lineHeight: 1.05
},

meetingTitle: {
  fontSize: 11,
  fontWeight: "bold",
  color: DARK_TEXT,
  marginBottom: 3,
  lineHeight: 1.1
},


subHeader: {
  fontSize: 9.4,
  color: BLUE,
  marginBottom: 2,
  lineHeight: 1.25
},

venueText: {
  fontSize: 9.4,
  color: BLUE,
  lineHeight: 1.25,
  flexShrink: 1
},

  /* ===== SECTION ===== */
  section: {
  marginBottom: 8,
  flexShrink: 0
},


 sectionTitle: {
  backgroundColor: BLUE,
  color: "#FFFFFF",
  paddingVertical: 3,
  paddingHorizontal: 8,
  fontSize: 9.5,
  fontWeight: "bold",
  marginBottom: 4,
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
  fontSize: 9,
  paddingVertical: 4,
  paddingHorizontal: 4,
  textAlign: "left"
},


  tableRow: {
  flexDirection: "row",
  borderBottomWidth: 0.6,
  borderBottomColor: BORDER,
  borderBottomStyle: "solid",
  paddingVertical: 2,
  alignItems: "flex-start"
},



  lastRow: {
    borderBottomWidth: 0
  },

  altRow: {
    backgroundColor: LIGHT_GRAY
  },

  cellTime: {
  width: "13%",
  paddingVertical: 2,
  paddingHorizontal: 4,
  fontWeight: "bold",
  textAlign: "center",
  borderRightWidth: 0.6,
  borderRightColor: BORDER,
  borderRightStyle: "solid"
},

cellRole: {
  width: "21%",
  paddingVertical: 2,
  paddingHorizontal: 4,
  borderRightWidth: 0.6,
  borderRightColor: BORDER,
  borderRightStyle: "solid"
},

cellDesc: {
  width: "66%",
  paddingVertical: 2,
  paddingHorizontal: 4,
  lineHeight: 1.15
},



/* ===== SPEAKERS (COMPACT + MEDIUM PROFESSIONAL) ===== */

speakersSection: {
  marginBottom: 6
},

speakersContainer: {
  flexDirection: "column"
},

speakerBox: {
  borderWidth: 0.8,
  borderColor: BORDER,
  borderRadius: 4,
  paddingHorizontal: 6,
  paddingVertical: 5,
  backgroundColor: "#FFFFFF",
  marginBottom: 3,        // tighter gap between speakers
  breakInside: "auto"
},

/* Name sits INSIDE each box */
speakerHeader: {
  flexDirection: "column",
  marginBottom: 2
},

speakerName: {
  fontSize: 8.6,         // medium size (not tiny)
  fontWeight: "bold",
  color: BLUE,
  marginBottom: 1,
  lineHeight: 1.15
},

badgeRow: {
  flexDirection: "row",
  flexWrap: "wrap",
  marginBottom: 2
},

badge: {
  fontSize: 7,
  borderWidth: 0.6,
  borderColor: BLUE,
  color: BLUE,
  paddingVertical: 1,
  paddingHorizontal: 4,
  borderRadius: 7,
  backgroundColor: "rgba(0, 65, 101, 0.06)",
  marginRight: 3,
  marginBottom: 2
},

speakerDetailRow: {
  flexDirection: "row",
  marginBottom: 1,
  alignItems: "flex-start"
},

speakerLabel: {
  fontSize: 7.6,
  fontWeight: "bold",
  color: DARK_TEXT,
  width: 54,
  minWidth: 54,
  lineHeight: 1.15
},

speakerValue: {
  fontSize: 7.6,
  flexGrow: 1,
  lineHeight: 1.15,
  paddingRight: 2
}
,
  /* ===== FOOTER ===== */
  footer: {
  position: "absolute",
  bottom: 10,
  left: 26,
  right: 26,
  textAlign: "center",
  fontSize: 7.8,
  color: BLUE,
  paddingTop: 4,
  borderTopWidth: 0.8,
  borderTopColor: BORDER,
  borderTopStyle: "solid",
  backgroundColor: "#FFFFFF"
},

   /* ===== VALUES & MISSION ===== */
 topInfoBox: {
  borderWidth: 0.8,
  borderRadius: 5,
  padding: 4,
  marginBottom: 4
},



  topInfoTitle: {
    fontSize: 10.8,
    fontWeight: "bold",
    color: BLUE,
    marginBottom: 6
  },

  valuesRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginBottom: 6
  },

  valueChip: {
    fontSize: 8.8,
    color: BLUE,
    borderWidth: 1,
    borderColor: BLUE,
    borderStyle: "solid",
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 14,
    backgroundColor: "rgba(0, 65, 101, 0.07)"
  },

  missionText: {
    fontSize: 9.2,
    lineHeight: 1.45,
    color: DARK_TEXT
  }

});

/* ================= COMPONENT ================= */
const ToastmastersPDF = ({ data }) => {
  
  const speakersText = (data?.speakers || [])
  .map(
    (s, idx) =>
      `${idx + 1}. ${s.speaker}\n` +
      `Speech: ${s.title}\n` +
      `Project: ${s.project}\n` +
      `Evaluator: ${s.evaluator}\n` +
      `Pathway: ${s.pathway} | Level: ${s.level}\n`
  )
  .join("\n");

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
            <Text style={styles.venueText}>{data.venue}</Text>

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
                  <Text style={styles.clubTitle}>Perambur Speakers Toastmasters Club</Text>
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
            {/* ===== VALUES + MISSION (NEW) ===== */}
<View style={styles.topInfoBox}>
  <Text style={styles.topInfoTitle}>TM Values</Text>

  <View style={styles.valuesRow}>
    <Text style={styles.valueChip}>Integrity</Text>
    <Text style={styles.valueChip}>Respect</Text>
    <Text style={styles.valueChip}>Service</Text>
    <Text style={styles.valueChip}>Excellence</Text>
  </View>

  <Text style={styles.topInfoTitle}>Club Mission</Text>
  <Text style={styles.missionText}>
    We provide a supportive and positive learning experience in which members are empowered to develop
    communication and leadership skills, resulting in greater self-confidence and personal growth.
  </Text>
</View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Meeting Agenda</Text>
              
              <View style={styles.table}>
                <View style={styles.tableHeader}>
                  <Text style={[styles.cellTime, styles.tableHeaderText]}>Time</Text>
                  <Text style={[styles.cellRole, styles.tableHeaderText]}>Role / Speaker</Text>
<Text style={[styles.cellDesc, styles.tableHeaderText]}>Details</Text>

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

{/* ROLE COLUMN */}
<View style={styles.cellRole}>
  <Text>{item.role}</Text>
</View>

{/* DETAILS COLUMN */}
<View style={styles.cellDesc}>
  {item.role === "Speakers" ? (
    <View style={styles.speakersContainer}>
      {data.speakers?.map((s, idx) => (
        <View key={idx} style={styles.speakerBox}>

          {/* Speaker Name INSIDE box */}
          <View style={styles.speakerHeader}>
            <Text style={styles.speakerName}>
              {idx + 1}. {s.speaker}
            </Text>
          </View>

          <View style={styles.speakerDetailRow}>
            <Text style={styles.speakerLabel}>Speech:</Text>
            <Text style={styles.speakerValue}>{s.title}</Text>
          </View>

          <View style={styles.speakerDetailRow}>
            <Text style={styles.speakerLabel}>Project:</Text>
            <Text style={styles.speakerValue}>{s.project}</Text>
          </View>

          <View style={styles.speakerDetailRow}>
            <Text style={styles.speakerLabel}>Evaluator:</Text>
            <Text style={styles.speakerValue}>{s.evaluator}</Text>
          </View>

          <View style={styles.speakerDetailRow}>
            <Text style={styles.speakerLabel}>Pathway:</Text>
            <Text style={styles.speakerValue}>
              {s.pathway} | {s.level}
            </Text>
          </View>
            {/* ✅ NEW TIMING ROW */}
  <View style={styles.speakerDetailRow}>
    <Text style={styles.speakerLabel}>Timing:</Text>
    <Text style={styles.speakerValue}>{s.timing || "—"}</Text>
  </View>

        </View>
      ))}
    </View>
  ) : (
    <Text>{item.description}</Text>
  )}
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