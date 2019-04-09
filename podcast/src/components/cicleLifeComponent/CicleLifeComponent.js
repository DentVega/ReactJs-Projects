import React, {Component} from 'react';
import Button from "@material-ui/core/es/Button/Button";

class CicleLifeComponent extends Component {

    //Montado
    constructor(props){
        super(props);
        console.log('1. constructor()');
        this.state = {
            data: [],
            flag: false,
            flagRender: 0
        }
        //Solo instacion de estado, funciones y props
    }

    componentWillMount() {
        //Solo cambios de estado
        //No llamar apis ni susbcripciones
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
        //Solo manejo de la logica del rendereo
        console.log('2. render()');
        return (
            <div>
                hOLA QUE HACE
                {this.state.flag === true ? this.renderTrue() : this.renderFalse()}
                <Button variant="contained" onClick={this.setStateLoqueSea()} color={"primary"}>Update</Button>
            </div>
        );
    }

    componentDidMount() {
        //Si se puede realizar llamadas a Apis, suscripciones, cambios de estado
        console.log('3. componenteDidMount()');
        //const timeOutId =

        this.timeoutId = setTimeout(() => {
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

                            // ACTUALIZACION

    componentWillReceiveProps(nextProps, nextContext) {
        //Solo cambios de estado
    }


    shouldComponentUpdate(nextProps, nextState, nextContext) {
        //Decide si se realiza el rendereo
        //Si devuelve false no se renderea
        //Si devuelve true se renderea (por defecto devuelve true)
        if (this.state.flagRender === 2)
            return false
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        //Cambios de estado
    }



    //Render

    //ComponenteDidUpdate

                    //DESMOTAJE

    componentWillUnmount() {
        //Se tiene que elimar todas las subscripciones
        console.log('6, componentWillUnmount');
        //clearTimeout(this.timeoutId)
    }
                    //MANEJO DE ERRORES
    componentDidCatch(error, errorInfo) {

    }

}

export default CicleLifeComponent;
