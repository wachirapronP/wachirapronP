import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Layout, Input, Button, Card, Table } from 'antd';
import { compile} from 'mathjs';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const { Content } = Layout;

var dataInTable = []

const columns = [
    {
        title: "Iteration",
        dataIndex: "iteration",
        key: "iteration"
    },
    {
        title: "X",
        dataIndex: "x",
        key: "x"
    },
    {
        title: "Error",
        key: "error",
        dataIndex: "error"
    }
];


var fx ,x;

class onepoint extends Component {

    constructor() {
        super();
        this.state = {
            fx: " ",
            x: 0,
            showTable: false,
            showGraph: false,
     
        }
        this.handleChange = this.handleChange.bind(this);
        this.onepoint= this.onepoint.bind(this);
    }
    function(X) {
        var expr = compile(this.state.fx);
        let scope = { x: parseFloat(X) , e : Math.exp(x) };

        return expr.eval(scope);
    }
    error(xnew, xold) {
        return Math.abs((xnew - xold) / xnew);
    }
    createTable(x, error) {
        dataInTable = []
        for (var i = 0; i < x.length; i++) {
            dataInTable.push({
                iteration: i + 1,
                x: x[i],
                error: error[i]
            });
        }
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });

    }
    onepoint(x) {
        fx = this.state.fx;
        var xn=x;
        var xo=0;
        var sum = parseFloat(0.000000);
        var keepdata=[]
        keepdata['x']=[]
        keepdata['error']=[]  
        var n = 0;
        do{
            xn=this.function(xn);
            if(n==0){
                sum =1;
             }
             else{
                 sum=this.error(xn,xo);
                 xo=xn;
             }
            
                keepdata['x'][n]=xn;
                keepdata['error'][n] = Math.abs(sum).toFixed(8); 
            n++;
            
        }while(Math.abs(sum) > 0.000001);

        this.createTable(keepdata['x'],keepdata['error']);
        this.setState({
            showTable: true,
            showGraph: true
        })
    }
   
    render() {
        return (
            <div >
                
                <Content onChange={this.handleChange} >
                    <Content
                        style={{
                            width: 500,
                        }}
                    >
                    <h2>One-Point Iteration</h2>
                    <br/>
                    <h2>Fx </h2>
                    <Input size="large" name="fx" style={{ width: 300 }}></Input>
                    <h2>x </h2>
                     <Input size="large" name="fx" style={{ width: 300 }}></Input>
                         
                    <br/><br/>
                    <br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button onClick={() => this.onepoint(parseFloat(this.state.xl), parseFloat(this.state.xr))}
                                style={{  marginLeft: 90 ,color:'#ffffff',background:'#12406A'}}>Submit</Button><br /><br />
                
                    </Content>
                    {this.state.showTable &&

                        <Card
                        bordered={true}
                        style={{ width: "50%", float: "inline-start", marginBlockStart: "2%" }}
                        id="output12"
                    >
                        <Table columns={columns} dataSource={dataInTable} bodyStyle={{ fontWeight: "bold", fontSize: "18px", color: "black"}}></Table>
                    </Card>
}
                    <br /><br />
                    {this.state.showGraph &&
                        <Card
                           
                        >
                            <LineChart width={1000} height={200} data={dataInTable}
                               margin={{ top: 30, bottom: 10 }}>
                                <XAxis dataKey="error" />
                                <YAxis />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip />
                                <Legend />
                                <Line name="error" type="black" dataKey="error" stroke="#8884d8"/>
                            </LineChart>
                        </Card>
                    }
                    <br /><br />
                  
                    <br /><br />
                </Content>
            </div>
        );
    }
}
export default onepoint;
