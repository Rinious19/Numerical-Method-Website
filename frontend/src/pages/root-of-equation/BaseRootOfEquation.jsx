import React from "react";
import Plot from "react-plotly.js";
import { Form, Button, Table, Card, Container, Row, Col } from "react-bootstrap";
import { evaluate } from 'mathjs';
import { fetchRandomPreset } from "../../PresetManager"; //* Import ฟังก์ชันดึงข้อมูล
import { MathJax } from "better-react-mathjax"; //* Import MathJax
import MathDisplay from "../../components/MathDisplay";

class BaseRootOfEquation extends React.Component {
  constructor(props) { 
    super(props);
    //@ State ส่วนกลางสำหรับทุก Method
    this.state = {
      fx: '',
      xStart: '',
      xEnd: '',
      tol: '', //* ค่า Tolerance
      maxIterations: 100,
      iterations: [], //* ข้อมูลการวนซ้ำแต่ละรอบ
      plotData: null, //* ข้อมูลสำหรับกราฟ
      plotLayout: null, //* การตั้งค่า layout ของกราฟ
      precisionForError: 4,
      title: 'Root of Equation Solver', //* ชื่อ Solution
      collectionName: 'rootofequationpresets', //* ชื่อ Table ในการดึงข้อมูลจาก DB
    };
  }
  //@ Helper function สำหรับ evaluate f(x)
  f = (x) => {
    try {
      return evaluate(this.state.fx, { x }); //* evaluate(expression, scope)
    } catch (error) {                //* scope = object ที่กำหนดค่าตัวแปรใน expression เช่น { x: 2 }
      console.error("Error evaluating function:", error);
      return NaN;
    }
  };

  //? Methods for Calculate and Prepare Data
  //@ 1. Method หลักสำหรับการคำนวณ
  calculateMethod = () => {
    //! Method นี้ต้องถูก override ใน subclass
    alert("calculateMethod() must be implemented in the subclass.");
  };

  //@ 2. Method ใหม่สำหรับเตรียมข้อมูลกราฟ
  //! Method นี้ควรถูก override บาง Solution เพื่อเตรียม plotData และ plotLayout
  prepareGraphData = (iterations) => {
    const xStart = Number(this.state.xStart);
    const xEnd = Number(this.state.xEnd);
    //* เตรียมข้อมูลสำหรับพล็อตกราฟ f(x)
    let samplesFx = [];
    let graphStep = (xEnd - xStart) / 200;
    for (let x = xStart; x <= xEnd; x += graphStep) {
      samplesFx.push({ x: x, y: this.f(x) });
    }
    //*📌 dataset ของ Plotly
    const plotData = [
      {
        //* trace 1: f(x)
        x: samplesFx.map((p) => p.x),
        y: samplesFx.map((p) => p.y),
        type: "scatter",
        mode: "lines",
        name: "f(x)",
        line: { color: "green" },
      },
      {
        //* trace 2: จุดที่ทำการคำนวณ
        x: iterations.map((row) => row.xk),
        y: iterations.map((row) => row.fxk),
        type: "scatter",
        mode: "markers",
        name: "x",
        marker: { color: "red", size: 6 },
      },
    ];
    const plotLayout = {
      title: this.state.title,
      xaxis: { title: "x" },
      yaxis: { title: "f(x)" },
      dragmode: "pan",
      hovermode: "closest",
      responsive: true,
    };
    const precisionForError =this.state.tol.toString().split(".")[1]?.length || 2;
    //! อัปเดต state ทั้งหมดในครั้งเดียวเพื่อให้ React render ใหม่
    this.setState({iterations,plotData,plotLayout,precisionForError,});
  };
  
  //? Method for Fill Data & Clear Data in Field
  //@ 1. FillForm เรียกใช้ฟังก์ชันสุ่มข้อมูล Document จาก Collections
  fillForm = async () => {
    const presetData = await fetchRandomPreset(this.state.collectionName); //* เรียกใช้ฟังก์ชันสุ่ม
    if (presetData) {
      this.setState({fx: presetData.fx, xStart: presetData.xStart, xEnd: presetData.xEnd,
                     tol: presetData.tol });
      //* แสดงชื่อ Preset ที่สุ่มได้
      console.error(`เติมข้อมูลสุ่มจาก Preset '${presetData.id}' สำเร็จ!`);
    }
  }

  //@ 2. clearForm 
  clearForm = () => {
    this.setState({fx:'',xStart:'',xEnd:'',tol:'',iterations:[],plotData:null});
    console.error('ล้างข้อมูลในฟอร์มเรียบร้อยแล้ว');
  }

  //?📌 Method Render
  //@ 1. ชื่อของ Solution ที่ใช้ในการคำนวณ
  nameOfSolution = () => {
    //* Method นี้ควรถูก override
    return <h2 className="mb-3 text-center">{this.state.title}</h2>;
  };

  //@ 2. Form สำหรับรับข้อมูลจากผู้ใช้
  renderForm = () => {
    const { fx, xStart, xEnd, tol } = this.state; //* ดึงค่า state ที่จำเป็นออกมา
    //* สร้างเงื่อนไขเพื่อตรวจสอบว่ามี Field ไหนว่างหรือไม่
    const isButtonDisabled = fx === '' || xStart === '' || xEnd === '' || tol === ''; 
    return (
      <Form>
        <Row className="align-items-end mb-2">
          <Col md={7}>
            <Form.Group>
              <Form.Label>Equation f(x)</Form.Label>
              <Form.Control 
                type="text" 
                value={this.state.fx} 
                onChange={(e) => this.setState({ fx: e.target.value })} 
              />
            </Form.Group>
          </Col>
          {/* ส่วน Preview Box */}
          <Col md={5}>
            <div className="p-3 fs-5 border rounded bg-light h-100 mt-2 d-flex justify-content-start">
              <MathDisplay>{"\\(f(x) \\quad=\\quad\\) "}</MathDisplay>
              {this.state.fx ? (<MathDisplay>{` \\(${this.state.fx}\\)`}</MathDisplay>)
              :(<span className="ms-2">...</span>)}
            </div>
          </Col>
        </Row>
        {/* x start และ x end ในบรรทัดเดียวกัน */}
        <Row>
          <Col>
            <Form.Group className="mb-2">
              <Form.Label>x start</Form.Label>
              <Form.Control
                type="number"
                value={this.state.xStart}
                onChange={(e) => this.setState({ xStart: e.target.value })}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-2">
              <Form.Label>x end</Form.Label>
              <Form.Control
                type="number"
                value={this.state.xEnd}
                onChange={(e) => this.setState({ xEnd: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-2">
          <Form.Label>Error Tolerance (%)</Form.Label>
          <Form.Control
            type="number"
            value={this.state.tol}
            step="0.0001"
            onChange={(e) => this.setState({ tol: e.target.value })}
          />
        </Form.Group>
        {/* ส่วนปุ่ม Button */}
        <div className="d-flex justify-content-center">
          <Button
            variant="primary"
            onClick={this.calculateMethod}
            className="w-25 mt-2 mx-2"
            disabled={isButtonDisabled}
          >
            Calculate
          </Button>
          <Button 
            variant="success" 
            //* แก้ไข onClick ให้เรียกใช้ฟังก์ชันจาก Base โดยตรง
            onClick={this.fillForm} 
            className="mt-2 mx-2"
          >
            Fill Form
          </Button>
          <Button 
            variant="danger"
            onClick={this.clearForm}
            className="mt-2 mx-2"
          >
            Clear Form
          </Button>
        </div>
      </Form>
    );
  };

  //@ 3. ตารางแสดงผลลัพธ์
  renderTable = () => {
    //* Method นี้สามารถ override ได้หากต้องการโครงสร้างตารางที่แตกต่าง
    const { precisionForError } = this.state;
    return (
      <Table hover borderless className="table-equal-width">
        <thead className="table-light">
          <tr>
            <th>Iter</th>
            <th>x<sub>k</sub></th>
            <th>f(x<sub>k</sub>)</th>
            <th>Error (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.state.iterations.map((row) => (
            <tr key={row.iter}>
              <td>{row.iter}</td>
              <td>{row.xk.toFixed(6)}</td>
              <td>{row.fxk.toFixed(6)}</td>
              <td>{row.error.toFixed(precisionForError)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };

  //? Common Rendering Methods (Not to be Overridden) อันที่ 1 ด้วย
  //@ 4. Method สำหรับ Render กราฟ
  renderGraph = () => {
    if (!this.state.plotData) {
      return null; //* ไม่ต้อง render อะไรถ้ายังไม่มีข้อมูล
    }
    return (
      <Container fluid className="mt-4">
        <h4 className="ms-4">Graph</h4>
        <Plot
          data={this.state.plotData}
          layout={this.state.plotLayout}
          config={{
            scrollZoom: true,
            displaylogo: false,
            responsive: true,
          }}
          style={{ width: "100%", height: "100vh" }}
        />
      </Container>
    );
  };

  //@ 5. Method หลักสำหรับ Render UI ทั้งหมด
  render() {
    return (
      <Card className="container p-3 mt-4 shadow-sm">
        {this.nameOfSolution()}
        {this.renderForm()}
        {this.state.iterations.length > 0 && ( //* จะแสดงผลเมื่อ graph เมื่อมีข้อมูลใน iterations
          <div className="mt-4">
            <h4>Iterations</h4>
            <div className="table-responsive">
              {this.renderTable()}
            </div>
          </div>
        )}
        {this.renderGraph()}
      </Card>
    );
  }
}

export default BaseRootOfEquation;

