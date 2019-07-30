<template>
    <div>
        <h1 class="row justify-content-center">Client Timeline</h1>
        <hr>
        <form>
            <div class="form-row">
                <div class="form-group col-md-6">
                <!--<label for="productname">Product</label>-->
                <select  v-model="selectedItem.selecteditem" @change="display()" id="clientname" class="form-control" name="clientname" v-validate="'required'" data-vv-scope="createstockin">
                    <option value="" selected disabled>Select Client</option>
                    <option v-for="client in clients" v-bind:key="client.clientName" :value="client.clientName">{{client.clientName}}</option>
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
                        <!--<td>70</td>-->
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
                clients:[],
                selectedItem:{selecteditem:""},
                alltransactions:[],
                aggregatesum:[],
                sumrecieved:0,
                sumissued:0,
                balance:""
            }
     },
    created() {
        let uri = "http://localhost:4000/transactions/getallclients";
        this.axios.get(uri).then(response => {
        this.clients = response.data;
        });
    },
    methods:{
        display() {
            //let productname = this.selectedItem;
           let uri = 'http://localhost:4000/transactions/clienttimeline';
            this.axios.post(uri,this.selectedItem).then(response=>{
                this.alltransactions=response.data.resultset;
                this.aggregatesum=response.data.agg
                this.sumrecieved=response.data.agg[0].totalRecieved
                this.sumissued=response.data.agg[0].totalIssued
                console.log(response.data.agg[0].totalRecieved);
                console.log(response.data.agg[0].totalIssued);
            });
            //console.log("heloooooooolalalalal");
        }
    },
    computed :{
      getbalance : function(){
         return this.sumrecieved-this.sumissued;
      }
   }
}
</script>

