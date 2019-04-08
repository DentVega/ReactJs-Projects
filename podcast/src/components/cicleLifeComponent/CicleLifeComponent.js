import React, {Component} from 'react';
import Button from "@material-ui/core/es/Button/Button";

class CicleLifeComponent extends Component {

    constructor(props){
        super(props);
        console.log('1. constructor()');
        this.state = {
            data: [],
            loquesea: false,
            tua: 0
        }
    }

    componentDidMount() {
        console.log('3. componenteDidMount()');
        //const timeOutId =

        setTimeout(() => {
            this.setState({
                data: [
                    {
                        id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
                        firstName: 'Freda',
                        lastName: 'Grady',
                        email: 'Leann_Berge@gmail.com',
                        jobTitle: 'Legacy Brand Director',
                        twitter: 'FredaGrady22221-7573',
                        avatarUrl:
                            'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon',
                    },
                    {
                        id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
                        firstName: 'Major',
                        lastName: 'Rodriguez',
                        email: 'Ilene66@hotmail.com',
                        jobTitle: 'Human Research Architect',
                        twitter: 'MajorRodriguez61545',
                        avatarUrl:
                            'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon',
                    },
                    {
                        id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
                        firstName: 'Daphney',
                        lastName: 'Torphy',
                        email: 'Ron61@hotmail.com',
                        jobTitle: 'National Markets Officer',
                        twitter: 'DaphneyTorphy96105',
                        avatarUrl:
                            'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon',
                    },
                ],
            })
        }, 3000)
    }


    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.state.tua === 2)
            return false
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('5, componenteDidUpdate');
        console.log({
            prevProps: prevProps,
            prevState: prevState
        });
        console.log({
            props: this.props,
            state: this.state,
        })
    }

    componentWillUnmount() {
        console.log('6, componentWillUnmount');
    }

    renderTrue = () => {
      return <h1> True</h1>
    };

    renderFalse = () => {
        return <h1> False</h1>
    };

    setStateLoqueSea = () => {
        this.setState({ loquesea: true,
        tua: 2})
    };

    render() {
        console.log('2. render()');
        return (
            <div>
                hOLA QUE HACE
                {this.state.loquesea == true ? <h1>true</h1> : <h1>false</h1>}
                <Button onClick={this.setStateLoqueSea()}/>
            </div>
        );
    }
}

export default CicleLifeComponent;