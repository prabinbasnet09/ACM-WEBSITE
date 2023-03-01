import React from "react";
import { useRef, useState, useEffect } from "react";
import { useCallback } from "react";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from "reactflow";
import "reactflow/dist/style.css";

import {
  nodes as initialNodes,
  edges as initialEdges,
} from "../../utils/initial-elements";

const onInit = (reactFlowInstance) => {
  console.log("flow loaded:", reactFlowInstance);
};

export default function Home() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );



  const divRefs = useRef([]);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.05,
    };
    const observer = new IntersectionObserver(handleIntersect, options);
    divRefs.current.forEach((div) => observer.observe(div));
  }, []);

  function handleIntersect(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }

  return (
    <div class="home" style={{maxWidth: "1650px", margin: "0 auto"}}>
      <div className="home--title">
        Welcome to The ACM Student Chapter at ULM
      </div>

      <section class="section">
        <div class="grid">
          <div
            class="item item--medium animated-div"
            tabIndex={0}
            ref={(el) => (divRefs.current[0] = el)}
          ></div>
          <div
            class="item item--large animated-div"
            tabIndex={0}
            ref={(el) => (divRefs.current[1] = el)}
          ></div>
          <div
            class="item item--medium animated-div"
            tabIndex={0}
            ref={(el) => (divRefs.current[2] = el)}
          ></div>
          <div
            class="item item--large animated-div"
            tabIndex={0}
            ref={(el) => (divRefs.current[3] = el)}
          ></div>
          <div
            class="item item--full animated-div"
            tabIndex={0}
            ref={(el) => (divRefs.current[4] = el)}
          ></div>
          <div
            class="item item--medium-1 animated-div"
            tabIndex={0}
            ref={(el) => (divRefs.current[5] = el)}
          ></div>
          {/* <div class="item item--medium"></div> */}
        </div>
      </section>
      <section
        className="home--aboutACM animated-div"
        tabIndex={0}
        ref={(el) => (divRefs.current[6] = el)}
      >
        <p className="heading">ACM as a global community</p>
        <p className="description">
        The Association for Computing Machinery (ACM) is a global professional organization for individuals who work in the field of computing and technology. Founded in 1947, ACM is dedicated to advancing the science and practice of computing by promoting educational and research opportunities, developing professional standards, and supporting the professional growth of its members.
        <br />
        <br />
        As a global community, ACM has members in more than 190 countries around the world, including students, researchers, educators, and professionals from a variety of computing disciplines. Through its various initiatives, including conferences, publications, and special interest groups, ACM provides a platform for members to connect with each other, share ideas, and collaborate on cutting-edge research and development in the field of computing.
        <br />
        <br />
        ACM also works to advance the understanding and importance of computing within society, through efforts such as public policy advocacy and the promotion of ethical and socially responsible computing practices. Overall, ACM serves as a leading voice and hub for the global computing community, bringing together individuals and organizations to drive innovation and progress in the field.
        </p>
      </section>
      <section
        className="home--aboutChapter animated-div"
        tabIndex={0}
        ref={(el) => (divRefs.current[7] = el)}
      >
        <p className="heading">Why ACM Student Chapter at ULM?</p>
        <p className="description">
          ACM Student Chapter at ULM is a student organization that is a part of the global ACM community. Almost 100+ universities
          in US are part of ACM. ACM at ULM is focused on providing students with opportunities to learn and grow in the field of computer
          science. ACM at ULM enhances student's programming experience through different workshops and coding competitions. Students are determined
          to use this platform to learn, develop, and share their skills in Computer Science. 
        </p>
      </section>

      <section className="home--courses">
        <p className="home--courses--title">CS courses offered at ULM</p>
        <div className="home--courses--course-chart">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={onInit}
            fitView
            attributionPosition="top-right"
            preventScrolling={false}
          >
            <MiniMap />
            <Controls />
            <Background color="#aaa" gap={16} />
          </ReactFlow>
        </div>
      </section>
    </div>
  );
}
