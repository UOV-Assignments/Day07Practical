export default function ChildComp(props){
    return(
        <>
        <h3>Hello I'm Child</h3>
        {/* Send message to parent component */}
        {
            props.setFunc(`Hello I'm Lasanga`)
        }
        </>
    )
}