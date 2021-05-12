import { useEffect } from "react";
import { useSelector, connect } from "react-redux";
import { bindActionCreators } from "redux";
import Content from "components/Content";
import { addCount } from "store/count/action";
import { wrapper } from "store/store";
import { serverRenderClock, startClock } from "store/tick/action";
import Link from "next/link";

const build = (props) => {
  const state = useSelector((state) => state);

  useEffect(() => {
    const timer = props.startClock();

    return () => {
      clearInterval(timer);
    };
  }, [props]);

  return (
    <>
      <Content title="build/:id Page" />
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

export default connect(null, mapDispatchToProps)(build);
