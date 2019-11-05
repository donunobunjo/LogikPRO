<template>
    <div>
        <h1 class="row justify-content-center">Client Search</h1>
        <hr>
        

        <div class="wrapper" style="position: relative;">
            <i class="fa fa-search" style="position: absolute; top: 10px; left: 165px;"></i>
            <input type="text" placeholder="Search" v-model="searchQ">
        </div>
        <div v-if="searchQ != ''" class="row table-responsive">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Contact person</th>
                        <th>Email</th>
                        <th>Type</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Active</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="client in temp" :key="client._id">
                            <td>{{ client.clientID }}</td>
                            <td>{{ client.clientName }}</td>
                            <td>{{ client.contactPerson }}</td>
                            <td>{{ client.email }}</td>
                            <td>{{ client.clientType }}</td>
                            <td>{{ client.address }}</td>
                            <td>{{ client.phoneNumber }}</td>
                            <td><input v-model="client.active" type="checkbox" disabled></td>
                            <td>
                                <button class="btn btn-danger fa fa-edit">Edit</button>
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
            clients:[],
            temp:[]

        }
    },
    created() {
    let uri = "http://localhost:4000/clients/searchclient";
    this.axios.get(uri).then(response => {
      this.clients = this.temp = response.data;
     //console.log(response.data);
    });
  },
  watch:{
      searchQ(){
          if(this.searchQ.length>0){
              this.temp=this.clients.filter((cliente)=>{
                  //return prod.productname.toUpperCase().indexOf(this.searchQ.toUpperCase())>-1
                  return Object.keys(cliente).some((key)=>{
                      let string = String(cliente[key])
                      return string.toUpperCase().indexOf(this.searchQ.toUpperCase())>-1
                  })
              })
          }
          else
          {
              this.temp=this.clients
          }
      }
  }
}
</script>

    
