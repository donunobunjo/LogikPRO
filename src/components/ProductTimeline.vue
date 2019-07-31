<template>
    <div>
        <h1 class="row justify-content-center">Product Timeline</h1>
        <hr>
        <form>
            <div class="form-row">
                <div class="form-group col-md-6">
                <select  v-model="selectedItem.selecteditem" @change="display()" id="productname" class="form-control" name="productname" v-validate="'required'" data-vv-scope="createstockin">
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
                        <th>Balance</th>
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
                    <tr v-for= "agg in aggregatesum" :key="agg._id">
                        <td colspan="4" style="text-align:right">Total</td>
                        <td>{{sumrecieved}}</td>
                        <td>{{sumissued}}</td>
                        <td>{{getbalance}}</td>
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
                products:[],
                selectedItem:{selecteditem:""},
                alltransactions:[],
                aggregatesum:[],
                sumrecieved:0,
                sumissued:0,
                balance:""
            }
     },
    created() {
        let uri = "http://localhost:4000/transactions/getallproducts";
        this.axios.get(uri).then(response => {
        this.products = response.data;
        });
    },
    methods:{
        display() {
           let uri = 'http://localhost:4000/transactions/producttimeline';
            this.axios.post(uri,this.selectedItem).then(response=>{
                this.alltransactions=response.data.resultset;
                this.aggregatesum=response.data.agg
                this.sumrecieved=response.data.agg[0].totalRecieved
                this.sumissued=response.data.agg[0].totalIssued
            });
        }
    },
    computed :{
      getbalance : function(){
         return this.sumrecieved-this.sumissued;
      }
   }
}
</script>

