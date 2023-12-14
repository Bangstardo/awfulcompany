import '../style/emaillogin.css';

function EmailLogIn() {

    return(
        <div className='wrapperbox'>
            <form className='loginbox'>
                <label>email here</label>
                <input className='thisisemail' placeholder='email'></input>
                <label>password here</label>
                <input className='thisispassword' placeholder='password'></input>
                <button type='submit' className='submitbutton'>hey look at me</button>
            </form>
        </div>
    );
}


export default EmailLogIn;

