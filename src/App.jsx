import { useRef } from "react"
import { Button, Form } from "react-bootstrap"


function App() {

const inputValue = useRef(null)

const handleSubmit = (e)=>{
  e.preventDefault()
  console.log(inputValue.current.value)
}

const handleClick = (selectChoice)=>{
  inputValue.current.value = selectChoice
}

  return (
    <div>
      <div className="container">
        <h1 className="text-center">IMAGE FINDER</h1>
        <div className="my-5 d-flex justify-content-center">
          <div className="col-5">
            <Form onSubmit={handleSubmit} >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" ref={inputValue} placeholder="Search" />
                <Form.Text className="text-muted">
                 Search your favorite category
                </Form.Text>
              </Form.Group>
            </Form>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="col-md-8 d-flex  justify-content-between">
            <Button onClick={( )=> handleClick("nature")} >Nature</Button>
            <Button onClick={( )=> handleClick("Scieence")} >Science</Button>
            <Button onClick={( )=> handleClick("Animation")} >Animation</Button>
            <Button onClick={( )=> handleClick("Vacaktion")} >Vacaktion</Button>
            <Button onClick={( )=> handleClick("Industries")} >Industries</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
