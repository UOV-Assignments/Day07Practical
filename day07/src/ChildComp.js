export default function ChildComp(props){
    return(
        <>
        <h3>Hello I'm Child</h3>
        {
            props.setFunc(`Hello I'm Lasanga`)
        }
        </>
    )
}