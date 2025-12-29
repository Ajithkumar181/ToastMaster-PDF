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