import React from "react";

export function About() {
  return (
    <div style={{ padding: 10 }}>
      <h2>Mdbuf v{process.env.VERSION}</h2>
      <strong>mdbuf</strong> is markdown editor by{" "}
      <a href="https://twitter.com/mizchi" target="_blank">
        @mizchi
      </a>
      <hr />
      <h2>ChangeLog</h2>
      <h3>v1.1.0</h3>
      <ul>
        <li>Start ChangeLog</li>
        <li>Support Native FS API</li>
        <li>Implement command palette</li>
        <li>Implement sync with other tab</li>
        <li>Refine monokai theme</li>
        <li>Use -webkit-font-smoothing</li>
      </ul>
    </div>
  );
}