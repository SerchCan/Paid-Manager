import React,{Component} from 'react';
import axios from 'axios';
import qs from 'qs';
class Addname extends Component{
    constructor(){
        super();
        let today=new Date();
        let mm=((today.getMonth()+1)>9 ? '' : '0') + (today.getMonth()+1);
        let yyyy=today.getFullYear();
        let dd=((today.getDate()>9)?'':'0')+today.getDate();
        let date=yyyy+'-'+mm+'-'+dd;

        this.state={
            user: '',
            date: date
        };
        this.submit=this.submit.bind(this);
        this.updateValue=this.updateValue.bind(this);
    }
    updateValue(event){
        this.setState({
            user: event.target.value
        });
    }
    submit(){
        axios.post('http://localhost:80/manager/users.php',
        qs.stringify({
            user:this.state.user,
            date: this.state.date
        }))
        .then(function(response){
            if(response.data===1){
                console.log("Added successfully");
                this.setState({
                    user: ''
                });
            }
            else{
                console.log("Error");
            }
        })
        .catch(function(error){
            console.log("There's a error");
        });
    }
    render(){
        return(
            <div className="row">
                <div className="col-sm-9">
                    <input className="form-control" value={this.state.user} onChange={this.updateValue} type="text" placeholder="Nombre"/>
                </div>
                <div className="col-sm-3">
                    <button onClick={this.submit} className="btn btn-info">Añadir</button>
                </div>
            </div>
        );
    }
}
export default Addname;