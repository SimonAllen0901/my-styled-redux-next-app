import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Content from "components/Content";
import { addCount } from "store/count/action";
import { wrapper } from "store/store";
import { serverRenderClock, startClock } from "store/tick/action";

const Other = (props) => {
  useEffect(() => {
    const timer = props.startClock();

    return () => {
      clearInterval(timer);
    };
  }, [props]);

  return <Content title="Other Page" />;
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

export default connect(null, mapDispatchToProps)(Other);
