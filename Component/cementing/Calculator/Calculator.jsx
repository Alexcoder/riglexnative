import {useState} from 'react';
import { useGlobalState } from '../../../STATE/cementing/context/Context';
import "./styles.css";

const Calculator = () => {
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");
    const { setCalculator, } = useGlobalState();

    const operators = ["+" , "-" , "*" , "/", "."];

    const upDateCalc = value =>{
        if(value===("0") && calc==="") return;
        if(
            (value===("-") && calc==="")
          ) setCalc((prev)=> prev + value)
          if(value==="." && calc.includes(".") ) return
        if(
            (operators.includes(value) && calc==="") ||
            (operators.includes(value) && operators.includes(calc.charAt(calc.length-1)))
        ) return;

        setCalc((prev)=> prev + value)

        if(!operators.includes(value)){
          setResult(()=>{
            try{
              // eslint-disable-next-line
              let res = Function(`return ${calc.concat(value)}`)()
              return  Intl.NumberFormat().format(res)
            }catch(err){
              return err
          }  
          })
        }
    };

    const digits = []
    const BtnDigits = () =>{
      for(let i=0 ; i < 10; i++){
       digits.push( 
       <button style={{fontSize:"1.2rem", outline:"none"}} 
        onClick={()=> upDateCalc(i.toString())} key={i}>
        {i}
        </button> 
       )    
      }
  return digits
};

const handleDelete = () =>{
  setCalc((prev)=>{
    const newItem = prev.slice(0, -1)
    // const newItem = calc.slice(0,lastItem)
    setCalc(newItem)
  })
}

const handleClear = () =>{
  setCalc("")
  setResult("")
};


  return (
    <main className="calc-cont">
      <div className="calc-wrapper">

      <div className="display" 
      style={{
             cursor:"pointer",           
            //  maxWidth: "auto", 
            //  overflowWrap:"break-word",
              }}>
        <span className="close" onClick={()=> setCalculator(false)}>exit</span>
         <span>({result || "0"})</span>
         <span
               style={{
                cursor:"pointer",           
                maxWidth: "auto", 
                overflowWrap:"break-word",
                 }}
         > {calc || "0"} &nbsp;</span>
        
      </div>

      <div className="operators">
        <button style={{fontSize:"1.2rem", outline:"none"}} onClick={()=> upDateCalc("+")}> + </button>
        <button style={{fontSize:"1.7rem", outline:"none"}}  onClick={()=> upDateCalc("-")}> - </button>
        <button style={{textAlign:"center", paddingTop:"0.5rem", fontSize:"1.2rem", outline:"none"}} onClick={()=> upDateCalc("*")}> x </button>
        <button style={{fontSize:"1.2rem", outline:"none"}} onClick={()=> upDateCalc("/")}> / </button>
        <button onClick={handleDelete} style={{outline:"none"}}> DEL </button>
        <button onClick={handleClear} style={{outline:"none"}}> CLEAR </button>
      </div>

      <div className="digits">
        {BtnDigits()}
        <button style={{fontSize:"1.9rem", outline:"none"}} onClick={()=> upDateCalc(".")}> . </button>
        <button style={{fontSize:"1.2rem", outline:"none"}} onClick={()=> setCalc(result)}> = </button>
      </div>

      <div className="calc-bracket">
      </div>

      </div>
    </main>
  )
}

export default Calculator;