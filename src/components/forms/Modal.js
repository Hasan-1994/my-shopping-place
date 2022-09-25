import classes from './ProductForm.module.css'
function Modal(props) {
    return (<div  className={classes.backdrop} onClick={props.onQuit}/>);
}

export default Modal;