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
                                <button class="btn btn-danger fa fa-edit" @click.prevent="edit_Product(product)">
                                   
                                </button>
                            </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <Modal v-if="showModal"  @close="showModal = false" :editProduct="editProduct" @save="saveedit">
            
        </Modal>
    </div>
    
</template>
<script>
import Modal from './Modal.vue';
export default {
    name:'ProductSearch',
    components:{
        Modal
    },
    data() {
        return {
            searchQ: "",
            products:[],
            temp:[],
            showModal:false,
            editProduct: {
                    _id:"",
                    productid: "",
                    productname: "",
                    reorderlevel: "",
                    active: true
            }
        }
    },
    created() {
    let uri = "http://localhost:4000/products/searchproduct";
    this.axios.get(uri).then(response => {
      this.products = this.temp = response.data;
     //console.log(response.data);
    });
  },
  methods:{
        edit_Product(product) {
                this.editProduct._id=product._id;
                this.editProduct.productid = product.productid;
                this.editProduct.productname = product.productname;
                this.editProduct.reorderlevel = product.reorderlevel;
                this.editProduct.active= product.active;
                this.showModal = true
                //console.log(this.editProduct._id);
               
        },
        saveedit(data,pid){
            let uri = `http://localhost:4000/products/update/${pid}`;
            this.axios.post(uri,data).then(response => {
                var loc = this.temp.findIndex(x => x._id ===pid);
                this.temp.splice(loc, 1,response.data);
            });
        }
      
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

    
