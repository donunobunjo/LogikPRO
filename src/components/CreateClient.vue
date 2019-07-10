<template>
  <div>
    <h1 class="row justify-content-center">New Client</h1>

<form>
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="clientid">Client ID</label>
      <input type="type" class="form-control" id="clientid" placeholder="Client ID" v-model="client.clientID"  name = "clientid" v-validate="'required'" data-vv-scope="createClient" >
      <span v-if="errors.has('createClient.clientid')" class="errorms">
                        {{ errors.first('createClient.clientid') }}
      </span>
    </div>
    <div class="form-group col-md-4">
      <label for="clientname">Client Name</label>
      <input type="text" class="form-control" id="clientname" placeholder="Client Name" v-model="client.clientName" name = "clientname" v-validate="'required'" data-vv-scope="createClient" >
      <span v-if="errors.has('createClient.clientname')" class="errorms">
                        {{ errors.first('createClient.clientname') }}
      </span>
    </div>
    <div class="form-group col-md-4">
      <label for="contactperson">Contact Person</label>
      <input type="type" class="form-control" id="contactperson" placeholder="Contact person" v-model="client.contactPerson" name = "contactperson" v-validate="'required'" data-vv-scope="createClient" >
      <span v-if="errors.has('createClient.contactperson')" class="errorms">
                        {{ errors.first('createClient.contactperson') }}
      </span>
    </div>
  </div>
  <div class="form-row">
      <div class="form-group col-md-6">
      <label for="email">Email</label>
      <input type="email" class="form-control" id="email" placeholder="Email" v-model="client.email" name = "email" v-validate="'required|email'" data-vv-scope="createClient" >
      <span v-if="errors.has('createClient.email')" class="errorms">
                        {{ errors.first('createClient.email') }}
      </span>
      </div>
      <div class="form-group col-md-2">
          <label class="radio-inline">
            Supplier<input type="radio" name="type" value = "Supplier" v-model="client.type">
          </label>
      </div>
      <div class="form-group col-md-2">
          <label class="radio-inline">
            Customer<input type="radio" name="type" value = "Customer" v-model="client.type">
          </label>
      </div>
      <div class="form-group col-md-2">
          <label class="radio-inline">
            Both<input type="radio" name="type" value = "Both" v-model="client.type">
          </label>
      </div>
      
  </div>
  <div class="form-row">
  <div class="form-group col-md-8">
    <label for="address">Address</label>
    <textarea id="" cols="60" rows="5"  class="form-control" placeholder="Address...." v-model="client.address" name = "address" v-validate="'required'" data-vv-scope="createClient"></textarea>
    <span v-if="errors.has('createClient.address')" class="errorms">
                        {{ errors.first('createClient.address') }}
    </span>
  </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="phonenumber">Phone Number</label>
      <input type="text" class="form-control" id="phonenumber" v-model="client.phoneNumber" name = "phonenumber" v-validate="'required'" data-vv-scope="createClient">
      <span v-if="errors.has('createClient.phonenumber')" class="errorms">
                        {{ errors.first('createClient.phonenumber') }}
      </span>
    </div>
    <div class="form-group col-md-2">
      <div class="form-check">
        <label for="dummy">.</label>
        <input class="form-check-input" type="checkbox" id="gridCheck" v-model="client.active" >
        <label class="form-check-label" for="gridCheck">
        Active
        </label>
      </div>
    </div>
  </div>
  
  <button type="submit" class="btn btn-primary" @click.prevent="createClient('createClient')">Save</button>
</form>
    
  </div>
</template>

<script>
export default {
      data() {
            return {
              client:{
                clientID:'',
                clientName:'',
                contactPerson:'',
                email:'',
                type: 'Both',
                address:'',
                phoneNumber:'',
                active:true,

              }
            
            }
      },
      methods:{
        createClient(scope){
            this.$validator.validateAll(scope).then(res => {
                    if (res) {
                        console.log("validated");
                    }else{
                         console.log("Invalid");
                    }
            });
        }
      }
};
</script>
<style>
.errorms {
  color: red;
}
</style>