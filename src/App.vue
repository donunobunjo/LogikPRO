<template>
  <div id="app">
     <div class="wrapper row1">
    <header id="header" class="hoc clear"> 
          <div id="logo" class="fl_left">
        <h1><a href="#">logistiksPRO</a></h1>
      </div>
      <nav id="mainav" class="fl_right">
        <ul class="clear">
          <li><router-link to="/" class="nav-link">Home</router-link></li>
          <li><a class="drop" href="#">Register</a>
            <ul>
              <li><router-link to="/createclient" class="nav-link">New Client</router-link></li>
              <li><router-link to="/createproduct" class="nav-link">New Product</router-link></li>
              <!--<li><router-link to="/test" class="nav-link">Test</router-link></li>-->
            </ul>
          </li>
          <li><a class="drop" href="#">Transaction</a>
            <ul>
              <li><router-link to="/stockin" class="nav-link">Stock In</router-link></li>
              <li><router-link to="/stockout" class="nav-link">Stock Out</router-link></li>
              <li><a class="drop" href="#">Return</a>
                <ul>
                  <li><router-link to="/returnout" class="nav-link">Outwards</router-link></li>
                  <li><router-link to="/returnin" class="nav-link">Inwards</router-link></li>
                </ul>
              </li>
              
            </ul>
          </li>
          <li><a class="drop" href="#">Timelines</a>
            <ul>
              <li><router-link to="/producttimeline" class="nav-link">Product</router-link></li>
              <li><a href="">Client</a></li>
              <li><a href="">Product Vs Client</a></li>
            </ul>
          </li>

           <li><a class="drop" href="#">Search</a>
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
export default {};
</script>

<style>
</style>
