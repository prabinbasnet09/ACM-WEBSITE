import React from "react";
import { MarkerType } from "reactflow";

export const nodes = [
  {
    id: "1",
    type: "input",
    data: {
      label: (
        <>
          <h3>Freshman Year</h3>
        </>
      )
    },
    position: { x: 250, y: 0 }
  },
  {
    id: "2",
    data: {
      label: <>Introduction to Programming Language</>
    },
    position: { x: 100, y: 100 }
  },
  {
    id: "3",
    data: {
      label: <>Intermediate Programming</>
    },
    position: { x: 300, y: 100 }
  },
  {
    id: "4",
    data: {
      label: "Introduction to Discrete Structures"
    },
    position: { x: 500, y: 100 }
  },
  {
    id: "5",
    data: {
      label: (
        <>
          <h3>Sophomore Year</h3>
        </>
      )
    },
    position: { x: 250, y: 200 }
  },
  {
    id: "6",
    type: "output",
    data: {
      label: (
        <>
          Computer Organization and Assembly (2053)
        </>
      )
    },
    position: { x: -170, y: 300 }
  },
  {
    id: "7",
    type: "output",
    data: {
      label: "Data Structures (2073)"
    },
    position: { x: 0, y: 300 }
  },
  {
    id: "8",
    type: "output",
    data: {
      label: "Ethical and Professional Issues (2098)"
    },
    position: { x: 170, y: 300 }
  },
  {
    id: "9",
    type: "output",
    data: {
      label: "Analysis of Algorithsm (3005)"
    },
    position: { x: 340, y: 300 }
  },
  {
    id: "10",
    type: "output",
    data: {
      label: "Organization of Programming Languages (3010)"
    },
    position: { x: 510, y: 300 }
  },
  {
    id: "11",
    type: "output",
    data: {
      label: "Advanced Discrete Structures (3026)"
    },
    position: { x: 680, y: 300 }
  },
  {
    id: "12",
    data: {
      label: (
        <>
          <h3>Junior Year</h3>
        </>
      )
    },
    position: { x: 250, y: 400 }
  },
  {
    id: "13",
    type: "output",
    data: {
      label: (
        <>
          Object-Oriented Design (3020)
        </>
      )
    },
    position: { x: -50, y: 550 }
  },
  {
    id: "14",
    type: "output",
    data: {
      label: "Internet Programming (3040)"
    },
    position: { x: 130, y: 550 }
  },
  {
    id: "15",
    type: "output",
    data: {
      label: "Theory of Database Management (4055)"
    },
    position: { x: 310, y: 550 }
  },
  {
    id: "16",
    type: "output",
    data: {
      label: "Network and Data Communication (3040)"
    },
    position: { x: 490, y: 550 }
  },
  {
    id: "17",
    type: "output",
    data: {
      label: "Information Securtiy Management (3044)"
    },
    position: { x: 670, y: 550 }
  },
  {
    id: "18",
    data: {
      label: (
        <>
          <h3>Senior Year</h3>
        </>
      )
    },
    position: { x: 250, y: 650 }
  },
  {
    id: "19",
    type: "output",
    data: {
      label: (
        <>
          Operating System (4011)
        </>
      )
    },
    position: { x: -50, y: 800 }
  },
  {
    id: "20",
    type: "output",
    data: {
      label: "Computer Architecture (4012)"
    },
    position: { x: 130, y: 800 }
  },
  {
    id: "21",
    type: "output",
    data: {
      label: "Principal of Software Enginering (4060)"
    },
    position: { x: 310, y: 800 }
  },
  {
    id: "22",
    type: "output",
    data: {
      label: "Advanced networking (3040)"
    },
    position: { x: 490, y: 800 }
  },
  {
    id: "23",
    type: "output",
    data: {
      label: "Information Security Practice (3045)"
    },
    position: { x: 670, y: 800 }
  },
];

export const edges = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e1-3", source: "1", target: "3", animated: true },
  { id: "e1-4", source: "1", target: "4", animated: true },
  { id: "e5-6", source: "5", target: "6", animated: true },
  { id: "e5-7", source: "5", target: "7", animated: true },
  { id: "e5-8", source: "5", target: "8", animated: true },
  { id: "e5-9", source: "5", target: "9", animated: true },
  { id: "e5-10", source: "5", target: "10", animated: true },
  { id: "e5-11", source: "5", target: "11", animated: true },
  { id: "e12-13", source: "12", target: "13", animated: true },
  { id: "e12-14", source: "12", target: "14", animated: true },
  { id: "e12-15", source: "12", target: "15", animated: true },
  { id: "e12-16", source: "12", target: "16", animated: true },
  { id: "e12-17", source: "12", target: "17", animated: true },
  { id: "e18-19", source: "18", target: "19", animated: true },
  { id: "e18-20", source: "18", target: "20", animated: true },
  { id: "e18-21", source: "18", target: "21", animated: true },
  { id: "e18-22", source: "18", target: "22", animated: true },
  { id: "e18-23", source: "18", target: "23", animated: true },
];
