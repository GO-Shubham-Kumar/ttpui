import React from 'react';

function Login(){
    return (
        <div>
            <form method-="post">
                <input name="username" type="text" />
                <input name="password" type="password" />
                <button type="login">Login</button>
            </form>
        </div>
    )
}

export default Login