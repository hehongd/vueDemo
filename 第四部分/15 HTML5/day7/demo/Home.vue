<template>
  <div>
    <!-- 顶部导航开始 -->
    <mt-header title="学前端，到学问">
      <!-- 没有登录 -->
      <div slot="right" class="shortcut" v-if="!$store.state.isLogined">
        <router-link to="/register">免费注册</router-link>
        <router-link to="/login">登录</router-link>
      </div>
      <!-- 已登录 -->
      <div slot="right" v-else>
          <mt-button @click="logout">
              <img src="../assets/images/logout.png" slot="icon">
          </mt-button>
      </div>
    </mt-header>
    <!-- 顶部导航结束 -->
    <!-- 顶部选项卡开始 -->
    <mt-navbar v-model="active">
      <mt-tab-item
        v-for="(category,index) of categories"
        :id="category.id"
        :key="index"
      >{{category.category_name}}</mt-tab-item>
    </mt-navbar>
    <!-- 顶部选项卡结束 -->
    <!-- 面板区域开始 -->
    <div 
      class="panel"
      infinite-scroll-distance="10"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="busy"      
      :infinite-scroll-immediate-check="true">
      <mt-tab-container v-model="active">
        <mt-tab-container-item
          v-for="(category,index) of categories"
          :key="index"
          :id="category.id">
          <!-- 单一文章信息开始 -->
          <div class="info-item" v-for="(article,index) of articles" :key="index">
            <!-- 标题区域开始 -->
            <div class="info-item-head">
              <router-link :to="`/article/${article.id}`">{{article.subject}}</router-link>
            </div>
            <!-- 标题区域结束 -->
            <!-- 内容区域开始 -->
            <div class="info-item-content">
              <!-- 图像区域开始 -->
              <div class="info-item-img" v-if="article.image != null">
                <router-link :to="`/article/${article.id}`">
                  <img v-lazy="article.image" alt="" />
                </router-link>
              </div>
              <!-- 图像区域结束 -->
              <!-- 内容简介区域开始 -->
              <div class="info-item-des">{{article.description}}</div>
              <!-- 内容简介区域结束 -->
            </div>
            <!-- 内容区域结束 -->
          </div>
          <!-- 单一文章信息结束 -->
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <!-- 面板区域结束 -->
    <!-- 底部选项卡开始 -->
    <mt-tabbar v-model="selectedTab" fixed>
      <mt-tab-item id="home">
        <img src="../assets/images/home_enable.png" alt slot="icon" v-show="selectedTab == 'home'" />
        <img src="../assets/images/home_disable.png" alt slot="icon" v-show="selectedTab != 'home'" />
        首页
      </mt-tab-item>
      <mt-tab-item id="me">
        <img src="../assets/images/me_enable.png" alt slot="icon" v-show="selectedTab == 'me'" />
        <img src="../assets/images/me_disable.png" alt slot="icon" v-show="selectedTab != 'me'" />
        我的
      </mt-tab-item>
    </mt-tabbar>
    <!-- 底部选项卡结束 -->
  </div>
</template>
<style scoped>
.shortcut a {
  color: #fff;
  text-decoration: none;
  padding-right: 5px;
}
.panel {
  margin-top: 10px;
  margin-bottom: 55px;
}
.info-item {
  margin: 10px;
  padding-bottom: 10px;
  border-bottom: 0.5px solid #d3d3d3;
}
.info-item-head a {
  font-weight: 600;
  font-size: 17px;
  color: #1a1a1a;
  line-height: 22px;
  text-decoration: none;
}
.info-item-content {
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 10px;
}
.info-item-img {
  margin-right: 10px;
}
.info-item-img img {
  width: 112px;
  height: 74px;
  border-radius: 5px;
}
.info-item-des {
  font-size: 15px;
  overflow: hidden;
  font-weight: 400;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 24px;
  color: #444;
  height: 72px;
}
</style>
<script>
export default {
  data() {
    return {
      //默认被选定的顶部选项卡
      active: 1,
      //默认被选定的底部选项卡
      selectedTab: "home",
      //存储服务器返回文章分类数据
      categories: [],
      //存储服务器返回的文章数据
      articles: [],
      //存储页码,初始值为1
      page:1,
      //用于标识当前是否正在处理请求
      busy:false,
      //用于存储当前分页的总页数
      pagecount:0
    };
  },
  methods: {
    logout(){
      this.$store.commit('logout_mutations');
    },
    //无限滚动指令需要调用的函数名称
    loadMore(){
      this.page++;
      //判断当前页码是否在总页数范围内
      if(this.page <= this.pagecount){
          this.loadData();
      }
    },
    loadData() {
      //显示加载提示框
      this.$indicator.open('加载中...');
      //标识当前服务器是否正在处理相关的请求，如果在处理过程中
      //此时即使再次滚动到指定范围内也不再触发滚动函数
      this.busy = true;
      this.axios
        .get("/articles", {
          params: {
            //当前分类的ID
            cid: this.active,
            //当前页码
            page:this.page
          }
        })
        .then(res => {
          //接收服务器返回的文章数据
          let data = res.data.results;
          //接收服务器返回的总页数
          this.pagecount = res.data.pagecount;
          //动态加载图像
          data.forEach(item => {
            if (item.image != null) {
              item.image = require("../assets/images/articles/" + item.image);
            }
            this.articles.push(item);
          });
          //关闭加载提示框
          this.$indicator.close();
          //标识服务器已经响应了，如再次滚动了指定范围内可继续触发滚动函数
          this.busy = false;
        });
    }
  },
  watch: {
    active() {
      //清空之间保存的文章数据
      this.articles = [];
      //获取当前分类的文章第一页的数据      
      this.page = 1;
      this.loadData();
    }
  },
  mounted() {
    //获取文章分类数据
    this.axios.get("/categories").then(res => {
      this.categories = res.data.results;
    });

    //获取当前分类的文章数据
    this.loadData();
  }
};
</script>
