import React from "react";
import "./Table.css";

export default class Table extends React.Component {
 
    constructor(props){
    super(props);
    this.getHeader = this.getHeader.bind(this);
    this.getRowsData = this.getRowsData.bind(this);
    this.getKeys = this.getKeys.bind(this);
    }
    
    getKeys = function(){
        const newData = Object.keys(this.props.data).reduce((result, currentKey) => {
            if (typeof this.props.data[currentKey] === 'string' || this.props.data[currentKey] instanceof String) {
              result.push(currentKey);
            } 
            return result;
          }, []);
          return newData;
    }
    
    getHeader = function(){
      var keys = this.getKeys();
      return keys.map((key, index)=>{
      return <th key={key}>{key.toUpperCase()}</th>
      })
    }
    
    getRowsData = function(){
      var items = this.props.data;
      var keys = this.getKeys();
      return items.map((row, index)=>{
      return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
      })
    }
  
    render() {
    return (
    <div>
    <table>
    <thead>
    <tr>{this.getHeader()}</tr>
    </thead>
    <tbody>
    {this.getRowsData()}
    </tbody>
    </table>
    </div>
    
    );
    }
   }
  
   const RenderRow = (props) =>{
    return props.keys.map((key, index)=>{
      return <td key={props.data[key]}>{props.data[key]}</td>
      })
   }
  