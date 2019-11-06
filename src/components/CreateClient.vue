<template>
    <div>
        <loading :active.sync="isLoading" 
        :can-cancel="false" 
        :on-cancel="onCancel"
        :is-full-page="fullPage"></loading>
        <h1 class="row justify-content-center">New Client</h1>
        <hr>
        <form>
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="clientid">Client ID
                         <span>*</span>
                    </label>
                    <input type="type" class="form-control" id="clientid" placeholder="Client ID" v-model="client.clientID" name="clientid" v-validate="'required'"
                        data-vv-scope="createClient">
                    <span v-if="errors.has('createClient.clientid')" class="errorms">
                        {{ errors.first('createClient.clientid') }}
                    </span>
                </div>
                <div class="form-group col-md-4">
                    <label for="clientname">Client Name
                         <span>*</span>
                    </label>
                    <input type="text" class="form-control" id="clientname" placeholder="Client Name" v-model="client.clientName" name="clientname"
                        v-validate="'required'" data-vv-scope="createClient">
                    <span v-if="errors.has('createClient.clientname')" class="errorms">
                        {{ errors.first('createClient.clientname') }}
                    </span>
                </div>
                <div class="form-group col-md-4">
                    <label for="contactperson">Contact Person
                         <span>*</span>
                    </label>
                    <input type="type" class="form-control" id="contactperson" placeholder="Contact person" v-model="client.contactPerson" name="contactperson"
                        v-validate="'required'" data-vv-scope="createClient">
                    <span v-if="errors.has('createClient.contactperson')" class="errorms">
                        {{ errors.first('createClient.contactperson') }}
                    </span>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="email">Email
                         <span>*</span>
                    </label>
                    <input type="email" class="form-control" id="email" placeholder="Email" v-model="client.email" name="email" v-validate="'required|email'"
                        data-vv-scope="createClient">
                    <span v-if="errors.has('createClient.email')" class="errorms">
                        {{ errors.first('createClient.email') }}
                    </span>
                </div>
                <div class="form-group col-md-2">
                    <label class="radio-inline">
                        Supplier
                        <input type="radio" name="type" value="Supplier" v-model="client.clientType">
                    </label>
                </div>
                <div class="form-group col-md-2">
                    <label class="radio-inline">
                        Customer
                        <input type="radio" name="type" value="Customer" v-model="client.clientType">
                    </label>
                </div>
                <div class="form-group col-md-2">
                    <label class="radio-inline">
                        Both
                        <input type="radio" name="type" value="Both" v-model="client.clientType">
                    </label>
                </div>

            </div>
            <div class="form-row">
                <div class="form-group col-md-8">
                    <label for="address">Address
                         <span>*</span>
                    </label>
                    <textarea id="" cols="60" rows="5" class="form-control" placeholder="Address...." v-model="client.address" name="address"
                        v-validate="'required'" data-vv-scope="createClient"></textarea>
                    <span v-if="errors.has('createClient.address')" class="errorms">
                        {{ errors.first('createClient.address') }}
                    </span>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="phonenumber">Phone Number
                         <span>*</span>
                    </label>
                    <input type="text" class="form-control" id="phonenumber" v-model="client.phoneNumber" name="phonenumber" v-validate="'required'"
                        data-vv-scope="createClient">
                    <span v-if="errors.has('createClient.phonenumber')" class="errorms">
                        {{ errors.first('createClient.phonenumber') }}
                    </span>
                </div>
                <div class="form-group col-md-2">
                    <div class="form-check">
                        <label for="dummy">.</label>
                        <input class="form-check-input" type="checkbox" id="gridCheck" v-model="client.active">
                        <label class="form-check-label" for="gridCheck">
                            Active
                        </label>
                    </div>
                </div>
            </div>

            <!--<button type="submit" class="btn btn-primary" @click.prevent="createClient('createClient')">Save</button>-->
            <button class="btn" type="submit" @click.prevent="createClient('createClient')"><i class="fa fa-save"></i> Save</button>
        </form>
        <div class="row table-responsive">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Client ID</th>
                        <th>Client Name</th>
                        <th>Contact Person</th>
                        <th>Email</th>
                        <th>Type</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Active</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="client in clients" :key="client._id">
                        <template v-if="editId == client._id">
                            <td>
                                <input v-model="editClient.clientID" type="text" v-validate="'required'" name="editclientid" id="editclientid" data-vv-scope="update">
                                <span v-if="errors.has('update.editclientid')" class="errorms">
                                    {{ errors.first('update.editclientid') }}
                                </span>
                            </td>
                            <td>
                                <input v-model="editClient.clientName" type="text" v-validate="'required'" name="editclientname" id="editclientname" data-vv-scope="update">
                                <span v-if="errors.has('update.editclientname')" class="errorms">
                                    {{ errors.first('update.editclientname') }}
                                </span>
                            </td>
                            <td>
                                <input v-model="editClient.contactPerson" type="text" v-validate="'required'" name="editcontactperson" id="editcontactperson"
                                    data-vv-scope="update">
                                <span v-if="errors.has('update.editcontactperson')" class="errorms">
                                    {{ errors.first('update.editcontactperson') }}
                                </span>
                            </td>
                            <td>
                                <input v-model="editClient.email" type="text" v-validate="'required|email'" name="editemail" id="editemail" data-vv-scope="update">
                                <span v-if="errors.has('update.editemail')" class="errorms">
                                    {{ errors.first('update.editemail') }}
                                </span>
                            </td>
                            <td>
                                <!--<input v-model="editClient.type" type="text" v-validate="'required'" name="edittype" id="edittype" data-vv-scope="update">
                                <span v-if="errors.has('update.edittype')" class="errorms">
                                    {{ errors.first('update.edittype') }}
                                </span>-->
                                <label class="radio-inline">
                                        Supplier
                                        <input type="radio" name="type" value="Supplier" v-model="editClient.clientType">
                                </label>
                                <label class="radio-inline">
                                        Customer
                                        <input type="radio" name="type" value="Customer" v-model="editClient.clientType">
                                </label>
                                <label class="radio-inline">
                                        Both
                                        <input type="radio" name="type" value="Both" v-model="editClient.clientType">
                                </label>
                            </td>
                            <td>
                                <input v-model="editClient.address" type="text" v-validate="'required'" name="editaddress" id="editaddress" data-vv-scope="update">
                                <span v-if="errors.has('update.editaddress')" class="errorms">
                                    {{ errors.first('update.editaddress') }}
                                </span>
                            </td>
                            <td>
                                <input v-model="editClient.phoneNumber" type="text" v-validate="'required'" name="phonenumber" id="phonenumber" data-vv-scope="update">
                                <span v-if="errors.has('update.editphonenumber')" class="errorms">
                                    {{ errors.first('update.editphonenumber') }}
                                </span>
                            </td>
                            <td>
                                <!--<input v-model="editProduct.active" type="text">-->
                                <input v-model="editClient.active" type="checkbox">
                            </td>
                            <td>
                                <button class="btn btn-danger fa fa-check" @click.prevent="editSubmit(client._id)">Update</button>
                                <button class="btn btn-danger fa fa-times" @click.prevent="cancel()">Cancel</button>
                            </td>
                        </template>
                        <template v-else>
                            <td>{{ client.clientID }}</td>
                            <td>{{ client.clientName }}</td>
                            <td>{{ client.contactPerson }}</td>
                            <td>{{ client.email }}</td>
                            <td>{{ client.clientType }}</td>
                            <td>{{ client.address }}</td>
                            <td>{{ client.phoneNumber }}</td>
                            <td>
                                <input v-model="client.active" type="checkbox" disabled>
                            </td>
                            <td>
                                <!--<button class="btn btn-danger" @click.prevent="edit_client(client)">Edit</button>
                                <button class="btn btn-danger" @click.prevent="deleteClient(client._id)">Delete</button>-->
                                 <span class="icon">
                                    <i @click.prevent="edit_client(client)" class="fa fa-edit"  style="font-size:36px"></i>
                                </span>..
                                <span class="icon">
                                    <i @click.prevent="deleteClient(client._id)" class="fa fa-trash"  style="font-size:36px;color:red"></i>
                                </span>
                            </td>
                        </template>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
// Import component
    import Loading from 'vue-loading-overlay';
    // Import stylesheet
    import 'vue-loading-overlay/dist/vue-loading.css';
export default {
  data() {
    return {
      editId: "",
      client: {
        clientID: "",
        clientName: "",
        contactPerson: "",
        email: "",
        clientType: "Both",
        address: "",
        phoneNumber: "",
        active: true
      },
      editClient: {
        _id: "",
        clientID: "",
        clientName: "",
        contactPerson: "",
        email: "",
        clientType: "Both",
        address: "",
        phoneNumber: "",
        active: true
      },
      clients: [],
      isLoading: false,
      fullPage: true
    };
  },
  components: {
            Loading
  },
  methods: {
    createClient(scope) {
      this.$validator.validateAll(scope).then(res => {
        if (res) {
            this.isLoading=true
          let uri = "http://localhost:4000/clients/add";
          this.axios.post(uri, this.client).then(response => {
              this.clients.unshift({
              _id: response.data._id,
              clientID: response.data.clientID,
              clientName: response.data.clientName,
              contactPerson: response.data.contactPerson,
              email: response.data.email,
              clientType: response.data.clientType,
              address: response.data.address,
              phoneNumber: response.data.phoneNumber,
              active: response.data.active
            });
            this.isLoading = false;
            this.client = {};
            this.$validator.reset();
            this.client.active = true;
            this.client.clientType = "Both";
          });
        } else {
          
        }
      });
    },
    deleteClient(id) {
      let uri = `http://localhost:4000/clients/delete/${id}`;
      this.axios.delete(uri).then(() => {
        var loc = this.clients.findIndex(x => x._id === id);
        this.clients.splice(loc, 1);
      });
    },
    edit_client(client) {
      this.editId = client._id;
      this.editClient._id = client._id;
      this.editClient.clientID = client.clientID;
      this.editClient.clientName = client.clientName;
      this.editClient.contactPerson = client.contactPerson;
      this.editClient.email = client.email;
      this.editClient.clientType = client.clientType;
      this.editClient.address = client.address;
      this.editClient.phoneNumber = client.phoneNumber;
      this.editClient.active = client.active;
    },
    editSubmit(id) {
      this.$validator.validateAll("update").then(res => {
        if (res) {
          let uri = `http://localhost:4000/clients/update/${id}`;
          this.axios.post(uri, this.editClient).then(response => {
            var loc = this.clients.findIndex(x => x._id === id);
            this.clients.splice(loc, 1, response.data);
            this.editId = "";
          });
        } else {
          //console.log("Error occured");
        }
      });
    },

    cancel() {
      this.editId = "";
      this.editClient.clientID = "";
      this.editClient.clientName = "";
      this.editClient.contactPerson = "";
      this.editClient.email = "";
      this.editClient.clientType = "";
      this.editClient.address = "";
      this.editClient.phoneNumber = "";
    }
  }
};
</script>
<style>
.errorms {
  color: red;
}
</style>