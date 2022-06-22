import React, { useState } from 'react'
import {Button,Modal,Form} from 'react-bootstrap'
const AddMovie = ({add}) => {
    const [show, setShow] = useState(false);
    const toogle=()=>{
        setShow(!show)
    }

const [title, setTitle] = useState("")
const [id, setId] = useState(0)
const [description, setDescription] = useState("")
const [rate, setRate] = useState(0)
const [posterUrl, setPosterUrl] = useState("")

const handletitle=(e)=>{
setTitle(e.target.value)
}

const handleId=(e)=>{
    setId(e.target.value)
}

const handleDesc=(e)=>{
    setDescription(e.target.value)
}

const handleRate=(e)=>{
    setRate(e.target.value)
}

const handlePoster=(e)=>{
setPosterUrl(e.target.value)
}

const handleMovie=()=>{
    let newMovie={
        title,description,rate,id,posterUrl
    }
    add(newMovie)
}

  return (
    <div>
              <Button variant="primary" onClick={toogle} >
        Launch demo modal
      </Button>

      <Modal show={show} onHide={toogle} >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>id</Form.Label>
              <Form.Control
                type="text"
                placeholder="id"
                autoFocus
                onChange={handleId}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                autoFocus
                onChange={(e)=>handletitle(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>rate</Form.Label>
              <Form.Control
                type="text"
                placeholder="rate"
                autoFocus
                onChange={handleRate}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>description</Form.Label>
              <Form.Control
                type="text"
                placeholder="description"
                autoFocus
                onChange={handleDesc}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>posterUrl</Form.Label>
              <Form.Control
                type="text"
                placeholder="posterUrl"
                autoFocus
                onChange={handlePoster}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toogle} >
            Close
          </Button>
          <Button variant="primary" onClick={handleMovie} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddMovie