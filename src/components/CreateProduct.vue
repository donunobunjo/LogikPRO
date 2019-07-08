<template>
    <div>
        <h1 class="row justify-content-center">New Product</h1>

        <form @submit.prevent="createProduct('create')">
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="productid">Product ID
                        <span>*</span>
                    </label>
                    <input v-model="product.productid" type="text" class="form-control" id="productid" placeholder="Product ID" name="productid"
                        v-validate="'required'" data-vv-scope="create">
                    <span v-if="errors.has('create.productid')" class="errorms">
                        {{ errors.first('create.productid') }}
                    </span>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="productname">Product Name
                        <span>*</span>
                    </label>
                    <input v-model="product.productname" type="text" class="form-control" id="productname" placeholder="product Name" name="productname"
                        v-validate="'required'" data-vv-scope="create">
                    <span v-if="errors.has('create.productname')" class="errorms">
                        {{ errors.first('create.productname') }}
                    </span>
                </div>
            </div>


            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="reorderlevel">Re-Order Level
                        <span>*</span>
                    </label>
                    <input v-model="product.reorderlevel" type="number" class="form-control" id="reorderlevel" placeholder="Re-order level" name="reorderlevel"
                        v-validate="'required|numeric'" data-vv-scope="create">
                    <span v-if="errors.has('create.reorderlevel')" class="errorms">
                        {{ errors.first('create.reorderlevel') }}
                    </span>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-2">
                    <div class="form-check">
                        <input v-model="product.active" class="form-check-input" type="checkbox" id="gridCheck">
                        <label class="form-check-label" for="gridCheck">
                            Active
                        </label>
                    </div>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Save</button>

        </form>
        <div class="row">
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
                    <tr v-for="product in products" :key="product._id">
                        <template v-if="editId == product._id">
                            <td>
                                <input v-model="editProduct.productid" type="text" v-validate="'required'" name="editproductid" id="editproductid" data-vv-scope="update">
                                <span v-if="errors.has('update.editproductid')" class="errorms">
                                    {{ errors.first('update.editproductid') }}
                                </span>
                            </td>
                            <td>
                                <input v-model="editProduct.productname" type="text" v-validate="'required'" name="editproductname" id="editproductname" data-vv-scope="update" >
                                <span v-if="errors.has('update.editproductname')" class="errorms">
                                    {{ errors.first('update.editproductname') }}
                                </span>
                            </td>
                            <td>
                                <input v-model="editProduct.reorderlevel" type="text" v-validate="'required|numeric'" name="editproductreorderlevel" id="editproductreorderlevel" data-vv-scope="update" >
                                <span v-if="errors.has('update.editproductreorderlevel')" class="errorms">
                                    {{ errors.first('update.editproductreorderlevel') }}
                                </span>
                            </td>
                            <td>
                                <!--<input v-model="editProduct.active" type="text">-->
                                <input v-model="editProduct.active" type="checkbox">
                            </td>
                            <td>
                                <!--<span class="icon">
                                    <i @click="editSubmit(product._id)" class="fa fa-check"></i>Update
                                </span>-->
                                <button class="btn btn-danger" @click.prevent="editSubmit(product._id)">Update</button>
                                <!--<span class="icon">
                                    <i @click="cancel" class="fa fa-ban"></i>Cancel
                                </span>-->
                                <button class="btn btn-danger" @click.prevent="cancel()">Cancel</button>
                            </td>
                        </template>
                        <template v-else>
                            <td>{{ product.productid }} {{product._id}} </td>
                            <td>{{ product.productname }}</td>
                            <td>{{ product.reorderlevel }}</td>
                            <!--<td>{{ product.active }}</td>-->
                            <td><input v-model="product.active" type="checkbox" disabled></td>
                            <td>
                                <button class="btn btn-danger" @click.prevent="edit_Product(product)">Edit</button>
                                <button class="btn btn-danger" @click.prevent="deleteProduct(product._id)">Delete</button>
                            </td>
                            <!--<td><router-link :to="{name: 'edit', params: { id: product._id }}" class="btn btn-primary btn-xs">Edit</router-link> <button class="btn btn-danger" @click.prevent="deleteProduct(product._id)">Delete</button></td>-->
                        </template>
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
                editId: "",
                product: {
                    productid: "",
                    productname: "",
                    reorderlevel: "",
                    active: true
                },
                editProduct: {
                    _id:"",
                    productid: "",
                    productname: "",
                    reorderlevel: "",
                    active: true
                },
                products: []
            };
        },
        methods: {
            createProduct(scope) {
                this.$validator.validateAll(scope).then(res => {
                    if (res) {
                        //alert('Form successfully submitted!')
                        let uri = "http://localhost:4000/products/add";
                        this.axios.post(uri, this.product).then(response => {
                            //this.$router.push({name: 'product'});
                            this.products.unshift({
                                _id: response.data._id,
                                productid: response.data.productid,
                                productname: response.data.productname,
                                reorderlevel: response.data.reorderlevel,
                                active: response.data.active
                            });
                            console.log("successful saved");
                            this.product = {};
                            this.$validator.reset();
                            this.product.active = true;
                        });

                        // console.log("successful saved")
                    } else {
                        //alert('Please correct all error!')
                        console.log("Error occured");
                    }
                });
            },
            editSubmit(id) {
                //blank, dont forget the id parameter
                        this.$validator.validateAll('update').then(res => {
                                if (res) {
                                    console.log("no wahala");
                                    console.log(id);
                                    let uri = `http://localhost:4000/products/update/${id}`;
                                    this.axios.post(uri,this.editProduct).then(response => {
                                    this.products.splice(this.products.indexOf(id), 1,response.data);
                                    this.editId = '';
                                    this.editProduct.productid = '';
                                    this.editProduct.productname = '';
                                    this.editProduct.productreorderlevel = '';
                                    console.log("changed successfuly")
                                    console.log(response.data._id);
                                    console.log(response.data.productname);
                                    });
                                    
                                } else {
                                    console.log("Error occured");
                                }
                });
            },
            edit_Product(product) {
                this.editId = product._id;
                this.editProduct._id=product._id;
                this.editProduct.productid = product.productid;
                this.editProduct.productname = product.productname;
                this.editProduct.reorderlevel = product.reorderlevel;
                this.editProduct.active= product.active;
               
            },
            deleteProduct(id) {
                let uri = `http://localhost:4000/products/delete/${id}`;
                this.axios.delete(uri).then(response => {
                    this.products.splice(this.products.indexOf(id), 1);
                });
            },
            cancel(){
                this.editId = ''
                this.editProduct.productid = ''
                this.editProduct.productname = ''
                this.editProduct.productreorderlevel = ''
            }
        }
    };
</script>
<style>
    .errorms {
        color: red;
    }
</style>