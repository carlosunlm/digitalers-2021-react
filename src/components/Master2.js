import React from "react";

class Master2 extends React.Component {

    constructor() {
        super();

        this.state = {
            alumnos:[],
            nombres:'',
            id:0
        };

        this.add = () => {

        }

        this.remove = () => {

        }

        this.edit = () => {

        }
    }

    //montado
    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillUnmount() {

    }

    componentDidUpdate() {
        
    }
    //actualizacion

    //desmontado


    render() {
        console.log('render');
        return <>
            
            
        </>
    };
}

export default Master2;