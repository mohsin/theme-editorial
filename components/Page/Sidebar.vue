<script setup lang="ts">
const isToggled = ref(false)
const toggleSidebar = () => {
  isToggled.value = !isToggled.value
}
</script>

<template>
  <div id="sidebar" class="max-lg:shadow-none" :class="isToggled ? 'lg:ml-[-24em]' : 'ml-[-24em] lg:ml-0'">
    <div class="inner">

      <!-- Search -->
        <section id="search" class="alt">
          <form method="post" action="#">
            <input type="text" name="query" id="query" placeholder="Search" />
          </form>
        </section>

      <PageHeader />

      <!-- Section -->
        <section>
          <header class="major">
            <h2>Ante interdum</h2>
          </header>
          <div class="mini-posts">
            <article>
              <a href="#" class="image"><img src="~/assets/images/pic07.jpg" alt="" /></a>
              <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
            </article>
            <article>
              <a href="#" class="image"><img src="~/assets/images/pic08.jpg" alt="" /></a>
              <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
            </article>
            <article>
              <a href="#" class="image"><img src="~/assets/images/pic09.jpg" alt="" /></a>
              <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
            </article>
          </div>
          <ul class="actions">
            <li><a href="#" class="button">More</a></li>
          </ul>
        </section>

      <!-- Section -->
        <section>
          <header class="major">
            <h2>Get in touch</h2>
          </header>
          <p>Sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin sed aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
          <ul class="contact">
            <li class="icon solid fa-envelope"><a href="#">information@untitled.tld</a></li>
            <li class="icon solid fa-phone">(000) 000-0000</li>
            <li class="icon solid fa-home">1234 Somewhere Road #8254<br />
            Nashville, TN 00000-0000</li>
          </ul>
        </section>

      <!-- Footer -->
        <footer id="footer">
          <p class="copyright">&copy; Untitled. All rights reserved. Demo Images: <a href="https://unsplash.com">Unsplash</a>. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
        </footer>

    </div>
    <a @click="toggleSidebar" href="#sidebar" class="toggle">Toggle</a>
  </div>
</template>