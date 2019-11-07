<template>
  <div>
     <loading :active.sync="isLoading" 
        :can-cancel="false" 
        :on-cancel="onCancel"
        :is-full-page="fullPage"></loading>
    <h1 class="row justify-content-center">Stock In</h1>
    <hr>

<form @submit.prevent="createStockIn('createstockin')">
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="clientname">Supplier
         <span>*</span>
      </label>
      <select v-model="stockin.clientName" id="clientname" class="form-control" name="clientname" v-validate="'required'" data-vv-scope="createstockin">
        <option value="" selected>Please Select Supplier</option>
        <option v-for="client in clients" v-bind:key="client.clientName" :value="client.clientName">{{client.clientName}}</option>
      </select>
      <span v-if="errors.has('createstockin.clientname')" class="errorms">
                        {{ errors.first('createstockin.clientname') }}
      </span>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="productname">Product
         <span>*</span>
      </label>
      <select  v-model="stockin.productName" id="productname" class="form-control" name="productname" v-validate="'required'" data-vv-scope="createstockin">
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
      <label for="date">Date
         <span>*</span>
      </label>
      <input v-model="stockin.transDate" type="date" class="form-control" id="date" name ="date" v-validate="'required'" data-vv-scope="createstockin">
      <span v-if="errors.has('createstockin.date')" class="errorms">
                        {{ errors.first('createstockin.date') }}
      </span>
    </div>
  </div> 
  <div class="form-row">  
     <div class="form-group col-md-4">
      <label for="quantity">Quantity
         <span>*</span>
      </label>
      <input v-model="stockin.quantity" type="number" class="form-control" id="quantity" v-validate="'required|numeric'" data-vv-scope="createstockin" name ="quantity">
      <span v-if="errors.has('createstockin.quantity')" class="errorms">
                        {{ errors.first('createstockin.quantity') }}
      </span>
    </div>
  </div>
  
  <!--<button type="submit" class="btn btn-primary">Save</button>-->
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
                    <tr v-for="stockIn in stockIns" :key="stockIn._id">
                        <template v-if="editId == stockIn._id">
                            <td>
                                <input v-model="editStockin.clientName" type="text" v-validate="'required'" name="editstockinclient" id="editstockinclient" data-vv-scope="update" disabled >
                            </td>
                            <td>
                                <input v-model="editStockin.productName" type="text" v-validate="'required'" name="editstockinproduct" id="editstockinproduct" data-vv-scope="update" disabled >
                            </td>
                            <td>
                                <input v-model="editStockin.transDate" type="date" v-validate="'required'" name="editstockintransdate" id="editstockintransdate" data-vv-scope="update" disabled >
                                
                            </td>
                            <td>
                                <input v-model="editStockin.quantity" type="number" v-validate="'required|numeric'" name="editstockinquantity" id="editstockinquantity" data-vv-scope="update" >
                                <span v-if="errors.has('update.editstockinquantity')" class="errorms">
                                    {{ errors.first('update.editstockinquantity') }}
                                </span>
                            </td>
                            <td>
                               <button class="btn btn-danger fa fa-check" @click.prevent="editSubmit(stockIn._id)">Update</button>
                                <button class="btn btn-danger fa fa-times" @click.prevent="cancel()">Cancel</button>
                            </td>
                        </template>
                        <template v-else>
                            <td>{{ stockIn.clientName }}</td>
                            <td>{{stockIn.productName }}</td>
                            <td>{{ stockIn.transDate }}</td>
                            <td>{{ stockIn.in }}</td>
                            <td>
                                <button class="btn btn-danger fa fa-edit" @click.prevent="edit_Product(stockIn)">Edit</button>
                                <button class="btn btn-danger fa fa-trash" @click.prevent="deleteProduct(stockIn._id)">Delete</button>
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
      stockIns: [],
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
    let uri = "http://localhost:4000/transactions/getsuppliers";
    this.axios.get(uri).then(response => {
    this.clients= response.data;
    });
  },
  methods: {
    createStockIn(scope) {
      this.$validator.validateAll(scope).then(res => {
        if (res) {
          this.isLoading=true;
            let uri = "http://localhost:4000/transactions/createstockin";
                        this.axios.post(uri, this.stockin).then(response => {
                            this.stockIns.unshift({
                                _id: response.data._id,
                                clientName: response.data.clientName,
                                productName: response.data.productName,
                                transDate: response.data.transDate,
                                in: response.data.in
                            });
                             this.isLoading=false;
                            this.stockin = {};
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
                    var loc = this.stockIns.findIndex(x => x._id ===id);
                    this.stockIns.splice(loc, 1);
                    this.isLoading=false;
                });
    },

    edit_Product(stockIn){
         this.editId = stockIn._id;
         this.editStockin._id=stockIn._id;
         this.editStockin.clientName=stockIn.clientName;
         this.editStockin.productName=stockIn.productName;
         this.editStockin.transDate=stockIn.transDate;
         this.editStockin.quantity=stockIn.in;
    },

    cancel(){
        this.editId = ''
        this.editStockin.clientName='';
        this.editStockin.productName='';
        this.editStockin.transDate='';
        this.editStockin.in='';
    },

    editSubmit(id){
          this.$validator.validateAll('update').then(res => {
              if (res) {
                this.isLoading=true;
                  let uri = `http://localhost:4000/transactions/update/${id}`;
                  this.axios.post(uri,this.editStockin).then(response => {
                  var loc = this.stockIns.findIndex(x => x._id ===id);
                  this.stockIns.splice(loc, 1,response.data);
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