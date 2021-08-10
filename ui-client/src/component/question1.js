import React, {  useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Image from "react-bootstrap/Image";
import $ from "jquery";
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>;
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>;

const TBodyFunction = (TBodyArray) => {
  TBodyArray.forEach((genre, i) => {
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
  });
};

export default function Question1() {
  useEffect(() => {
    axios
      .get("http://localhost/", {})
      .then(function (response) {
        TBodyFunction(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });

    return () => {};
  }, []);

  return (
    <div>
      <div container spacing={1}>
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
