<template>
    <div>
        <h1>
            Balance
        </h1>
        <hr>
         <div class="row table-responsive">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>In</th>
                        <th>Out</th>
                        <th>Balance</th>
                        <th>Re-Order Level</th>
                    </tr>
                </thead>
                <tbody>
                    <!--<tr v-for="trans in alltransactions" :key="trans._id">
                        <td>{{ trans.productName }}</td>
                        <td>{{trans.in}}</td>
                        <td>{{trans.out}}</td>
                        <td>Balance</td>
                    </tr>-->
                   
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      balances:[],
      alltransactions:[]
    }
  },
  created() {
    console.log("created");
   let uri = "http://localhost:4000/test/getbalances";
    this.axios.get(uri).then(response => {
     // this.balances = response.data;
     console.log(response.data);
    });
  }
} 
</script>
