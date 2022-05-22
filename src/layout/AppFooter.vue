<template>
  <footer class="footer has-cards">
    <div class="container">
      <div class="row align-items-center justify-content-md-between">
        <div class="col-md-6">
          <div class="copyright">
            &copy; {{ year }}
            <a href="/" target="_blank" rel="noopener">DevCurioso</a>
          </div>
        </div>
        <div class="col-md-6">
          <ul>
            <li class="nav-item">
              <a href="#/profile" class="nav-link" rel="noopener"
                >Sobre o Projeto!</a
              >
            </li>
            <li class="nav-item">
              <a
                href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"
                class="nav-link"
                target="_blank"
                rel="noopener"
                >Licença MIT - Argon</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "app-footer",
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
<style></style>
