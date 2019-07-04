<template>
  <div>
    <h1 class="row justify-content-center">New Product</h1>

<form @submit.prevent="createProduct">
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="productid">Product ID <span>*</span></label>
      <input v-model="product.productid" type="text" class="form-control" id="productid" placeholder="Product ID" name="productid" v-validate="'required'">
      <span v-if="errors.has('productid')" class="errorms">
        {{ errors.first('productid') }}
      </span>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="productname">Product Name<span>*</span></label>
      <input v-model="product.productname" type="text" class="form-control" id="productname" placeholder="product Name" name="productname" v-validate="'required|alpha'">
      <span v-if="errors.has('productname')" class="errorms">
        {{ errors.first('productname') }}
      </span>
    </div>
  </div>
  
  
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="reorderlevel">Re-Order Level<span>*</span></label>
      <input v-model="product.reorderlevel" type="number" class="form-control" id="reorderlevel" placeholder="Re-order level" name="reorderlevel" v-validate="'required|numeric'">
      <span v-if="errors.has('reorderlevel')" class="errorms">
        {{ errors.first('reorderlevel') }}
      </span>
    </div>
  </div> 
  <div class="form-row">  
    <div class="form-group col-md-2">
      <div class="form-check">
        <input v-model="product.active" class="form-check-input" type="checkbox" id="gridCheck" >
        <label class="form-check-label" for="gridCheck">
        Active
        </label>
      </div>
    </div>
  </div>
   <button type="submit" class="btn btn-primary">Save</button>
  
</form>
  <div class="row">
          <table class="table table-hover">
            <thead>
            <tr>
              <th>ProductID</th>
              <th>Product Name</th>
              <th>Re-order Level</th>
              <th>Active</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product._id">
                  <td>{{ product.productid }}</td>
                  <td>{{ product.productname }}</td>
                  <td>{{ product.reorderlevel }}</td>
                  <td>{{ product.active }}</td>
                  <td><router-link :to="{name: 'edit', params: { id: product._id }}" class="btn btn-primary btn-xs">Edit</router-link> <button class="btn btn-danger" @click.prevent="deleteProduct(product._id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
  </div>
  

    
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        productid: "",
        productname: "",
        reorderlevel: "",
        active: true
      },
      products: []
    };
  },
  methods: {
    createProduct() {
      this.$validator.validateAll().then(res => {
        if (res) {
          //alert('Form successfully submitted!')
          let uri = "http://localhost:4000/products/add";
          this.axios.post(uri, this.product).then(response => {
            //this.$router.push({name: 'product'});
            this.products.unshift({
              _id: response.data._id,
              productid: response.data.productid,
              productname: response.data.productname,
              reorderlevel: response.data.reorderlevel,
              active: response.data.active
            });
            console.log("successful saved");
            this.product={};
            this.$validator.reset();
            this.product.active = true;
          });

          // console.log("successful saved")
        } else {
          //alert('Please correct all error!')
          console.log("Error occured");
        }
      });
    },
    deleteProduct(id) {
      let uri = `http://localhost:4000/products/delete/${id}`;
      this.axios.delete(uri).then(response => {
        this.products.splice(this.products.indexOf(id), 1);
      });
    }
  }
};
</script>
<style>
.errorms {
  color: red;
}
</style>
