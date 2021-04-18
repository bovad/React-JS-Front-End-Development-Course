import classes from './Feature.module.css';

const TextDisplay = (props) => {
    return(
        <div className={classes.text}>
            {props.text === 'Time' ? <span>Time <br/> 11:54 pm</span> : <span>Heart Rate <br/> 80</span> }
        </div> 
    )    
}

export default TextDisplay;