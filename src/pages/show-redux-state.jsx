import { useEffect } from "react";
import { useSelector, connect } from "react-redux";
import { bindActionCreators } from "redux";
import Content from "components/Content";
import { addCount } from "store/count/action";
import { wrapper } from "store/store";
import { serverRenderClock, startClock } from "store/tick/action";
import Link from "next/link";

const codeStyle = {
  background: "#ebebeb",
  width: 400,
  padding: 10,
  border: "1px solid grey",
  marginBottom: 10,
};

const ShowReduxState = (props) => {
  const state = useSelector((state) => state);

  useEffect(() => {
    const timer = props.startClock();

    return () => {
      clearInterval(timer);
    };
  }, [props]);

  return (
    <>
      <Content title="Show Redux State Page" />
      <pre style={codeStyle}>
        <code>{JSON.stringify(state, null, 4)}</code>
      </pre>
      <Link href="/">
        <a>Go Back Home</a>
      </Link>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    store.dispatch(serverRenderClock(true));
    store.dispatch(addCount());
  }
);

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
    startClock: bindActionCreators(startClock, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(ShowReduxState);
