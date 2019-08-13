<template>
    <div>
        <h1 class="row justify-content-center">Product Search</h1>
        <hr>
        <div class="col-md-6">.</div>
        <div class="col-md-6">
             
                <input type="text" placeholder="search" v-model="searchQ">
                <span>
                    <i class="fa fa-search"></i>
                </span>
        </div>
         <div class="row table-responsive">
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
                    <tr v-for="product in temp" :key="product._id">
                            <td>{{ product.productid }}</td>
                            <td>{{ product.productname }}</td>
                            <td>{{ product.reorderlevel }}</td>
                            <td><input v-model="product.active" type="checkbox" disabled></td>
                            <td>
                                <!--<button class="btn btn-danger" @click.prevent="edit_Product(product)">Edit</button>
                                <button class="btn btn-danger" @click.prevent="deleteProduct(product._id)">Delete</button>-->
                            </td>
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
            searchQ: "",
            products:[],
            temp:[]

        }
    },
    created() {
    let uri = "http://localhost:4000/products/searchproduct";
    this.axios.get(uri).then(response => {
      this.products = this.temp = response.data;
     //console.log(response.data);
    });
  },
  watch:{
      searchQ(){
          if(this.searchQ.length>0){
              this.temp=this.products.filter((prod)=>{
                  return prod.productname.toUpperCase().indexOf(this.searchQ.toUpperCase())>-1
                  //console.log(result)
              })
             // console.log(testy)
              
          }
          else
          {
              this.temp=this.products
          }
          //console.log(this.searchQ);
      }
  }
}
</script>

    
