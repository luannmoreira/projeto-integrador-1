<template>
<div class="body">
  <div class="profile-page">
    <section class="section-profile-cover section-shaped my-0">
      <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
    <section class="section section-skew">
      <div class="container" id="floating">
        <card shadow class="card-profile mt--300" no-body>
          <div class="px-3">
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
                  <a href="#">
                    <img
                      v-lazy="'img/theme/luann.jpeg'"
                      class="rounded-circle"
                    />
                  </a>
                </div>
              </div>
              <div
                class="col-lg-4 order-lg-3 text-lg-left align-self-lg-center"
              >
                <div class="card-profile-actions py-4 mt-lg-0">
                  <a
                    class="nav-link nav-link-icon"
                    href="https://github.com/luannmoreira"
                    target="_blank"
                    rel="noopener"
                    data-toggle="tooltip"
                    title="Cheque meu GitHub!"
                  >
                    <i class="fa fa-github fa-4x"></i>
                  </a>
                </div>
              </div>
              <div class="col-lg-4 text-lg-right align-self-lg-center">
                  <a
                    class="nav-link nav-link-icon"
                    href="https://gitlab.com/luanncurioso"
                    target="_blank"
                    rel="noopener"
                    data-toggle="tooltip"
                    title="Cheque meu GitLab!"
                  >
                    <i class="fa fa-gitlab fa-4x"></i>
                  </a>
                  </div>
            </div>
            <div class="text-center pt-2">
              <h3>
                Luann Curioso,
                <span class="font-weight-light">20</span>
              </h3>
              <div class="h6 font-weight-300">
                <i class="ni location_pin mr-2"></i>Várzea Grande, Mato Grosso,
                Brasil
              </div>
              <div class="h6 mt-4">
                <i class="ni business_briefcase-24 mr-2"></i>Desenvolvimento
                Front-end, Idealizador do Projeto
              </div>
              <div>
                <i class="ni education_hat mr-2"></i>Centro Universitario de
                Várzea Grande
              </div>
            </div>
            <div class="mt-4 py-5 border-top text-center">
              <div class="px-3">
                <div class="row justify-content-center mt-2">
                  <div class="col-lg-3 order-lg-2">
                    <div class="card-profile-image">
                      <a href="#">
                        <img
                          v-lazy="'img/theme/alvaro.jpeg'"
                          class="rounded-circle"
                        />
                      </a>
                    </div>
                  </div>
                  <div
                    class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center"
                  >
                    <div class="card-profile-actions py-4 mt-lg-0">
                      <div class="pb-4"></div>
                    </div>
                  </div>
                  <div class="col-lg-4 order-lg-1"></div>
                </div>
                <div class="text-center mt-5">
                  <h3>
                    Álvaro Nascimento,
                    <span class="font-weight-light">21</span>
                  </h3>
                  <div class="h6 font-weight-300">
                    <i class="ni location_pin mr-2"></i>Cuiabá, Mato Grosso,
                    Brasil
                  </div>
                  <div class="h6 mt-4">
                    <i class="ni business_briefcase-24 mr-2"></i>Idealizador do
                    Projeto
                  </div>
                  <div>
                    <i class="ni education_hat mr-2"></i>Centro Universitario de
                    Várzea Grande
                  </div>
                </div>
                <div class="mt-1 py-1"></div>
              </div>
            </div>
          </div>
        </card>
      </div>
    </section>
  </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>

#floating { 
    animation-name: floating;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}
 
@keyframes floating {
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 15px); }
    100%   { transform: translate(0, -0px); }   
}
@media only screen and (max-width: 992px) {
  .fa {
    display: none;
  }
}
</style>
