<template>
    <div id="app">
        <div class="wrapper row1">
            <header id="header" class="hoc clear">
                <div id="logo" class="fl_left">
                    <h1>
                        <a href="#">logistiksPRO</a>
                    </h1>
                </div>
                <div class="container">
                    <div class="row">
                        <hr>
                        <div class="dropdown">
                            <a id="dLabel" role="button" class="btn btn-primary" data-target="#" href="/">
                                Home
                                <span class="caret"></span>
                            </a>
                        </div>
                        <div class="dropdown">
                            <a id="dLabel" role="button" data-toggle="dropdown" class="btn btn-primary" data-target="#" href="/page.html">
                                Register
                                <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">
                                <li>
                                    <a href="/createproduct">New Product</a>
                                </li>
                                <li>
                                    <a href="/createclient">New Client</a>
                                </li>
                            </ul>
                        </div>
                         <div class="dropdown">
                            <a id="dLabel" role="button" data-toggle="dropdown" class="btn btn-primary" data-target="#" href="#">
                                transactions
                                <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">
                                <li>
                                    <a href="/stockin">Stock In</a>
                                </li>
                                <li>
                                    <a href="/stockout">Stock Out</a>
                                </li>
                                <li class="divider"></li>
                                <li class="dropdown-submenu">
                                    <a tabindex="-1" href="#">Returns</a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a tabindex="-1" href="/returnout">Outwards</a>
                                        </li>
                                        <li>
                                            <a href="/returnin">Inwards</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="dropdown">
                            <a id="dLabel" role="button" data-toggle="dropdown" class="btn btn-primary" data-target="#" href="/page.html">
                                Timelines
                                <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">
                                <li>
                                    <a href="/producttimeline">Product</a>
                                </li>
                                <li>
                                    <a href="/clienttimeline">Client</a>
                                </li>
                                <li>
                                    <a href="/clientproducttimeline">Client Vs Product</a>
                                </li>
                                <li>
                                    <a href="/chronological">Chronological</a>
                                </li>
                            </ul>
                        </div>
                        <div class="dropdown">
                            <a id="dLabel" role="button" data-toggle="dropdown" class="btn btn-primary" data-target="#" href="/page.html">
                                Search
                                <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">
                                <li>
                                    <a href="/searchproduct">Product</a>
                                </li>
                                <li>
                                    <a href="/searchclient">Client</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

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
                <p class="fl_left">Copyright &copy; 2019 - All Rights Reserved -
                    <a href="#">LogistiksPRO---</a>This app created by Don Unobunjo is for demostration purpose only---08038891940
                </p>

            </div>
        </div>
    </div>
</template>

<script>
    export default {};
</script>

<style scoped>
    .dropdown-submenu {
        position: relative;
    }

    .dropdown-submenu>.dropdown-menu {
        top: 0;
        left: 100%;
        margin-top: -6px;
        margin-left: -1px;
        -webkit-border-radius: 0 6px 6px 6px;
        -moz-border-radius: 0 6px 6px;
        border-radius: 0 6px 6px 6px;
    }

    .dropdown-submenu:hover>.dropdown-menu {
        display: block;
    }

    .dropdown-submenu>a:after {
        display: block;
        content: " ";
        float: right;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
        border-width: 5px 0 5px 5px;
        border-left-color: #ccc;
        margin-top: 5px;
        margin-right: -10px;
    }

    .dropdown-submenu:hover>a:after {
        border-left-color: #fff;
    }

    .dropdown-submenu.pull-left {
        float: none;
    }

    .dropdown-submenu.pull-left>.dropdown-menu {
        left: -100%;
        margin-left: 10px;
        -webkit-border-radius: 6px 0 6px 6px;
        -moz-border-radius: 6px 0 6px 6px;
        border-radius: 6px 0 6px 6px;
    }
</style>