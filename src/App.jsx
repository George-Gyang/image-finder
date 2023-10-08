import { useRef } from "react"
import { Button, Form } from "react-bootstrap"
import imgs from "./assets/images-.jpg"


function App() {

  const inputValue = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputValue.current.value)
  }

  const handleClick = (selectChoice) => {
    inputValue.current.value = selectChoice
  }

  const Api_Url = "https://api.unsplash.com/search/photos"

  const IMAGE_ON_PAGE = 20

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
            <Button onClick={() => handleClick("nature")} >Nature</Button>
            <Button onClick={() => handleClick("Scieence")} >Science</Button>
            <Button onClick={() => handleClick("Animation")} >Animation</Button>
            <Button onClick={() => handleClick("Vacaktion")} >Vacaktion</Button>
            <Button onClick={() => handleClick("Industries")} >Industries</Button>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-lg-3 mb-4 col-md-4 col-6">
            <img src={imgs} alt="" className="img-fluid ww-100" />
          </div>
          <div className="col-lg-3 mb-4 col-md-4 col-6">
            <img src={imgs} alt="" className="img-fluid ww-100" />
          </div>
          <div className="col-lg-3 mb-4 col-md-4 col-6">
            <img src={imgs} alt="" className="img-fluid ww-100" />
          </div>
          <div className="col-lg-3 mb-4 col-md-4 col-6">
            <img src={imgs} alt="" className="img-fluid ww-100" />
          </div>
          <div className="col-lg-3 mb-4 col-md-4 col-6">
            <img src={imgs} alt="" className="img-fluid ww-100" />
          </div>
          <div className="col-lg-3 mb-4 col-md-4 col-6">
            <img src={imgs} alt="" className="img-fluid ww-100" />
          </div>
          <div className="col-lg-3 mb-4 col-md-4 col-6">
            <img src={imgs} alt="" className="img-fluid ww-100" />
          </div>
          <div className="col-lg-3 mb-4 col-md-4 col-6">
            <img src={imgs} alt="" className="img-fluid ww-100" />
          </div>
          <div className="col-lg-3 mb-4 col-md-4 col-6">
            <img src={imgs} alt="" className="img-fluid ww-100" />
          </div>
          <div className="col-lg-3 mb-4 col-md-4 col-6">
            <img src={imgs} alt="" className="img-fluid ww-100" />
          </div>
          <div className="col-lg-3 mb-4 col-md-4 col-6">
            <img src={imgs} alt="" className="img-fluid ww-100" />
          </div>
          <div className="col-lg-3 mb-4 col-md-4 col-6">
            <img src={imgs} alt="" className="img-fluid ww-100" />
          </div>
          <div className="col-lg-3 mb-4 col-md-4 col-6">
            <img src={imgs} alt="" className="img-fluid ww-100" />
          </div>
          <div className="col-lg-3 mb-4 col-md-4 col-6">
            <img src={imgs} alt="" className="img-fluid ww-100" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
