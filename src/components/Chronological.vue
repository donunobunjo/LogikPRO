<template>
    <div>
        <h1 class="row justify-content-center">Chronological Timeline</h1>
        <hr>
         <form>
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="date">Start Date</label>
                    <input v-model="selectedItem.startdate" type="date" class="form-control" @change="display">
                </div>
                <div class="form-group col-md-4">
                    <label for="date">End Date</label>
                    <input v-model="selectedItem.enddate" type="date" class="form-control" @change="display">
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
                    startdate: "",
                    enddate: "",
                },
                alltransactions:[],
                aggregatesum:[],
                sumrecieved:0,
                sumissued:0,
                balance:""
            }
     },
    /*created() {
        let uri = "http://localhost:4000/transactions/getallclients";
        this.axios.get(uri).then(response => {
        this.clients = response.data;
        });
    },
    beforeMount() {
        let uri = "http://localhost:4000/transactions/getallproducts";
        this.axios.get(uri).then(response => {
        this.products= response.data;
        });
    },*/
    methods:{
        display() {
            if(this.selectedItem.startdate==""||this.selectedItem.enddate=="")
            {
                
            }
            else{
                //let uri = 'http://localhost:4000/transactions/chronological'
                let uri = "https://logistiks-pro-api.herokuapp.com/transactions/chronological"
                this.axios.post(uri,this.selectedItem).then(response=>{
                this.alltransactions=response.data;
                });
            }
        },
    }
}
</script>