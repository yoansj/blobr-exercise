# Blobr Exercise

The goal of this project was to reproduce a Figma model and add user interactions to certain parts of it.

## My Stack

* React
* Material-UI
* Recharts

## Usage

Requires: node, npm

* Clone the repository
* ```cd blobr-exercise```
* ```npm install```
* ```npm start```
* A page on your browser should appear :sunglasses:

## Architecture

All the React Components are stored in the ```Components``` directory.

Most Components have comments to explain how they work.

```
src
├── App.js
├── Components
│   ├── DayTable.jsx
│   ├── MonthsScroller.jsx
│   ├── PeriodManager.jsx
│   ├── Revenues.jsx
│   ├── SidebarButton.jsx
│   ├── Sidebar.jsx
│   ├── Statistics.jsx
│   └── StatisticsRenderer.jsx
├── Icons.js
├── index.css
├── index.js
└── revenues.json
```

#### revenues.json

The application uses this file to display data, this file souldn't be empty and its content should be an array of object with determined fields.

```json
  {
    "date": "Fri 29 Sept 2020",
    "revenue": 29.09,
    "revenueTransactions": 29,
    "refunds": 0,
    "refundsTransactions": 0,
    "chargeback": 0,
    "chargebackTransactions": 1
  }
```