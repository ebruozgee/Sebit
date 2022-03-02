<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#"></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/">DEMO</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-form>
          
          </b-nav-form>

          <b-nav-item-dropdown text="Month" right>
            <b-dropdown-item href="#">January</b-dropdown-item>
            <b-dropdown-item href="#">February</b-dropdown-item>
            <b-dropdown-item href="#">March</b-dropdown-item>
            <b-dropdown-item href="#">April</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <template #button-content>
              <em>Post Type</em>
            </template>
            <b-dropdown-item href="#">Text</b-dropdown-item>
            <b-dropdown-item href="#">Photo</b-dropdown-item>
            <b-dropdown-item href="#">Quote</b-dropdown-item>
            <b-dropdown-item href="#">Link</b-dropdown-item>
            <b-dropdown-item href="#">Chat</b-dropdown-item>
            <b-dropdown-item href="#">Audio</b-dropdown-item>
            <b-dropdown-item href="#">Video</b-dropdown-item>
            <b-dropdown-item href="#">Ask</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
