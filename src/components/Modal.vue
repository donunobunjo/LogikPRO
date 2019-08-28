<template>
    <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
                <h1 class="row justify-content-center">Product Edit</h1>
                <button type="button" class="btn-close" @click="$emit('close')" aria-label="Close modal">x</button>
          </div>

          <div class="modal-body">
                    
        <form>
            <input ref = "iden" :value="editProduct._id" class="form-control" id="iden" name="iden" type="text">
            <div class="form-row">
                <div class="form-group col-md-12">
                    <label for="productid">Product ID
                        <span>*</span>
                    </label>
                    <input ref="productid" :value="editProduct.productid" type="text" class="form-control" id="productid" placeholder="Product ID" name="productid">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-12">
                    <label for="productname">Product Name
                        <span>*</span>
                    </label>
                    <input ref = "productname" :value="editProduct.productname" class="form-control" id="productname" placeholder="product Name" name="productname">
                </div>
            </div>


            <div class="form-row">
                <div class="form-group col-md-12">
                    <label for="reorderlevel">Re-Order Level
                        <span>*</span>
                    </label>
                    <input ref = "reorderlevel" :value="editProduct.reorderlevel" type="number" class="form-control" id="reorderlevel" placeholder="Re-order level" name="reorderlevel">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-12">
                    <div class="form-check">
                        <input ref = "active" :checked="editProduct.active" class="form-check-input" type="checkbox" id="gridCheck">
                        <label class="form-check-label" for="gridCheck">
                            Active
                        </label>
                    </div>
                </div>
            </div>
            <!--<button type="submit" class="btn btn-primary">Save</button>-->
            <button type="button" class="btn btn-close" @click.prevent ="$emit('close')"><i class="fa fa-times"></i> Cancel</button>
            <button class="btn  btn-success" type="submit" @click.prevent ="editedvalues"><i class="fa fa-save"></i> Save</button>
        </form>
          </div>

        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
    props:['editProduct'],
    name:'Modal',
    data() {
        return {
                 editedproduct: {
                    _pid:"",
                    productid: "",
                    productname: "",
                    reorderlevel: "",
                    active: true
                },
        }
    },
    methods:{
           editedvalues(){
              console.log("Helloooooo");
              this.editedproduct._pid=this.$refs.iden.value;
              this.editedproduct.productid=this.$refs.productid.value;
              this.editedproduct.productname=this.$refs.productname.value;
              this.editedproduct.reorderlevel=this.$refs.reorderlevel.value;
              this.editedproduct.active=this.$refs.active.checked;
              console.log(this.editedproduct.productname);
              console.log(this.editedproduct.active);
              this.$emit('save',this.editedproduct, this.editedproduct._pid);
           } 
    }
}
</script>



<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>

