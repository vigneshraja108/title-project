import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"

function App() {

  const titleData = [
    {
      "id": 1,
      "title": "title 1",
      "children": [
        {
          "id": 2,
          "title": "title 2",
          "children": [
            {
              "id": 3,
              "title": "title 3",
              "children": [
                {
                  "id": 4,
                  "title": "title 4",
                  "children": []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": 5,
      "title": "title 6",
      "children": []
    },
    {
      "id": 7,
      "title": "title 7",
      "children": [
        {
          "id": 8,
          "title": "title 8",
          "children": [
            {
              "id": 9,
              "title": "title 9",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "id": 10,
      "title": "title 10",
      "children": []
    }
  ]
  const [showingData, setShowingData] = useState([])
  const [titleInput, setTitleInput] = useState("")
  const [selectData, setSelectData] = useState("")

  const handleOnSubmit = (event) => {
    event.preventDefault()

    const filterData = titleData.map(item => {
      if(item.title === selectData) {
        console.log("im in", item)
        if(item.children.length === 0){
          setShowingData({ ...item, "title": titleInput})
        }
      } else {
        console.log("im out", item)
      }

    }
    )
    console.log("filterData", showingData)

  }

  const handleTitleChange = (e) => {
    const titleChange = e.target.value
    setTitleInput(titleChange)
  }

  const handleSelectChange = (e) => {
    const selectChange = e.target.value
    setSelectData(selectChange)
  }


  return (
    <div className="App">
      {console.log(showingData)}
      <select style={{ marginTop: "50px", width: "200px", height: "40px" }} value={selectData} onChange={handleSelectChange}>
        {titleData.map((item, id) => (
          <option key={id}>{item.title}</option>
        ))}
      </select>
      <form style={{ marginTop: "50px" }} onSubmit={handleOnSubmit}>
        <input type="text" style={{ width: "300px", height: "40px", }} placeHolder="Enter the title" value={titleInput} onChange={handleTitleChange} />
        <button style={{ marginLeft: "20px", height: "50px", width: "100px" }} type="submit">Add To</button>
      </form>
      {showingData.length !== 0 &&
        <>
          <h1>{showingData.title}</h1>

        </>
      }
    </div>
  );
}

export default App;
