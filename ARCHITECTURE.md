# ARCHITECTURE.md

# Developer Handbook

Version: 1.0

Dieses Dokument beschreibt die grundlegenden Prinzipien, die Architektur und die Entwicklungsphilosophie des Projekts.

Es dient als zentrale Wissensquelle für Entwickler und KI-Agenten.

---

# Projektmission

Dieses Projekt ist ein persönliches Entwickler-Portfolio.

Es soll nicht in erster Linie Marketing betreiben, sondern die Arbeitsweise, Denkweise und technischen Fähigkeiten des Entwicklers nachvollziehbar präsentieren.

Kompetenz soll durch nachvollziehbare Lösungen sichtbar werden.

---

# Architekturziele

Jede Entscheidung orientiert sich an folgenden Zielen:

* hohe Lesbarkeit
* einfache Wartbarkeit
* klare Verantwortlichkeiten
* geringe Kopplung
* nachvollziehbare Struktur
* langfristige Erweiterbarkeit

---

# Projektstruktur

Die Anwendung folgt einer komponentenbasierten Architektur.

```text
src/
├── assets/
├── components/
├── layouts/
├── pages/
├── scripts/
├── styles/
├── types/
└── utils/
```

Jeder Ordner besitzt eine klar definierte Verantwortung.

Neue Verzeichnisse werden nur angelegt, wenn sie die Übersicht verbessern.

---

# Komponenten

Komponenten bilden die Benutzeroberfläche.

Grundregeln:

* eine fachliche Verantwortung
* möglichst unabhängig
* wiederverwendbar
* klar benannt
* leicht verständlich

Komplexe Komponenten werden rechtzeitig aufgeteilt.

---

# DeveloperMonitor

Der DeveloperMonitor ist ein zentrales Gestaltungselement der Website.

Er simuliert den Start eines professionellen Monitors und verbindet Design mit Softwareentwicklung.

### Zielstruktur

```text
DeveloperMonitor/

DeveloperMonitor.astro
monitor.ts
monitor-state.ts
monitor.css
```

Weitere Dateien werden nur ergänzt, wenn sie die Wartbarkeit verbessern.

---

# Zustandsmodell

Der Monitor arbeitet mit einer einfachen Zustandsmaschine.

```text
OFF
 ↓
POWER_ON
 ↓
BOOT
 ↓
RUNNING
```

Jeder Zustand besitzt eine klar definierte Aufgabe.

---

# Datenfluss

Der grundsätzliche Ablauf lautet:

```text
Power On
 ↓
State wechseln
 ↓
Bootsequenz starten
 ↓
Bildschirm aufhellen
 ↓
Overlay ausblenden
 ↓
Video starten
 ↓
Fertig
```

Der Ablauf soll jederzeit nachvollziehbar bleiben.

---

# Designprinzipien

Die Gestaltung orientiert sich an professionellen Softwareunternehmen.

Der gewünschte Eindruck:

* ruhig
* modern
* technisch
* hochwertig
* vertrauenswürdig

Verzichtet wird bewusst auf:

* Neonfarben
* Gaming-Optik
* übertriebene Animationen
* unnötige Effekte
* Marketing-Floskeln
* Buzzwords ohne Inhalt

Weniger ist mehr.

---

# Entwicklungsprinzipien

Bei mehreren möglichen Lösungen wird bevorzugt:

1. die einfachste Lösung
2. die verständlichste Lösung
3. die wartbarste Lösung

Komplexität wird nur eingeführt, wenn sie einen klaren Nutzen bringt.

---

# KI-Unterstützung

KI ist ein Werkzeug zur Unterstützung der Entwicklung.

Sie kann eingesetzt werden für:

* Architektur
* Refactoring
* Code-Reviews
* Dokumentation
* Ideendiskussion
* Fehlersuche

Die Verantwortung für technische Entscheidungen verbleibt beim Entwickler.

---

# Wichtige Architekturentscheidungen

## Astro

Gewählt aufgrund der hohen Performance und der Eignung für statische Websites.

---

## TypeScript

Verbessert Wartbarkeit, Lesbarkeit und Fehlersicherheit.

---

## Eigenes CSS

Das Projekt verwendet bewusst kein CSS-Framework.

Dadurch bleiben Struktur und Darstellung vollständig nachvollziehbar.

---

## Dokumentation

Die Dokumentation soll die Entwicklung unterstützen.

Nicht verlangsamen.

Es werden ausschließlich Informationen dokumentiert, die voraussichtlich langfristig relevant bleiben.

---

# Erweiterungsregeln

Vor jeder größeren Änderung prüfen:

* Löst die Änderung ein echtes Problem?
* Verbessert sie die Architektur?
* Erhöht sie die Verständlichkeit?
* Passt sie zur Projektphilosophie?

Neue Technologien werden nur übernommen, wenn sie einen klaren Mehrwert bieten.

---

# Langfristige Vision

Das Projekt soll kontinuierlich wachsen, ohne unnötig komplex zu werden.

Neue Funktionen werden bevorzugt durch Erweiterung bestehender Strukturen umgesetzt.

Architektur und Wartbarkeit besitzen langfristig eine höhere Priorität als die Anzahl der Funktionen.

---

# Grundsatz

Dieses Repository soll zeigen, wie ein Entwickler arbeitet.

Nicht, wie gut er sich vermarkten kann.

Jede technische Entscheidung sollte diesem Ziel dienen.
