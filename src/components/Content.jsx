import React from "react";
import Link from "next/link";
import { connect } from "react-redux";
import Clock from "./Clock";
import AddCount from "./AddCount";

const Content = ({ title, tick }) => (
  <div>
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>index</a>
          </Link>
        </li>
        <li>
          <Link href="/other">
            <a>other</a>
          </Link>
        </li>
        <li>
          <Link href="/show-redux-state">
            <a>show-redux-state</a>
          </Link>
        </li>
        <li>
          <Link href="/build">
            <a>build</a>
          </Link>
        </li>
        <li>
          <Link href="/build/123">
            <a>build/123</a>
          </Link>
        </li>
      </ul>
    </nav>
    <h1>{title}</h1>
    <Clock lastUpdate={tick.lastUpdate} light={tick.light} />
    <AddCount />
  </div>
);

export default connect((state) => state)(Content);
