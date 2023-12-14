import '../style/googlesign.css'

function SignIn() {

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
    }

    return (
        <>
            <button onClick={signInWithGoogle}></button>
        </>
    )
}

export default SignIn 