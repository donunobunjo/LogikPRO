<template>
  <div>
    <h1 class="row justify-content-center">New Product</h1>

<form @submit.prevent="createProduct">
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="productid">Product ID <span>*</span></label>
      <input type="text" class="form-control" id="productid" placeholder="Product ID" name="productid" v-model="productid" v-validate="'required|alpha'">
      <span v-if="errors.has('productid')" class="errorms">
        {{ errors.first('productid') }}
      </span>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="productname">Product Name<span>*</span></label>
      <input type="text" class="form-control" id="productname" placeholder="product Name" name="productname" v-model="productname" v-validate="'required|alpha'">
      <span v-if="errors.has('productname')" class="errorms">
        {{ errors.first('productname') }}
      </span>
    </div>
  </div>
  
  
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="reorderlevel">Re-Order Level<span>*</span></label>
      <input type="number" class="form-control" id="reorderlevel" placeholder="Re-order level" name="reorderlevel" v-model="reorderlevel" v-validate="'required|digits:2'">
      <span v-if="errors.has('reorderlevel')" class="errorms">
        {{ errors.first('reorderlevel') }}
      </span>
    </div>
  </div> 
  <div class="form-row">  
    <div class="form-group col-md-2">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck" checked >
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
export default {
     methods: {
        createProduct() {
          this.$validator.validateAll().then(res => {
            if (res) {
              alert('Form successfully submitted!')
            } else {
              alert('Please correct all error!')
            }
          })
        }
     }
};
</script>
<style>
    .errorms{
      color: red;
      
    }
</style>
