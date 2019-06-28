<template>
  <div>
    <h1 class="row justify-content-center">New Client</h1>

<form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="clientid">Client ID</label>
      <input type="type" class="form-control" id="clientid" placeholder="Client ID">
    </div>
    <div class="form-group col-md-6">
      <label for="clientname">Client Name</label>
      <input type="text" class="form-control" id="clientname" placeholder="Client Name">
    </div>
  </div>
  <!--<div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
  </div>-->
   <div class="form-row">
    <div class="form-group col-md-8">
      <label for="contactperson">Contact Person</label>
      <input type="type" class="form-control" id="contactperson" placeholder="Contact person">
    </div>
    <div class="form-group col-md-4">
      <label for="clienttype">Client Type</label>
      <select id="clienttype" class="form-control">
        <option selected>Choose...</option>
        <option>Customer</option>
        <option>Supplier</option>
        <option>Customer/Supplier</option>
      </select>
      <!--<input type="text" class="form-control" id="clienttype" placeholder="Client Name">-->
    </div>
  </div>
  <div class="form-row">
  <div class="form-group col-md-8">
    <label for="address">Address</label>
    <!--<input type="text" class="form-control" id="address" placeholder="Apartment, studio, or flo">-->
    <textarea id="" cols="60" rows="5"  class="form-control" placeholder="Address...."></textarea>
  </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="email">Email</label>
      <input type="email" class="form-control" id="email">
    </div>
    <div class="form-group col-md-4">
      <label for="phonenumber">Phone Number</label>
      <input type="text" class="form-control" id="phonenumber">
    </div>
    <div class="form-group col-md-2">
      <div class="form-check">
        <label for="phonenumber">.</label>
        <input class="form-check-input" type="checkbox" id="gridCheck">
        <label class="form-check-label" for="gridCheck">
        Active
        </label>
      </div>
    </div>
  </div>
  
  <button type="submit" class="btn btn-primary">Save</button>
</form>
    
  </div>
</template>

<script>
export default {};
</script>