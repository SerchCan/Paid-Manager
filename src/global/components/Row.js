import React,{Component} from 'react';
import axios from 'axios';
import qs from 'qs';
import spotify from '../imgs/Spotify.png';
class Row extends Component{
    constructor(props){
        super(props);
        this.state={
            month:"",
            year:2017
        }
        this.pagar = this.pagar.bind(this);
        this.getMonth=this.getMonth.bind(this);
    }
    componentDidMount(){
        return axios.get("http://localhost/manager/getPaidCount.php",{params:{id:this.props.Id}}).then(
            (response)=>{
                let year= parseInt(response.data / 12,10);
                let month=(response.data%12);
                month=this.getMonth(month)
                this.setState({months:month, year:(2017+year)});
            }
        )
    }
    getMonth(month){
        let init=3;                         //CHANGE THIS VALUE  TO YOUR INITIAL MONTH 3==april.
        let date=(init+month)%12;
        let str=""
        switch(date){
            case 0: str= "Enero"
            break;
            case 1: str= "Febrero"
            break;
            case 2: str= "Marzo"
            break;
            case 3: str= "Abril"
            break;
            case 4: str= "Mayo"
            break;
            case 5: str= "Junio"
            break;
            case 6: str= "Julio"
            break;
            case 7: str= "Agosto"
            break;
            case 8: str= "Septiembre"
            break;
            case 9: str= "Octubre"
            break;
            case 10: str= "Noviembre"
            break;
            case 11: str= "Diciembre"
            break;
            default: str="Abril"
            break;
        }
        return str;
    }

    pagar(){
        axios.post("http://localhost/manager/paid.php",qs.stringify({
            id:this.props.Id
        })).then((response)=>{
            console.log(response.data);
            alert("Payment succesfully")
            this.componentDidMount()
        })
    }
    render(){
        return(
            <tr>
                <td>
                <button onClick={this.pagar} className="btn btn-success">Pagar</button>  
                </td>
                <td>
                    {this.props.Id}
                </td>
                <td>
                    {this.props.Name}
                </td>
                <td>
                02 / {this.state.months} / {this.state.year}
                </td>
                <td>
                    <img src={spotify} alt="Spotify" width="30" height="30"/> $25.00
                </td>
            </tr>
        );
    }
}
export default Row;