import React from 'react';

class Lista extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: ["item1", "item2", "item3", "item4"]
        }
    }

    render(){
        return (
            <>
            <ul>
                {this.state.items.map((item, indice) => <li key={indice}>{item}</li>)}
            </ul>
            </>
        )
    }
}

//**********************************************************************************************************************

class Lista2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                {id: 1, nome: 'itemA', completo: false},
                {id: 2, nome: 'itemB', completo: false},
                {id: 3, nome: 'itemC', completo: true},
                {id: 4, nome: 'itemD', completo: false},
            ]
        }
    }

    render() {
        return (
            <>
            <ul>
                {React.Children.map(this.props.children, child => child.type == Item ? child : null)}
            
                {this.state.items.map((item) =>(
                    <Item key={item.id} completo={item.completo}>
                        {item.nome}
                    </Item>
                ))}
            </ul>
            </>
        );
    }
}

class Item extends React.Component {
    constructor(props) {
        super(props);        
    }

    render() {
        const textDecoration = this.props.completo ? 'line-through' : 'none';
        return(
            <>
            <li data-id={this.props.id} style={{textDecoration}}>
                {this.props.children}
            </li>
            </>
        )
    }
}


//export default Lista;
export {Lista, Lista2, Item};