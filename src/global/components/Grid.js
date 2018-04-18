import React,{Component} from 'react';
import axios from 'axios';
import Row from './Row';
class Grid extends Component{

    constructor(){
        super();
        this.state={
            array:[]
        };
    }
    //Fetch data from GET request 
    componentDidMount(){
        return axios.get("http://localhost/manager/getUsers.php")
        .then( (response)=>{
            this.setState({array: response.data});
        });
    }
  
    render(){
        //console.log(this.mapData);
        return(
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Acción</th>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Pago válido hasta</th>
                        <th>Concepto</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.array.map((item,i) => <Row key={i} Id={item.ID_U} Name={item.Name}/>)}
                </tbody>
            </table>
        );
    }
}
export default Grid;