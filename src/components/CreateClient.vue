<template>
    <div>
        <h1 class="row justify-content-center">New Client</h1>

        <form>
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="clientid">Client ID</label>
                    <input type="type" class="form-control" id="clientid" placeholder="Client ID" v-model="client.clientID" name="clientid" v-validate="'required'"
                        data-vv-scope="createClient">
                    <span v-if="errors.has('createClient.clientid')" class="errorms">
                        {{ errors.first('createClient.clientid') }}
                    </span>
                </div>
                <div class="form-group col-md-4">
                    <label for="clientname">Client Name</label>
                    <input type="text" class="form-control" id="clientname" placeholder="Client Name" v-model="client.clientName" name="clientname"
                        v-validate="'required'" data-vv-scope="createClient">
                    <span v-if="errors.has('createClient.clientname')" class="errorms">
                        {{ errors.first('createClient.clientname') }}
                    </span>
                </div>
                <div class="form-group col-md-4">
                    <label for="contactperson">Contact Person</label>
                    <input type="type" class="form-control" id="contactperson" placeholder="Contact person" v-model="client.contactPerson" name="contactperson"
                        v-validate="'required'" data-vv-scope="createClient">
                    <span v-if="errors.has('createClient.contactperson')" class="errorms">
                        {{ errors.first('createClient.contactperson') }}
                    </span>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Email" v-model="client.email" name="email" v-validate="'required|email'"
                        data-vv-scope="createClient">
                    <span v-if="errors.has('createClient.email')" class="errorms">
                        {{ errors.first('createClient.email') }}
                    </span>
                </div>
                <div class="form-group col-md-2">
                    <label class="radio-inline">
                        Supplier
                        <input type="radio" name="type" value="Supplier" v-model="client.type">
                    </label>
                </div>
                <div class="form-group col-md-2">
                    <label class="radio-inline">
                        Customer
                        <input type="radio" name="type" value="Customer" v-model="client.type">
                    </label>
                </div>
                <div class="form-group col-md-2">
                    <label class="radio-inline">
                        Both
                        <input type="radio" name="type" value="Both" v-model="client.type">
                    </label>
                </div>

            </div>
            <div class="form-row">
                <div class="form-group col-md-8">
                    <label for="address">Address</label>
                    <textarea id="" cols="60" rows="5" class="form-control" placeholder="Address...." v-model="client.address" name="address"
                        v-validate="'required'" data-vv-scope="createClient"></textarea>
                    <span v-if="errors.has('createClient.address')" class="errorms">
                        {{ errors.first('createClient.address') }}
                    </span>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="phonenumber">Phone Number</label>
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

            <button type="submit" class="btn btn-primary" @click.prevent="createClient('createClient')">Save</button>
        </form>
       <div class="row">
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
                                <input v-model="editClient.clientName" type="text" v-validate="'required'" name="editclientname" id="editclientname" data-vv-scope="update" >
                                <span v-if="errors.has('update.editclientname')" class="errorms">
                                    {{ errors.first('update.editclientname') }}
                                </span>
                            </td>
                            <td>
                                <input v-model="editClient.contactPerson" type="text" v-validate="'required'" name="editcontactperson" id="editcontactperson" data-vv-scope="update" >
                                <span v-if="errors.has('update.editcontactperson')" class="errorms">
                                    {{ errors.first('update.editcontactperson') }}
                                </span>
                            </td>
                            <td>
                                <input v-model="editClient.email" type="text" v-validate="'required|email'" name="editemail" id="editemail" data-vv-scope="update" >
                                <span v-if="errors.has('update.editemail')" class="errorms">
                                    {{ errors.first('update.editemail') }}
                                </span>
                            </td>
                            <td>
                                <input v-model="editClient.type" type="text" v-validate="'required'" name="edittype" id="edittype" data-vv-scope="update" >
                                <span v-if="errors.has('update.edittype')" class="errorms">
                                    {{ errors.first('update.edittype') }}
                                </span>
                            </td>
                            <td>
                                <input v-model="editClient.address" type="text" v-validate="'required'" name="editaddress" id="editaddress" data-vv-scope="update" >
                                <span v-if="errors.has('update.editaddress')" class="errorms">
                                    {{ errors.first('update.editaddress') }}
                                </span>
                            </td>
                            <td>
                                <input v-model="editClient.phoneNumber" type="text" v-validate="'required'" name="phonenumber" id="phonenumber" data-vv-scope="update" >
                                <span v-if="errors.has('update.editphonenumber')" class="errorms">
                                    {{ errors.first('update.editphonenumber') }}
                                </span>
                            </td>
                            <td>
                                <!--<input v-model="editProduct.active" type="text">-->
                                <input v-model="editClient.active" type="checkbox">
                            </td>
                            <td>
                                <!--<span class="icon">
                                    <i @click="editSubmit(product._id)" class="fa fa-check"></i>Update
                                </span>-->
                                <button class="btn btn-danger" @click.prevent="editSubmit(client._id)">Update</button>
                                <!--<span class="icon">
                                    <i @click="cancel" class="fa fa-ban"></i>Cancel
                                </span>-->
                                <button class="btn btn-danger" @click.prevent="cancel()">Cancel</button>
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
                            <td><input v-model="client.active" type="checkbox" disabled></td>
                            <td>
                                <button class="btn btn-danger" @click.prevent="edit_client(client)">Edit</button>
                                <button class="btn btn-danger" @click.prevent="deleteclient(client._id)">Delete</button>
                            </td>
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
                    clientID: "",
                    clientName: "",
                    contactPerson: "",
                    email: "",
                    clientType: "Both",
                    address: "",
                    phoneNumber: "",
                    active: true
                },
                clients: []
            };
        },
        methods: {
            createClient(scope) {
                this.$validator.validateAll(scope).then(res => {
                    if (res) {
                        console.log("validated");
                            let uri = "http://localhost:4000/clients/add";
                            this.axios.post(uri, this.client).then(response => {
                                console.log(response.data);
                            this.clients.unshift({
                                _id: response.data._id,
                                clientID: response.data.clientID,
                                clientName: response.data.clientName,
                                contactPerson: response.data.contactPerson,
                                email: response.data.email,
                                type: response.data.type,
                                address: response.data.address,
                                phoneNumber: response.data.phoneNumber,
                                active: response.data.active
                            });
                            this.client = {};
                            this.$validator.reset();
                            this.client.active = true;
                        });
                    } else {
                        console.log("Invalid");
                    }
                });
               /* let uri = "http://localhost:4000/clients/add";
                this.axios.post(uri, this.client).then(response => {
                    console.log(response.data.msg);
                });*/
            }
        }
    };
</script>
<style>
    .errorms {
        color: red;
    }
</style>