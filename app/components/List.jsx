import NoteForm from "./NoteForm";
import Note from "./Note";
import { connect } from "react-redux";
class List extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <NoteForm />
                {this.props.arr.map((item, i) => {
                    return (<Note key={i} index={i} > {item}</Note>)
                })}
            </div>
        );
    }
}

export default connect(function(state) {
    return { arr: state.arr };
})(List);
