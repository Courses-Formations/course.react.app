export default function EventForm(){
function SignUpSubmited(e){
 e.preventDefault();
 alert("Success!.")
}
    return(
<div>
    <h2>Sign Up</h2>
    <form onSubmit={SignUpSubmited}>
        <div>
            <input type="text" placeholder="Enter you name" ></input>
        </div>
        <div>
            <button type="submit" value="Submit" color="primary" >Submit</button>
        </div>
    </form>
</div>
);
}