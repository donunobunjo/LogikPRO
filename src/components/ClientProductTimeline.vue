<template>
    <div>
        <h1 class="row justify-content-center">Client Vs Product Timeline</h1>
        <hr>
        <form>
            <div class="form-row">
                <div class="form-group col-md-6">
                <select  v-model="selectedItem.client" @change="display()" id="clientname" class="form-control" name="clientname" v-validate="'required'" data-vv-scope="createstockin">
                    <option value="" selected disabled>Select Client</option>
                    <option v-for="client in clients" v-bind:key="client.clientName" :value="client.clientName">{{client.clientName}}</option>
                </select>
                </div>
                <div class="form-group col-md-6">
                <select  v-model="selectedItem.product" @change="display()" id="productname" class="form-control" name="productname" v-validate="'required'" data-vv-scope="createstockin">
                    <option value="" selected disabled>Select Product</option>
                    <option v-for="product in products" v-bind:key="product.productname" :value="product.productname">{{product.productname}}</option>
                </select>
                </div>
            </div>
        </form>

        <div class="row table-responsive">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Client</th>
                        <th>Product</th>
                        <th>Type</th>
                        <th>Date</th>
                        <th>In</th>
                        <th>Out</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="trans in alltransactions" :key="trans._id">
                        <td>{{ trans.clientName }}</td>
                        <td>{{ trans.productName }}</td>
                        <td>{{ trans.transType }}</td>
                        <td>{{trans.transDate}}</td>
                        <td>{{trans.in}}</td>
                        <td>{{trans.out}}</td>
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
                clients:[],
                products:[],
                selectedItem: {
                    client: "",
                    product: "",
                },
                alltransactions:[],
                aggregatesum:[],
                sumrecieved:0,
                sumissued:0,
                balance:""
            }
     },
    created() {
        //let uri = "http://localhost:4000/transactions/getallclients";
       // let uri = "https://logistiks-pro-api.herokuapp.com/transactions/getallclients"
        this.$axios.get('/transactions/getallclients').then(response => {
        this.clients = response.data;
        });
    },
    beforeMount() {
        //let uri = "http://localhost:4000/transactions/getallproducts";
        //let uri ="https://logistiks-pro-api.herokuapp.com/transactions/getallproducts"
        this.$axios.get('transactions/getallproducts').then(response => {
        this.products= response.data;
        });
    },
    methods:{
        display() {
            if(this.selectedItem.client==""||this.selectedItem.product=="")
            {
                
            }
            else{
                //let uri = 'http://localhost:4000/transactions/clientproducttimeline'
                //let uri ="https://logistiks-pro-api.herokuapp.com/transactions/clientproducttimeline"
                this.$axios.post('/transactions/clientproducttimeline',this.selectedItem).then(response=>{
                this.alltransactions=response.data.resultset;
                this.aggregatesum=response.data.agg
                this.sumrecieved=response.data.agg[0].totalRecieved
                this.sumissued=response.data.agg[0].totalIssued
            });
            }
        },
       
    },
    computed :{
      getbalance : function(){
         return this.sumrecieved-this.sumissued;
      }
   }
}
</script>

