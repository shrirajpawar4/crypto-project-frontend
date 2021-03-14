import React from "react";

function Table() {
    return (
        <div>
            <table class="table table-dark table-striped table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Logo</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope-="col">Change in Price</th>
      <th scope-="col">Market Cap</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2"></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
        </div>
    );
}

export default Table;