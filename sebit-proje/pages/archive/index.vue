<template>
  <b-container>
    <Navbar />

    <b-row>
      <b-col>
        <p>Novamber 2006</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="mt-2" md="2" v-for="item in getInfo.posts" :key="item.id">
        <b-link  :href="'/archive/'+item.id" target="_blank">
          <div
            style="width: 160px; height: 130px; background-color: #000000"
            class="position-relative"
          >
            <b-img
              v-bind="mainProps"
              class="position-absolute cover"
              src="https://picsum.photos/1024/400/?image=41"
              alt="Image 1"
              style="opacity: 0.3"
            ></b-img>
            <div
              class="position-absolute d-flex flex-row"
              style="width: 240px; top: 20px; left: 15px"
            >
              <div class="d-flex flex-column">
                <b-link>
                  <span class="name ml-1">{{ item.date }}</span>
                </b-link>
                <div v-for="i in item.tags" :key="i" class="mt-3">
                  <span class="subname mt-2">#{{ i }}</span>
                </div>
              </div>
            </div>
          </div>
        </b-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      mainProps: { width: 160, height: 130, class: "m1" },
      post: "",
    };
  },
  computed: {
    getInfo() {
      return this.$store.getters.getInfo;
    }
  },
};
</script>

<style>
.name {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 700;
  font-size: 13px;
  color: #fff;
  letter-spacing: 1px;
  opacity: 1;
}
.subname {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 10px;
  color: #fff;
  letter-spacing:0px;
  opacity: 1;
}
.cover {
  object-fit: cover;
}
</style>
