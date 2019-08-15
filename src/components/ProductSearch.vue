<template>
    <div>
        <h1 class="row justify-content-center">Product Search</h1>
        <hr>
        

        <div class="wrapper" style="position: relative;">
            <i class="fa fa-search" style="position: absolute; top: 10px; left: 165px;"></i>
            <input type="text" placeholder="Search" v-model="searchQ">
        </div>
        <div v-if="searchQ != ''" class="row table-responsive">
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
                                <button class="btn btn-danger fa fa-edit"></button>
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
                  //return prod.productname.toUpperCase().indexOf(this.searchQ.toUpperCase())>-1
                  return Object.keys(prod).some((key)=>{
                      let string = String(prod[key])
                      return string.toUpperCase().indexOf(this.searchQ.toUpperCase())>-1
                  })
              })
          }
          else
          {
              this.temp=this.products
          }
      }
  }
}
</script>

    
