<template>
  <div>
    <h1 class="row justify-content-center">Return Outwards</h1>

<form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="clientname">Client</label>
      <select id="clientname" class="form-control">
        <option selected>Choose...</option>
        <option>Customer</option>
        <option>Supplier</option>
        <option>Customer/Supplier</option>
      </select>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="productname">Product</label>
      <select id="productname" class="form-control">
        <option selected>Choose...</option>
        <option>Customer</option>
        <option>Supplier</option>
        <option>Customer/Supplier</option>
      </select>
    </div>
  </div>
  
  
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="date">Date</label>
      <input type="date" class="form-control" id="date">
    </div>
  </div> 
  <div class="form-row">  
     <div class="form-group col-md-4">
      <label for="quantity">Quantity</label>
      <input type="number" class="form-control" id="quantity">
    </div>
  </div>
  
  <button type="submit" class="btn btn-primary">Save</button>
</form>
    
  </div>
</template>

<script>
export default {};
</script>