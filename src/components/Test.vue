<template>
    <div>
        <h1>Testing validation</h1>
        <input type="text" name="first" v-model="first" v-validate="'required'" data-vv-scope="first" >
        <span v-if="errors.has('first.first')" class="errorms">
                        {{ errors.first('first.first') }}
        </span>
        <button @click.prevent="validateFirst('first')">first</button>
        <hr>
        <input type="text" name="second" v-model="second" v-validate="'required'" data-vv-scope="second">
        <span v-show="errors.has('second.second')" class="errorms">
                        {{ errors.first('second.second') }}
        </span>
        <button @click.prevent="validateSecond('second')">second</button>
        
    </div>
   
</template>
<script>
        export default {
            data() {
                return {
                    first: "",
                    second: ""
                }
            },
            methods:{
                validateFirst(scope){
                    console.log("heloooo validate first");
                    this.$validator.validateAll(scope).then(res => {
                        if (res) {
                            console.log("success first");
                        }
                        else{
                            console.log("failure first");
                        }
                    });
                },
                 validateSecond(scope){
                    console.log("heloooo validate second");
                    this.$validator.validateAll(scope).then(res => {
                        if (res) {
                            console.log("success second");
                        }
                        else{
                            console.log("failure second");
                        }
                    });
                }
            }
        }
</script>
