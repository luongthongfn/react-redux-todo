import { combineReducers } from "redux";
const context = require.context('./module', true, /(.js|.jsx)$/);
let files = {};
context.keys().forEach(filePath => {
    let regex = /(\w+)(?=(.js|.jsx)$)/;
    let filename = filePath.match(regex)[0]
    files[filename] = context(filePath).default;
});
const { arr, toggle } = files;
const reducers = combineReducers({ arr, isAdding: toggle })

export default reducers;