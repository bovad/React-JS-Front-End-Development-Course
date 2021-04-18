import classes from './watch.module.css'

const Watch = (props) => {
    console.log(props.watchUrl)
    return(
      <div>
        <img className={classes.bigImage} src={props.watchUrl} alt="watch"/>
      </div>
    )
} 

export default Watch;