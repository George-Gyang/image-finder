import { useCallback, useEffect, useRef, useState } from "react"
import { Button, Form, Badge } from "react-bootstrap"
import axios from "axios"
import ImageCard from "./components/ImageCard";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";



function App() {

  const inputValue = useRef(null)
  const [images, setImages] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1)

  // setting loading state
  const [loading, setloading] = useState(false)




  function resetSearch() {
    getImage();
    setPage(1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputValue.current.value)
    resetSearch()
  }

  const handleClick = (selectChoice) => {
    inputValue.current.value = selectChoice
    resetSearch()
  }

  const handlePrevPage = () => {
    setPage(page - 1);
  }

  const handleNextPage = () => {
    setPage(page + 1);
  }

  const ApiUrl = "https://api.unsplash.com/search/photos";

  const ImagesPerPage = 12;

  const getImage = useCallback(async () => {
    try {
      if (inputValue.current.value) {
        // setErrorMsg('');
        setloading(true);
        const response = await axios.get(`${ApiUrl}?query=${inputValue.current.value}&page=${page}&per_page=${ImagesPerPage}&client_id=${import.meta.env.VITE_API_KEY}`);
        setImages(response.data.results)
        setTotalPages(response.data.total_pages)
        // console.log(response.data.total_pages)
        setloading(false)
      }
    } catch (e) {
      // setErrorMsg("something's wrong");
      console.log(e)
      setloading(false);
    }
  }, [page])

  useEffect(() => {
    getImage()
  }, [getImage])

  return (
    <div>
      <div className="container">
        <h1 className="text-center">IMAGE FINDER</h1>
        <div className="my-5 d-flex justify-content-center">
          <div className=" col-10 col-md-5">
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
          <div className="col-md-7 d-flex  justify-content-between" style={{ flexFlow: "wrap" }}>
            <div className="me-1">
              <Badge bg="success" onClick={() => handleClick("nature")} >Nature</Badge></div>
            <div className="me-1">
              <Badge bg="primary" onClick={() => handleClick("Science")} >Science</Badge></div>
            <div className="me-1">
              <Badge bg="primary" onClick={() => handleClick("Animation")} >Animation</Badge></div>
            <div className="me-1">
              <Badge bg="primary" onClick={() => handleClick("Vacation")} >Vacation</Badge></div>
            <div className="me-1">
              <Badge bg="primary" onClick={() => handleClick("Industries")} >Industries</Badge></div>
          </div>
        </div>
        {
          loading ? (
            <p className="text-center">Fetching data</p>
          ) : (
            <div>
              <div className="row my-5">
                {
                  images.map((image) => (
                    <ImageCard key={image.id} image={image} />
                  )
                  )
                }
              </div>
              <div className="d-flex my-5 justify-content-center">
                {page > 1 && (
                  <Button className="px-4 rounded-pill me-2 " onClick={handlePrevPage}> <FaChevronCircleLeft size={25}/> </Button>
                )}
                {page < totalPages && (
                  <Button className="px-4 rounded-pill me-2 " onClick={handleNextPage}> <FaChevronCircleRight size={25}/></Button>
                )}
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default App
