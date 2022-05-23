<template>
  <section class="section-hero section-shaped my-0">
    <div class="shape shape-style-1 shape-primary">
      <span class="span-150"></span>
      <span class="span-50"></span>
      <span class="span-50"></span>
      <span class="span-75"></span>
      <span class="span-100"></span>
      <span class="span-75"></span>
      <span class="span-50"></span>
      <span class="span-100"></span>
      <span class="span-50"></span>
      <span class="span-100"></span>
    </div>
    <div class="container shape-container d-flex align-items-center">
      <div class="col px-0">
        <div class="row justify-content-center align-items-center">
          <div class="col-lg-7 text-center pt-lg">
            <img
              src="/img/new-logo.png"
              alt
              style="width: 350px;"
              class="img-fluid"
            />
            <p class="lead text-dark mt-4 mb-5" style="font-weight: bold">
              Fique um pouco mais esperto com um quiz de 5 minutos!
            </p>
            <div class="mb-5 mt-5 animate__animated animate__backInUp">
              <router-link :to="{ path: '/quiz' }">
                <base-button
                  class="btn-1 animate__animated start"
                  size="lg"
                  type="warning"
                >
                  Começar
                </base-button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data: () => ({}),
  components: {
  },
};
</script>
<style scoped>
.start {
  font-size: 1.5rem;
}
.start:hover {
  display: inline-block;
  margin: 0 0.5rem;
  animation: pulse;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}
</style>
