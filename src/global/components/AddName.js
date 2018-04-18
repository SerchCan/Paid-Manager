import React,{Component} from 'react';

class Addname extends Component{
    addtoDB(){
        
    }
    render(){
        return(
            <div className="row">
                <div className="col-sm-9">
                    <input className="form-control" id="Name" type="text" placeholder="Nombre"/>
                </div>
                <div className="col-sm-3">
                    <button className="btn btn-info">Añadir</button>
                </div>
            </div>
        );
    }
}
export default Addname;