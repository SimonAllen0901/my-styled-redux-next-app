import Link from "next/link";
import { connect } from "react-redux";
import Clock from "./Clock";
import AddCount from "./AddCount";

const Content = ({ title, tick }) => (
  <div>
    <nav>
      <Link href="/">
        <a>index</a>
      </Link>
      <Link href="/other">
        <a>other</a>
      </Link>
      <Link href="/show-redux-state">
        <a>show-redux-state</a>
      </Link>
    </nav>
    <h1>{title}</h1>
    <Clock lastUpdate={tick.lastUpdate} light={tick.light} />
    <AddCount />
  </div>
);

export default connect((state) => state)(Content);
