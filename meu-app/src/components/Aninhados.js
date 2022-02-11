import React from 'react';

class Ani extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            items: [
                {id: 1, nome: 'itemX', completo: false},
                {id: 2, nome: 'itemY', completo: false},
                {id: 3, nome: 'itemZ', completo: true},
                {id: 4, nome: 'itemW', completo: false}
            ]
        }
    }

    render(){
        return (
            <>
            <ul>
                {React.Children.map(this.props.children, child => child.type == Itens ? child : null)}
                {this.state.items.map((item) =>(
                    <Itens key={item.id} completo={item.completo}>
                        {item.nome}
                    </Itens>
                ))}
            </ul>
            </>
        );
    }
}

class Itens extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const textDecoration = this.props.completo ? 'line-through' : 'none';
        return (
            <>
            <li data-id={this.props.id} style={{textDecoration}}>
                {this.props.children}
            </li>
            </>
        )
    }
}
export {Ani, Itens};