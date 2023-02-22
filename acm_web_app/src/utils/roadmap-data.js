import React from "react";
import { MarkerType } from "reactflow";

export const nodes = [
  {
    id: "1",
    type: "input",
    data: {
      label: (
        <>
          <h3>Arrays & Hashing</h3>
        </>
      )
    },
    position: { x: 200, y: 0 }
  },
  {
    id: "2",
    data: {
      label: <h3>Two Pointers</h3>
    },
    position: { x: 50, y: 150 }
  },
  {
    id: "3",
    data: {
      label: <h3>Stack</h3>
    },
    position: { x: 400, y: 150 }
  },
  {
    id: "4",
    data: {
      label: (
        <>
          <h3>Sliding Window</h3>
        </>
      )
    },
    position: { x: -170, y: 300 }
  },
  {
    id: "5",
    data: {
      label: (
        <>
          <h3>Linked List</h3>
        </>
      )
    },
    position: { x: 50, y: 300 }
  },
  {
    id: "6",
    data: {
      label: (
        <>
          <h3>Binary Search</h3>
        </>
      )
    },
    position: { x: 270, y: 300 }
  },
  {
    id: "7",
    data: {
      label: (
        <>
          <h3>Trees</h3>
        </>
      )
    },
    position: { x: 150, y: 450 }
  },
  {
    id: "8",
    type: "output",
    data: {
      label: 
        <h3>
            Tries
        </h3>
    },
    position: { x: -80, y: 600 }
  },
  {
    id: "9",
    type: "output",
    data: {
      label: 
        <h3>
            Heap / Priority Queue 
        </h3>
    },
    position: { x: 150, y: 600 }
  },
  {
    id: "10",
    data: {
      label:
        <h3>
            Backtracking
        </h3>
    },
    position: { x: 380, y: 600 }
  }
];

  
export const edges = [
    { id: "e1-2", source: "1", target: "2", animated: true },
    { id: "e1-3", source: "1", target: "3", animated: true },
    { id: "e2-4", source: "2", target: "4", animated: true },
    { id: "e2-5", source: "2", target: "5", animated: true },
    { id: "e2-6", source: "2", target: "6", animated: true },
    { id: "e5-7", source: "5", target: "7", animated: true },
    { id: "e6-7", source: "6", target: "7", animated: true },
    { id: "e7-8", source: "7", target: "8", animated: true },
    { id: "e7-9", source: "7", target: "9", animated: true },
    { id: "e7-10", source: "7", target: "10", animated: true },
];