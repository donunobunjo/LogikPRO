<template>
  <div id="app">
     <div class="wrapper row1">
    <header id="header" class="hoc clear"> 
          <div id="logo" class="fl_left">
        <h1><a href="#">logistikPRO</a></h1>
      </div>
      <nav id="mainav" class="fl_right">
        <ul class="clear">
          <!--<li class="active"><a href="index.html">Home</a></li>-->
          <!--<li> <a href="#"> <route-link to="/">Home</route-link></a></li>-->
          <li><router-link to="/" class="nav-link">Home</router-link></li>
          <li><a class="drop" href="#">Register</a>
            <ul>
              <!--<li><a href="#"><route-link to="/createclient"> Client</route-link></a></li>-->
              <li><router-link to="/createclient" class="nav-link">New Client</router-link></li>
             <!-- <router-link to="/" class="nav-link">Home</router-link>-->
              <li><a href="#">Product</a></li>
              
            </ul>
          </li>
          <li><a class="drop" href="#">Transaction</a>
            <ul>
              <li><a href="#">Reciept</a></li>
              <li><a href="#">Issuance</a></li>
              <li><a class="drop" href="#">Returns</a>
                <ul>
                  <li><a href="#">Inwards</a></li>
                  <li><a href="#">Outwards</a></li>
                </ul>
              </li>
              
            </ul>
          </li>
          <li><a class="drop" href="#">History</a>
            <ul>
              <li><a href="#">Client</a></li>
              <li><a href="">Product</a></li>
              
            </ul>
          </li>
        </ul>
      </nav>
      
    </header>
  </div>
  
  
    
  <div class="wrapper row3">
    <main class="hoc container clear"> 
        <transition name="fade">
            <router-view></router-view>
        </transition>
        
   </main>
  </div>
  <div class="wrapper row5">
    <div id="copyright" class="hoc clear"> 
      <p class="fl_left">Copyright &copy; 2019 - All Rights Reserved - <a href="#">LogistikPRO</a></p>
      
    </div>
  </div>
  </div>
</template>

<script>

export default {
 
}
</script>

<style>

</style>
