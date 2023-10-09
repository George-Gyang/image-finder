import { useRef, useState } from "react"
import { Button, Form } from "react-bootstrap"
import imgs from "./assets/images-.jpg"
import axios from "axios"


function App() {

  const inputValue = useRef(null)
  const [images, setImages] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputValue.current.value)
    getImage();
  }

  const handleClick = (selectChoice) => {
    inputValue.current.value = selectChoice
    getImage();
  }

  const ApiUrl = "https://api.unsplash.com/search/photos";

  const ImagesPerPage = 20;

  const getImage = async () => {
    try {
      const response = await axios.get(`${ApiUrl}?query=${inputValue.current.value}&page=1&per_page=${ImagesPerPage}&client_id=${import.meta.env.VITE_API_KEY}`);
      setImages(response.data.results)
      setTotalPages(response.data.total_pages)
    } catch (e) {
      console.log(e)
    }
  };

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
            <Button onClick={() => handleClick("Science")} >Science</Button>
            <Button onClick={() => handleClick("Animation")} >Animation</Button>
            <Button onClick={() => handleClick("Vacation")} >Vacation</Button>
            <Button onClick={() => handleClick("Industries")} >Industries</Button>
          </div>
        </div>
        <div className="row my-5">
          {
            images.map((image) => (
              <div key={image.id} className="col-lg-3 mb-4 col-md-4 col-6">
                <img
                  src={image.urls.small}
                  alt={image.alt_description} className="img-fluid ww-100" />
              </div>
            )
            )
          }
        </div>
      </div>
    </div>
  )
}

export default App
