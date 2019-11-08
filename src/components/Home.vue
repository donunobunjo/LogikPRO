<template>
<div>
  <div class="row justify-content-center" id="overlay">
    <hr>
      <h1>LogistiksPRO</h1>
      <hr>
      <p>A warehouse inventory/logistics application develop by Don Unobunjo for demonstration purpose only</p>
      <p>The application was created using the following stack:</p><br>
     
  </div>
    <div class="row justify-content-center">
              <ol>
        <li>Mongodb</li>
        <li>ExpressJS</li>
        <li>VueJS</li>
        <li>Node</li>
        <li>Rest API</li>
      </ol>
      </div>
   <div class="row justify-content-center">
     <hr>
              <h4>Functionalities</h4>
              <hr>
               <dl>
  <dt>Client Registration</dt>
  <dd>Here you register the customer/client that can supply or recieve merchandise, as the case may be</dd>
  <dt>Product Registration</dt>
  <dd>Here you register products that will form part of the warehouse inventory</dd>
  <dt>Stock In</dt>
  <dd>Entries for merchandise coming into the warehouse</dd>
  <dt>Stock Out</dt>
  <dd>Entries for merchandise leavings the warehouse</dd>
  <dt>Return Inwards</dt>
  <dd>Entries for merchandise returned by customers</dd>
  <dt>Return Outwards</dt>
  <dd>Entries for merchandise returned by supliers</dd>
  <dt>Timelines</dt>
  <dd>Shows Chronological history for products or clients as the case may be</dd>
</dl> 
    </div> 
</div>

</template>
<script>
export default {
}
</script>
<style scoped>
      #overlay{
        /* background-image: url('../assets/overlay.jpg');
         height: 400px;
         /*margin-top: 5px;*/
         /*background-color: aqua;*/
      }
</style>
