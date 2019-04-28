import React, {Component} from 'react';
import SessionUser from "../sessionUser/SessionUser";
import App from "../../App";

class Init extends Component {
    render() {
        const authentication = true;
        return (
            <div>
                {
                    authentication ? <App/> : <SessionUser/>
                }
            </div>
        );
    }
}

export default Init;
