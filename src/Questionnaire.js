// src/Questionnaire.js

const questions = [
  { id: 1, text: "Unsere Bildungsangebote beinhalten alltagsnahe Themen wie Kleidung oder Ernährung, zeigen globale Zusammenhänge auf und regen somit zur Zukunftsreflexion an?" },
  { id: 2, text: "Unsere Einrichtung bietet regelmäßig Angebote zu sozialen Themen an, die zu nachhaltigem Handeln im Alltag anregen." },
  { id: 3, text: "In unserer Einrichtung wird regelmäßig geprüft, inwiefern unsere Arbeit Themen wie soziale Gerechtigkeit unterstützt." },
  { id: 4, text: "Unsere Einrichtung hat sich bereits in externen Projekten gegen Armut engagiert." },
  { id: 5, text: "Unsere Einrichtung hat sich bereits in internen Projekten gegen Armut engagiert." },
  { id: 6, text: "An unseren Bildungsangeboten nehmen Personen mit unterschiedlichen sprachlich/kulturellen Hintergründen teil." },
  { id: 7, text: "In unserer Einrichtung werden bei der Angebotsplanung verschiedene Zielgruppen aktiv miteinbezogen." },
  { id: 8, text: "Ich berücksichtige in meiner Arbeit die individuellen Lern- und Entwicklungsbedürfnisse der Zielgruppe in der pädagogischen Arbeit, um eine gerechte Lernumgebung zu schaffen und lebenslanges Lernen zu ermöglichen." },
  { id: 9, text: "In unseren Bildungsangeboten kann die Zielgruppe eigene Ideen oder Themen einbringen." },
  { id: 10, text: "Unsere Einrichtung achtet bei der Gestaltung der Bildungsangebote darauf, diese unabhängig von sozialer oder kultureller Herkunft zugänglich zu machen. " },
  { id: 11, text: "Unsere Einrichtung stellt sicher, dass die Zielgruppe unabhängig von ihrem Geschlecht gleichberechtigt an allen Bildungsangeboten teilnehmen kann." },
  { id: 12, text: "In unseren/unseren Angeboten/Öffentlichkeitsarbeit werden verschiedene Kulturen, Familienformen und Lebewesen aufgezeigt." },
  { id: 13, text: "Ich als Mitarbeiterin/Mitarbeiter habe regelmäßig die Möglichkeit an Weiterbildungen (z. B. zum Thema Nachhaltigkeit) teilzunehmen" },
  { id: 14, text: "Unsere Einrichtung integriert Nachhaltigkeit systematisch in die Programmplanung." },
  { id: 15, text: "Unsere Einrichtung bietet regelmäßig Angebote zu wirtschaftlichen Themen an, die zu nachhaltigem Handeln im Alltag anregen." },
  { id: 16, text: "In unserer Einrichtung wird regelmäßig geprüft, inwiefern unsere Arbeit Themen wie faire Wirtschaft unterstützt." },
  { id: 17, text: "In unserer Einrichtung werden Evaluationsergebnisse genutzt, um unsere Angebote weiterzuentwickeln." },
  { id: 18, text: "Unsere Einrichtung arbeitet mit Partnerinnen und Partnern zusammen, die ebenfalls für Nachhaltigkeit einstehen." },
  { id: 19, text: "In unserer Einrichtung werden Geräte wie Computer oder Projektoren mindestens 2 - 4 Jahre genutzt." },
  { id: 20, text: "In unserer Einrichtung wird mit dem Thema Digitalisierung reflektiert umgegangen." },
  { id: 21, text: "In unserer Einrichtung wird den Mitarbeiterinnen und Mitarbeitern nachhaltige Mobilität zur Verfügung gestellt (z.B. Fahrradleasing, Vergünstigung der ÖPNV-Nutzung etc.)." },
  { id: 22, text: "In unserer Einrichtung wird Nachhaltigkeit bei der Beschaffung und Vergabe (von Gütern und Leistungen) als wichtiges Kriterium herangezogen." },
  { id: 23, text: "Werden die Teilnehmenden angeregt, über den verantwortungsvollen Umgang mit Geld und Ressourcen nachzudenken (z.B. Konsumverhalten, Budgetplanung)?" },
  { id: 24, text: "Gibt es Gelegenheiten, bei denen Teilnehmende wirtschaftliche Entscheidungen mitgestalten (z.B. bei Projektausgaben, Materialwahl)?" },
  { id: 25, text: "Unsere Einrichtung bietet regelmäßig Angebote zu ökologischen Themen an, die zu nachhaltigem Handeln im Alltag anregen." },
  { id: 26, text: "In unserer Einrichtung wird regelmäßig geprüft, inwiefern unsere Arbeit Themen wie Klimaschutz unterstützt." },
  { id: 27, text: "Unsere Einrichtung achtet auf einen ressourcenschonenden Alltag (Energie, Abfall, Beschaffung, Wasser). " },
  { id: 28, text: "In unserer Einrichtung werden Werte wie Umweltbewusstsein aktiv gelebt. " },
  { id: 29, text: "In unserer Einrichtung finden regelmäßig Angebote zu Ernährung, Hunger, nachhaltiger Landwirtschaft und Gesundheitsthemen statt." },
  { id: 30, text: "In unseren Bildungsangeboten wird der Bezug zur Lebenswelt der Teilnehmenden bei den Themen Ernährung und Gesundheit berücksichtigt." },
  { id: 31, text: "Verschiedene Lernformen (wie z.B. Vorträge, Projekte, Gruppenarbeiten) werden bewusst in den Alltag integriert." },
  { id: 32, text: "In unserer Einrichtung wird im Alltag auf einen sparsamen Umgang mit Wasser und Energie geachtet und entsprechende Maßnahmen umgesetzt." },
  { id: 33, text: "In unseren Bildungsangeboten werden Energie- und wasserbezogene Themen regelmäßig in Angeboten behandelt, wobei verschiedene Energieformen thematisiert und der Bezug zur Lebenswelt der Teilnehmerinnen und Teilnehmer hergestellt wird." },
  { id: 34, text: "In unserer Einrichtung wird der Umgang mit Papier, Wasser und Energie ressourcenschonend organisiert." },
  { id: 35, text: "In unserer Einrichtung werden Angebote zur Sensibilisierung für ein konsumbewusstes Verhalten angeboten. " },
  { id: 36, text: "Unsere Einrichtung engagiert sich in Projekten zum Umwelt-, Natur- und Artenschutz (z.B. Schutz von Meeren, Wäldern oder Tieren)." }
];

export default questions;

