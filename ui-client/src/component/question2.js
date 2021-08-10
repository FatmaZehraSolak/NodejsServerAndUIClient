import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import InputGroup  from "react-bootstrap/InputGroup";
import FormControl  from "react-bootstrap/FormControl";
import $ from "jquery";
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>;
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>;

const TBodyFunction = (TBodyArray,array) => {
    $('#TBody').empty();
  TBodyArray.forEach((genre, i) => {
      
      if(genre.capital.search(array)!==-1||genre.capital.toLowerCase().search(array)!==-1){
         $("#TBody").append(
      ' <tr> <th scope="row">' +
        i +
        "</th> <td >" +
        genre.name +
        "</td>  <td >" +
        genre.capital +
        "</td>  <td >" +
        genre.region +
        "</td><td ><Image src=" +
        genre.flag +
        '  width="193" height="130""></td></tr>'
    ); 
      }
    
  });
};

export default function Question2() {
    const [val, setval_] = useState("");
 
  useEffect(() => {
      
      if(val!==""){
        axios
      .get("http://localhost/", {})
      .then(function (response) {
        TBodyFunction(response.data,val);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });   
      }
   

    return () => {};
  }, [val]);
  return (
    <div>
      <div container spacing={1}>
      
        <InputGroup >
        <InputGroup.Text id="basic-addon1"></InputGroup.Text>
        <FormControl
        onChange={e => setval_(  e.target.value )}
          value={val}
          placeholder="Başkent"
          aria-label="Başkent"
          aria-describedby="basic-addon1"
        />

            
        </InputGroup>
        <table id="Table" class="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Capital</th>
              <th scope="col">Region</th>
              <th scope="col">Flag</th>
            </tr>
          </thead>
          <tbody id="TBody"></tbody>
        </table>
      </div>
    </div>
  );
}
