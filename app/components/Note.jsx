import { connect } from "react-redux";
import { removeItem } from "../action";
const Note = props => {
    function remove() {
        let { dispatch, index } = props;
        dispatch(removeItem(index));
    }
    return (
        <div>
            <p>{props.children}</p>
            <button onClick={remove}>del</button>
        </div>
    );
};

export default connect()(Note);
