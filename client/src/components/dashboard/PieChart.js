import React, { Component } from "react";
import { VictoryPie, VictoryTheme } from "victory";
import ReactToPrint from 'react-to-print';

class PieChart extends Component {
  render() {
    const labels = [["New" , "Assigned" ,"Planned", "Pending","Solved","Closed"],
    ["Very Low" , "Low" ,"Medium", "High","Very High"],
    ["Incident", "Request"],
    ["Very Low" , "Low" ,"Medium", "High","Very High"],
    ["Very Low" , "Low" ,"Medium", "High","Very High","Major"]];

    const newData = this.props.data.map((dataElement, index) => ({
      x: (dataElement.data) + "%  " + labels[this.props.ind][index],
      y: dataElement.data
    }));

    return (

        <div className="graph-wrapper">

        <VictoryPie  ref={el => (this.componentRef = el)}
          height={350}
          animate={{ duration: 2000 }}
          theme={VictoryTheme.material}




          
          colorScale={["#ffcd32", "#47acb1", "#f26522","#f66666","#f22222","#f99999"]}
          style={{ labels: { fill: "black", fontSize:8 , fontWeight: "bold" , padding : 10}}}
          innerRadius={110}
          data={newData}
        />
        
        <ReactToPrint
          trigger={() => {
            return <a href="#" > Imprimer cette page </a>;         
          }}
          content={() => this.componentRef}
        />
        
      </div>
    );
  }
}

export default PieChart;
