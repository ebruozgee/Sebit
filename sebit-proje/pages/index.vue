<template>
  <b-container>
    <b-row>
      <b-col>
        <div class="text-center mt-2">
          <h1 class="baslik">{{ getInfo.tumblelog.name }}</h1>
          <hr />
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="2">
        <div>date</div>
      </b-col>
      <b-col md="8">
        <b-row>
          <b-col>
            <div>
              <h2 class="post">
                It does not matter how slow you go so long as you do not stop.
              </h2>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <div>
              <b-img
                src="https://picsum.photos/1024/400/?image=41"
                fluid
                alt="Responsive image"
              ></b-img>
            </div>
            <span>{{getInfo.tumblelog.description}}</span>
          </b-col>
        </b-row>
      </b-col>
      <b-col md="2">
        <b-link to="/archive">Archive</b-link>
        <span class="float-right"
          >Toplam Post Sayısı: {{ getInfo.posts_total }}</span
        >
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  computed: {
    getInfo() {
      return this.$store.getters.getInfo;
    },
  },
};
</script>

<style scoped>
.baslik {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 700;
  font-size: 25px;
  color: #35495e;
  letter-spacing: 0.5px;
}

.post {
  font-family: Helvetica, Arial, sans-serif;
  display: block;
  font-weight: 600;
  font-size: 17px;
  color: #23272b;
  letter-spacing: 0.1px;
}
</style>
