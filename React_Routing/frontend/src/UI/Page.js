import classes from './Page.module.css';

function Page(props){

    return (
        <div className={`${classes.card} ${props.className}`}>{props.children}</div>
    );
}

export default Page;