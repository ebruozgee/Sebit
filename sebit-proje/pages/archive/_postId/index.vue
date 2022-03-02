<template>
  <div>
     <b-row>
      <b-col>
        <div class="baslik text-center mt-2">
          <h1>DEMO</h1>
          <hr />
        </div>
      </b-col>
    </b-row>
    <b-row>
        <b-col md="2">
          <div>{{getInfoPost.date}}</div>
        </b-col>
        <b-col md="8">
          <b-row>
            <b-col>
              <div>
                <h2 class="post">
                  Title
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
            </b-col>
          </b-row>
        </b-col>
      <b-col md="2">
        <b-link to="/archive">Archive</b-link>
      </b-col>
    </b-row>
    <b-row v-for="item in 10" :key="item" class="mt-3">
        <b-col md="2"></b-col>
        <b-col md="8">
    <b-list-group style="max-width: 940px;">
      <b-list-group-item class="d-flex align-items-center">
        <b-avatar :src="getInfoPost.tumblelog.avatar_url_128" class="mr-3"></b-avatar>
        <span class="mr-auto">Name <span>liked this.</span></span>
      </b-list-group-item>
    </b-list-group></b-col>
    <b-col md="2"> </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
computed:{
    getId(){
        return this.$route.params.postId
    },
    getInfoPost(){
        var info = {}
        this.$store.getters.getInfo.posts.forEach(i => {
            if(i.id == this.getId){
                info={
                    id: i.id,
                   date: i.date,
                    tumblelog:i.tumblelog,
                   // quoteText:i.quote-text,

                }
            }
        })

        return info
    }
}
}
</script>

<style>

</style>