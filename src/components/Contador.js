import React from 'react';

class Contador extends React.Component{
    state = {
        numero: 0
    }   
    componentDidMount(){
        setInterval(() => {
            this.setState({
                numero: this.state.numero + 1
            })
        },this.props.tempo) 

    }

    render(){
        return(
            <p>{this.state.numero} </p>
        )
    }


}
export default Contador;