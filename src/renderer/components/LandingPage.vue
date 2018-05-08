<template>
  <div id="wrapper">
    <main>
      <div class='title'>爬虫程序</div>
      <div class='content'>
        <el-input width='200px' v-model='name'>
          <template slot="append">
            <el-button @click='search'>搜索</el-button>
          </template>
        </el-input>
        <div class='list'>
          <ul>

            <li class='list-item' v-for='(item,index) in content' :key='index'>
              <el-card>
               
                <img class='item-img' :src='"http://"+item.img'>
                <div class='list-content'>
                  <div class='item-tile'>
                    {{item.title}}
                  </div>
                  <div class='item-btn' v-if='item.type == "single"'>
                    <el-button @click='movie(item.url)'>立即播放</el-button>
                  </div>
                  <div class='btn-list'>
                    <div>
                      <el-button @click='movie(child.url)' size="mini" class='list-btn' v-for='(child,index) in item.list' :key='index'>
                        {{child.title}}
                      </el-button>
                    </div>
                  </div>
                </div>
              </el-card>
            </li>
          </ul>
        </div>

      </div>
      

    </main>
  </div>
</template>

<script>
const { shell } = require("electron");
const ipcr = require("electron").ipcRenderer;
export default {
    name: "landing-page",
    methods: {
        search() {
            ipcr.send("searchMovie", this.name);
        },
        movie(data){
          this.$store.dispatch("setMovie",data);

          this.$router.push('/movie')
        }
    },
    mounted() {
        ipcr.on("movies", (event, arg) => {
            console.log(arg);
            this.content = arg;
        });
    },
    data() {
        return {
            name: "",
            content: ""
        };
    }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");
.content,
.title {
    width: 100%;
}
.title {
    font-size: 16px;
    line-height: 25px;
    text-align: center;
}
ul li {
    float: left;
    width: 100%;
    list-style: none;
    margin: 10px 0;
}
.list-content {
    width: 380px;
    float: left;
}
.item-img {
    width: 120px;
    float: left;
    height: 120px;
}
.item-btn,
.list-btn {
    float: left;
}
.btn-list {
    margin-left: 20px;
}
.item-tile {
    float: left;
    width: 100%;
    margin-bottom: 40px;
    margin-left: 20px;
}
.btn-list > div {
    width: 200px;
    font-size: 12px;
}
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: "Source Sans Pro", sans-serif;
}

#wrapper {
    height: 100vh;
    padding: 10px 40px;
    width: 100vw;
}

#logo {
    height: auto;
    margin-bottom: 20px;
    width: 420px;
}
</style>
