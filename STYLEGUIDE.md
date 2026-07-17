# STYLEGUIDE.md

# Entwicklungsrichtlinien

Version: 1.0

Dieses Dokument definiert die Regeln für die Entwicklung des Projekts.

Ziel ist ein konsistenter, gut lesbarer und langfristig wartbarer Quellcode.

---

# Grundprinzipien

Bei jeder Implementierung gelten folgende Prioritäten:

1. Lesbarkeit
2. Verständlichkeit
3. Wartbarkeit
4. Erweiterbarkeit
5. Performance

Kürzerer Code ist nicht automatisch besserer Code.

---

# Sprache

## Dokumentation

Dokumentationen werden in deutscher Sprache verfasst.

## Quellcode

Alle Bezeichner werden in englischer Sprache geschrieben.

Dazu gehören:

* Variablen
* Funktionen
* Klassen
* Typen
* Interfaces
* Komponenten
* CSS-Klassen
* Dateinamen

---

# Benennung

Namen sollen den Zweck eindeutig beschreiben.

Beispiele:

```ts
bootScreen
progressBar
developerMonitor
monitorState
powerOverlay
```

Vermeiden:

```ts
tmp
obj
value
data
test
```

Abkürzungen werden nur verwendet, wenn sie allgemein üblich sind (z. B. HTML, CSS, API, URL).

---

# Komponenten

Jede Komponente besitzt genau eine fachliche Verantwortung.

Komponenten sollen:

* möglichst klein bleiben
* klar benannt sein
* unabhängig verständlich sein
* wiederverwendbar sein

Große Komponenten werden frühzeitig aufgeteilt.

---

# Funktionen

Funktionen sollen:

* eine Aufgabe erfüllen
* klar benannt sein
* möglichst kurz bleiben
* gut testbar sein

Verschachtelte Logik ist möglichst zu vermeiden.

---

# TypeScript

TypeScript wird konsequent genutzt.

Regeln:

* `any` vermeiden
* passende Typen verwenden
* Interfaces und Typen wiederverwenden
* sprechende Typnamen wählen

Typisierung hat Vorrang vor implizitem Verhalten.

---

# CSS

Das Projekt verwendet handgeschriebenes CSS.

Grundsätze:

* semantische Klassennamen
* konsistente Einrückung
* CSS-Variablen für Farben und Abstände
* Komponenten möglichst unabhängig gestalten

Frameworks wie Tailwind oder Bootstrap werden nicht eingesetzt.

---

# Kommentare

Kommentare erklären **warum**, nicht **was**.

Schlecht:

```ts
// Increment counter
counter++;
```

Gut:

```ts
// Delay creates a more natural monitor boot sequence
await delay(300);
```

---

# Projektstruktur

Neue Dateien werden nur erstellt, wenn sie die Lesbarkeit oder Wartbarkeit verbessern.

Unnötige Ordner und Dateien werden vermieden.

---

# Refactoring

Vor jeder größeren Änderung prüfen:

* Kann vorhandener Code erweitert werden?
* Entsteht doppelte Logik?
* Wird die Lesbarkeit verbessert?

Refactoring dient der Vereinfachung, nicht der Komplexität.

---

# Git

Commits sollen einen abgeschlossenen Arbeitsschritt beschreiben.

Beispiele:

```text
Refactor monitor state handling

Split DeveloperMonitor into smaller modules

Improve boot animation timing
```

Kleine Zwischenstände müssen nicht commitet werden.

---

# Dokumentation

Nur Informationen dokumentieren, die langfristig relevant sind.

Kurzlebige Details gehören nicht in die Dokumentation.

---

# Grundsatz

Jeder Entwickler – oder KI-Agent – sollte den Quellcode möglichst ohne zusätzliche Erklärungen verstehen können.

Der Quellcode selbst ist die wichtigste Dokumentation.
