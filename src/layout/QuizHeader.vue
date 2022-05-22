<template>
   <header class="header-global">
        <base-nav class="navbar" transparent type="" expand>
            <router-link slot="brand" class="navbar-brand" to="/">
                <img src="/img/logo.png" alt="logo" style="height: 3.5rem">
            </router-link>
        </base-nav>
    </header>
</template>

<script>
import BaseNav from "@/components/BaseNav";

export default {
  components: {
    BaseNav,
  },
}
</script>

<style>

</style>