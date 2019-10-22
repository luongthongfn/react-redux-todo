import { connect } from "react-redux";
import { addItem, toggle } from "../action";
class NoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
        this.keyPress = this.keyPress.bind(this);
        this.toggle = this.toggle.bind(this);
        // document.addEventListener("keypress", function(e) {
        //     if (e.key == "Enter") {
        //         let { dispatch } = props;
        //         dispatch(toggle());
        //     }
        // });
    }
    add(item) {
        let { dispatch, isAdding } = this.props;
        dispatch(addItem(item));
        dispatch({
            type: "TOGGLE_IS_ADDING"
        });
    }
    keyPress(key, item) {
        if (key == "Enter") {
            this.add(item);
        }
    }
    toggle() {
        let { dispatch } = this.props;
        dispatch(toggle());
    }
    render() {
        if (this.props.isAdding) {
            return (
                <div>
                    <input
                        type="text"
                        autoFocus
                        ref="item"
                        onKeyPress={(e, item) =>
                            this.keyPress(e.key, this.refs.item.value)
                        }
                    />
                    <button onClick={() => this.add(this.refs.item.value)}>
                        add
                    </button>
                </div>
            );
        } else {
            return <button onClick={this.toggle}>+</button>;
        }
    }
}

export default connect(function(state) {
    return { isAdding: state.isAdding };
})(NoteForm);
