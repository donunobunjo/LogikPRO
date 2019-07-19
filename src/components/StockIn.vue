<template>
  <div>
    <h1 class="row justify-content-center">Stock In</h1>

<form @submit.prevent="createStockIn('createstockin')">
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="clientname">Client</label>
      <select v-model="stockin.clientname" id="clientname" class="form-control" name="clientname" v-validate="'required'" data-vv-scope="createstockin">
        <option value="" selected>Please Select Client</option>
        <option v-for="client in clients" v-bind:key="client.clientName" :value="client.clientName">{{client.clientName}}</option>
      </select>
      <span v-if="errors.has('createstockin.clientname')" class="errorms">
                        {{ errors.first('createstockin.clientname') }}
      </span>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="productname">Product</label>
      <select  v-model="stockin.productname" id="productname" class="form-control" name="productname" v-validate="'required'" data-vv-scope="createstockin">
        <option value="" selected>Please Select Product</option>
        <option v-for="product in products" v-bind:key="product.productname" :value="product.productname">{{product.productname}}</option>
        
      </select>
      <span v-if="errors.has('createstockin.productname')" class="errorms">
                        {{ errors.first('createstockin.productname') }}
      </span>
    </div>
  </div>
  
  
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="date">Date</label>
      <input v-model="stockin.transDate" type="date" class="form-control" id="date" name ="date" v-validate="'required'" data-vv-scope="createstockin">
      <span v-if="errors.has('createstockin.date')" class="errorms">
                        {{ errors.first('createstockin.date') }}
      </span>
    </div>
  </div> 
  <div class="form-row">  
     <div class="form-group col-md-4">
      <label for="quantity">Quantity</label>
      <input v-model="stockin.quantity" type="number" class="form-control" id="quantity" v-validate="'required|numeric'" data-vv-scope="createstockin" name ="quantity">
      <span v-if="errors.has('createstockin.quantity')" class="errorms">
                        {{ errors.first('createstockin.quantity') }}
      </span>
    </div>
  </div>
  
  <button type="submit" class="btn btn-primary">Save</button>
</form>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      editId: "",
      stockin: {
        transDate: "",
        productID: "",
        productName: "",
        clientID: "",
        clientName: "",
        quantity: ""
      },
      editStockin: {
        _id: "",
        transDate: "",
        productID: "",
        productName: "",
        clientID: "",
        clientName: "",
        quantity: ""
      },
      transactions: [],
      clients: [],
      products: []
    };
  },
  created() {
    let uri = "http://localhost:4000/transactions/getproducts";
    this.axios.get(uri).then(response => {
      this.products = response.data;
      console.log(response.data);
      //console.log(`Created`)
    });
  },
  beforeMount() {
   // console.log(`before Mount!`)
    let uri = "http://localhost:4000/transactions/getclients";
    this.axios.get(uri).then(response => {
    this.clients= response.data;
    console.log(response.data);
    });
  },
  methods: {
    createStockIn(scope) {
      this.$validator.validateAll(scope).then(res => {
        if (res) {
            

          console.log("successful saved");
        } else {
          console.log("Error occured");
        }
      });
    }
  }
};
</script>