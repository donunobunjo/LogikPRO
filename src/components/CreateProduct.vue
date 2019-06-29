<template>
  <div>
    <h1 class="row justify-content-center">New Product</h1>

<form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="productid">Product ID</label>
      <input type="type" class="form-control" id="productid" placeholder="Product ID">
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="productname">Product Name</label>
      <input type="text" class="form-control" id="productname" placeholder="product Name">
    </div>
  </div>
  
  
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="reorderlevel">Re-Order Level</label>
      <input type="number" class="form-control" id="reorderlevel">
    </div>
  </div> 
  <div class="form-row">  
    <div class="form-group col-md-2">
      <div class="form-check">
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