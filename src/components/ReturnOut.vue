<template>
  <div>
    <loading :active.sync="isLoading" 
        :can-cancel="false" 
        :on-cancel="onCancel"
        :is-full-page="fullPage"></loading>
    <h1 class="row justify-content-center">Return Outwards</h1>
    <hr>
<form @submit.prevent="createStockOut('createstockout')">
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="clientname">Supplier
         <span>*</span>
      </label>
      <select v-model="stockout.clientName" id="clientname" class="form-control" name="clientname" v-validate="'required'" data-vv-scope="createstockout">
        <option value="" selected>Please Select Supplier</option>
        <option v-for="client in clients" v-bind:key="client.clientName" :value="client.clientName">{{client.clientName}}</option>
      </select>
      <span v-if="errors.has('createstockout.clientname')" class="errorms">
                        {{ errors.first('createstockout.clientname') }}
      </span>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="productname">Product
         <span>*</span>
      </label>
      <select  v-model="stockout.productName" id="productname" class="form-control" name="productname" v-validate="'required'" data-vv-scope="createstockout">
        <option value="" selected>Please Select Product</option>
        <option v-for="product in products" v-bind:key="product.productname" :value="product.productname">{{product.productname}}</option>
        
      </select>
      <span v-if="errors.has('createstockout.productname')" class="errorms">
                        {{ errors.first('createstockout.productname') }}
      </span>
    </div>
  </div>
  
  
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="date">Date
         <span>*</span>
      </label>
      <input v-model="stockout.transDate" type="date" class="form-control" id="date" name ="date" v-validate="'required'" data-vv-scope="createstockout">
      <span v-if="errors.has('createstockout.date')" class="errorms">
                        {{ errors.first('createstockout.date') }}
      </span>
    </div>
  </div> 
  <div class="form-row">  
     <div class="form-group col-md-4">
      <label for="quantity">Quantity
         <span>*</span>
      </label>
      <input v-model="stockout.quantity" type="number" class="form-control" id="quantity" v-validate="'required|numeric'" data-vv-scope="createstockout" name ="quantity">
      <span v-if="errors.has('createstockout.quantity')" class="errorms">
                        {{ errors.first('createstockout.quantity') }}
      </span>
    </div>
  </div>
  <button class="btn  btn-success" type="submit"><i class="fa fa-save"></i> Save</button>
</form>

         <div class="row table-responsive">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Client</th>
                        <th>Product</th>
                        <th>Date</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="stockOut in stockOuts" :key="stockOut._id">
                        <template v-if="editId == stockOut._id">
                            <td>
                                <input v-model="editStockout.clientName" type="text" v-validate="'required'" name="editstockoutclient" id="editstockoutclient" data-vv-scope="update" disabled >
                            </td>
                            <td>
                                <input v-model="editStockout.productName" type="text" v-validate="'required'" name="editstockoutproduct" id="editstockoutproduct" data-vv-scope="update" disabled >
                            </td>
                            <td>
                                <input v-model="editStockout.transDate" type="date" v-validate="'required'" name="editstockouttransdate" id="editstockouttransdate" data-vv-scope="update" disabled>
                            </td>
                            <td>
                                <input v-model="editStockout.quantity" type="number" v-validate="'required|numeric'" name="editstockoutquantity" id="editstockoutquantity" data-vv-scope="update" >
                                <span v-if="errors.has('update.editstockoutquantity')" class="errorms">
                                    {{ errors.first('update.editstockoutquantity') }}
                                </span>
                            </td>
                            <td>
                               <button class="btn btn-danger fa fa-check" @click.prevent="editSubmit(stockOut._id)">Update</button>
                               <button class="btn btn-danger fa fa-times" @click.prevent="cancel()">Cancel</button>
                            </td>
                        </template>
                        <template v-else>
                            <td>{{ stockOut.clientName }}</td>
                            <td>{{stockOut.productName }}</td>
                            <td>{{ stockOut.transDate }}</td>
                            <td>{{ stockOut.out }}</td>
                            <td>
                                <button class="btn btn-danger fa fa-edit" @click.prevent="edit_Product(stockOut)">Edit</button>
                                <button class="btn btn-danger fa fa-trash" @click.prevent="deleteProduct(stockOut._id)">Delete</button>
                            </td>
                        </template>
                    </tr>
                </tbody>
            </table>
        </div>

    
  </div>
</template>

<script>
 // Import component
import Loading from 'vue-loading-overlay';
    // Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
  data() {
    return {
      editId: "",
      stockout: {
        transDate: "",
        productID: "",
        productName: "",
        clientID: "",
        clientName: "",
        quantity: ""
      },
      editStockout: {
        _id: "",
        transDate: "",
        productID: "",
        productName: "",
        clientID: "",
        clientName: "",
        quantity: ""
      },
      stockOuts: [],
      clients: [],
      products: [],
      isLoading: false,
      fullPage: true
    };
  },
  components: {
    Loading
  },
  created() {
    let uri = "http://localhost:4000/transactions/getproducts";
    this.axios.get(uri).then(response => {
      this.products = response.data;
    });
  },
  beforeMount() {
    let uri = "http://localhost:4000/transactions/getcustomers";
    this.axios.get(uri).then(response => {
    this.clients= response.data;
    });
  },
  methods: {
    createStockOut(scope) {
      this.$validator.validateAll(scope).then(res => {
        if (res) {
            let uri = "http://localhost:4000/transactions/returnout";
                        this.isLoading=true;
                        this.axios.post(uri, this.stockout).then(response => {
                            this.stockOuts.unshift({
                                _id: response.data._id,
                                clientName: response.data.clientName,
                                productName: response.data.productName,
                                transDate: response.data.transDate,
                                out: response.data.out
                            });
                            this.isLoading=false;
                            this.stockout = {};
                            this.$validator.reset();
                        });
        } else {
        
        }
      });
    },

    deleteProduct(id){
          let uri = `http://localhost:4000/transactions/delete/${id}`;
                this.isLoading = true;
                this.axios.delete(uri).then(() => {
                    var loc = this.stockOuts.findIndex(x => x._id ===id);
                    this.stockOuts.splice(loc, 1);
                    this.isLoading=false;
                });
    },

    edit_Product(stockOut){
         this.editId = stockOut._id;
         this.editStockout._id=stockOut._id;
         this.editStockout.clientName=stockOut.clientName;
         this.editStockout.productName=stockOut.productName;
         this.editStockout.transDate=stockOut.transDate;
         this.editStockout.quantity=stockOut.out;
    },

    cancel(){
        this.editId = ''
        this.editStockout.clientName='';
        this.editStockout.productName='';
        this.editStockout.transDate='';
        this.editStockout.out='';
    },

    editSubmit(id){
          this.$validator.validateAll('update').then(res => {
              if (res) {
                this.isLoading = true;
                  let uri = `http://localhost:4000/transactions/updatestockout/${id}`;
                  this.axios.post(uri,this.editStockout).then(response => {
                  var loc = this.stockOuts.findIndex(x => x._id ===id);
                  this.stockOuts.splice(loc, 1,response.data);
                  this.editId = '';
                  this.isLoading = false;
                  });
               } else {
                  
              }
          });
    }
  }
};
</script>