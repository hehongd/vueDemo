<template>
  <main id="main" class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb small bg-transparent">
        <li class="breadcrumb-item">
          <a class="text-dark font-weight-bold small" href="#">首页</a>
        </li>
        <li class="breadcrumb-item">
          <a class="text-dark font-weight-bold small" href="#">学习用品</a>
        </li>
        <li
          class="breadcrumb-item text-dark font-weight-bold small active"
          aria-current="page"
        >
          笔记本电脑
        </li>
      </ol>
    </nav>
    <div class="container mb-5">
      <div class="row pr-3">
        <div id="preview" class="col pr-0">
          <div
            style="width: 352px"
            class="card bg-transparent mr-5 position-absolute"
          >
            <img
              class="card-img-top"
              src="/img/product/md/57e3b072N661cd00d.jpg"
              alt="Card image cap"
            />
            <div id="mask" class="position-absolute d-none"></div>
            <div id="super-mask" class="position-absolute"></div>
            <div
              id="div-lg"
              class="position-absolute d-none"
              style="
                background-image: url(/img/product/lg/57e3b072N661cd00d.jpg);
              "
            ></div>
            <div class="card-body p-0 text-center">
              <img
                src="/img/product_detail/hover-prev.png"
                class="btn float-left btn-light border-0 p-1 pt-4 pb-4 disabled"
              />
              <div class="d-inline-block pt-2 mx-0 m-auto">
                <!-- <ul class="list-unstyled mb-0"> -->
                <ul class="list-unstyled mb-0" style="width: 434px">
                  <!-- <li class="float-left p-1">
                      <img src="/img/product/sm/57e3b072N661cd00d.jpg" data-md="/img/product/md/57e3b072N661cd00d.jpg" data-lg="/img/product/lg/57e3b072N661cd00d.jpg">
                    </li> -->
                </ul>
              </div>
              <img
                src="/img/product_detail/hover-next.png"
                class="btn float-right btn-light border-0 p-1 pt-4 pb-4"
              />
            </div>
          </div>
        </div>
        <div id="details" class="col pl-0">
          <h6 class="font-weight-bold">{{product.title}}</h6>
          <h6>
            <a class="small text-dark font-weight-bold" href="javascript:;">{{product.subtitle}}</a>
          </h6>
          <div class="alert alert-secondary small" role="alert">
            <div>
              <span>学员售价：</span>
              <h2 class="d-inline text-primary font-weight-bold">¥{{product.price.toFixed(2)}}</h2>
            </div>
            <div>
              <span>服务承诺：</span>
              <span>{{product.promise}}</span>
            </div>
          </div>
          <!-- 客服 -->
          <p class="mb-1">
            <span class="small">客服：</span>
            <span class="small">联系客服</span>
            <img class="mb-3" src="/img/product_detail/kefuf.gif" />
          </p>
          <!-- 规格 -->
          <div>
            <div class="float-left small">规格：</div>
            <div class="float-left w-75">
              <router-link v-for="sp,i of specs" :key="i" class="btn btn-sm btn-outline-secondary" :class="{ active: lid==sp.lid }" :to="`/details/${sp.lid}`">{{sp.spec}}</router-link>
            </div>
            <div class="clearfix"></div>
          </div>
          <!-- 数量 -->
          <div class="mt-2">
            <div class="float-left small">数量：</div>
            <div class="input-group mb-3 w-25">
              <div class="input-group-prepend">
                <button class="btn btn-outline-secondary p-1" type="button">
                  -
                </button>
              </div>
              <input
                type="text"
                value="1"
                class="form-control"
                placeholder=""
                aria-label=""
                aria-describedby="basic-addon1"
              />
              <div class="input-group-append">
                <button class="btn btn-outline-secondary p-1" type="button">
                  +
                </button>
              </div>
            </div>
            <div class="clearfix"></div>
          </div>
          <!-- 购买部分 -->
          <div>
            <a class="btn pt-3 pb-2 pl-5 pr-5" href="javascript:;"
              ><h5>立即购买</h5></a
            >
            <a class="btn btn-primary pt-3" href="javascript:;">
              <h5>
                <img src="/img/product_detail/product_detail_img7.png" alt="" />
                加入购物车
              </h5>
            </a>
            <a class="btn btn-primary pt-1 pb-1 collection" href="javascript:;">
              <img src="/img/product_detail/product_detail_img6.png" />
              <br />
              收藏
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="container mb-5">
      <h4 class="d-inline-block ml-3">为你推荐</h4>
      <h6 class="d-inline-block bg-dark text-white ml-2">大家都在看</h6>
      <div id="recommend" class="border pl-3">
        <ul class="list-unstyled" style="width: 1100px; margin-left: -220px">
          <li class="float-left">
            <div class="card mb-1 p-4 border-0 bg-transparent box-shadow">
              <img
                class="card-img-top"
                data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                alt="Thumbnail [100%x225]"
                src="/img/product_detail/product_detail_1.png"
                data-holder-rendered="true"
              />
              <div class="card-body p-0">
                <p class="card-text text-center small">
                  ThinkPad New S2 (20GUA00QCD)13.3英寸超霸
                </p>
              </div>
            </div>
          </li>
          <li class="float-left">
            <div class="card mb-1 p-4 border-0 bg-transparent box-shadow">
              <img
                class="card-img-top"
                data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                alt="Thumbnail [100%x225]"
                src="/img/product_detail/product_detail_2.png"
                data-holder-rendered="true"
              />
              <div class="card-body p-0">
                <p class="card-text text-center small">
                  戴尔 DELL燃7000 R1605S 超霸
                </p>
              </div>
            </div>
          </li>
          <li class="float-left">
            <div class="card mb-1 p-4 border-0 bg-transparent box-shadow">
              <img
                class="card-img-top"
                data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                alt="Thumbnail [100%x225]"
                src="/img/product_detail/product_detail_3.png"
                data-holder-rendered="true"
              />
              <div class="card-body p-0">
                <p class="card-text text-center small">
                  戴尔(DELL)魔方15MF Pro-R2505TSS灵
                </p>
              </div>
            </div>
          </li>
          <li class="float-left">
            <div class="card mb-1 p-4 border-0 bg-transparent box-shadow">
              <img
                class="card-img-top"
                data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                alt="Thumbnail [100%x225]"
                src="/img/product_detail/product_detail_4.png"
                data-holder-rendered="true"
              />
              <div class="card-body p-0">
                <p class="card-text text-center small">
                  联想(Lenovo) YOGA900 (YOGA4 PRO)多彩版
                </p>
              </div>
            </div>
          </li>
          <li class="float-left">
            <div class="card mb-1 p-4 border-0 bg-transparent box-shadow">
              <img
                class="card-img-top"
                data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                alt="Thumbnail [100%x225]"
                src="/img/product_detail/product_detail_1.png"
                data-holder-rendered="true"
              />
              <div class="card-body p-0">
                <p class="card-text text-center small">
                  ThinkPad New S2 (20GUA00QCD)13.3英寸超霸
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <nav class="navbar flex-md-nowrap p-0 ml-3">
      <form class="form-inline pl-2">
        <button
          class="btn bg-transparent rounded-0 pt-3 pb-2 active"
          type="button"
        >
          <h5>商品详情</h5>
        </button>
        <button class="btn bg-transparent rounded-0 pt-3 pb-2" type="button">
          <h5>商品评价</h5>
        </button>
      </form>
      <ul class="navbar-nav">
        <li class="nav-item text-nowrap">
          <a class="btn btn-primary p-3 border-bottom" href="javascript:;">
            <h5>
              <img src="/img/product_detail/product_detail_img7.png" alt="" />
              加入购物车
            </h5>
          </a>
        </li>
      </ul>
    </nav>
    <div id="params" class="container">
      <div class="row mr-1">
        <div class="col-md-10 pt-5">
          <a name="规格参数"></a>
          <h6 class="d-inline-block ml-3">
            规格参数
            <img src="/img/product_detail/product_detail_icon_1.png" alt="" />
          </h6>
          <div class="pl-3">
            <ul class="list-unstyled">
              <li class="float-left mb-2">
                <a class="text-muted small" href="#"
                  >商品名称：AppleMacBook Air</a
                >
              </li>
              <li class="float-left mb-2">
                <a class="text-muted small" href="#">系统：MacOS</a>
              </li>
              <li class="float-left mb-2">
                <a class="text-muted small" href="#">内存容量：8G</a>
              </li>
              <li class="float-left mb-2">
                <a class="text-muted small" href="#">分辨率：1920*1080</a>
              </li>
              <li class="float-left mb-2">
                <a class="text-muted small" href="#">显卡型号：集成显卡</a>
              </li>
              <li class="float-left mb-2">
                <a class="text-muted small" href="#"
                  >处理器：Intel i5低功耗版</a
                >
              </li>
              <li class="float-left mb-2">
                <a class="text-muted small" href="#">显存容量：其它</a>
              </li>
              <li class="float-left mb-2">
                <a class="text-muted small" href="#">分类：轻薄本</a>
              </li>
              <li class="float-left mb-2">
                <a class="text-muted small" href="#">硬盘容量:128G固态</a>
              </li>
            </ul>
          </div>
          <a name="商品介绍"></a>
          <h6 class="d-inline-block mt-4 mb-3 ml-3">
            商品介绍
            <img src="/img/product_detail/product_detail_icon_4.png" alt="" />
          </h6>
          <div>
            <div>
              <div>
                <img alt="" src="/img/product/detail/57b15612N81dc489d.jpg" />
              </div>
            </div>
            <div>
              <div>
                <img alt="" src="/img/product/detail/57b15616N1e285f09.jpg" />
              </div>
            </div>
            <div>
              <div class="pl-3 small">
                技术规格请前往 www.apple.com/cn/macbook-air/specs.html
                查看完整内容。
              </div>
            </div>
          </div>
          <a name="售后保障"></a>
          <h6 class="d-inline-block mt-4 mb-3 ml-3">
            售后保障
            <img src="/img/product_detail/product_detail_icon_3.png" alt="" />
          </h6>
          <div class="pl-3">
            <div>
              <p class="text-primary font-weight-bold">
                <img
                  src="/img/product_detail/product_detail_img16.png"
                  alt=""
                />
                正品保障
              </p>
              <p class="small">
                达内学子商城向您保证所售商品均为正品行货，达内自营商品开具机打发票或电子发票。
              </p>
              <p class="text-primary font-weight-bold">
                <img
                  src="/img/product_detail/product_detail_img16.png"
                  alt=""
                />
                全国联保
              </p>
              <p class="small">
                凭质保证书及达内商城发票，可享受全国联保服务，与您亲临商场选购的商品享受相同的质量保证。达内商城还为您提供具有竞争力的商品价格和运费政策，请您放心购买！
                注：因厂家会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本司不能确保客户收到的货物与商城图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若本商城没有及时更新，请大家谅解！
              </p>
            </div>
          </div>
          <a name="包装清单"></a>
          <h6 class="d-inline-block mt-4 mb-3 ml-3">
            包装清单
            <img src="/img/product_detail/product_detail_icon_2.png" alt="" />
          </h6>
          <div class="pl-3">
            <p class="small">
              笔记本 x1 适配器 x1 电源线 x1 电池 x1 说明书（电子版）x1
              备注：笔记本电脑的背面只会标注此电脑的系列，例如： XPS 13-9360
              ，如果您需要核实此电脑的具体配置型号是否与达内页面相符，可电话咨询达内厂商：800-858-2969
            </p>
          </div>
        </div>
        <div class="col-md-2 mb-4 pt-5 pl-2">
          <a class="btn p-3 pl-4 pr-4 mb-2" href="#规格参数">
            <h5 class="text-dark mb-0">
              <img
                src="/img/product_detail/product_detail_icon_g_1.png"
                alt=""
              />
              规格参数
            </h5>
          </a>
          <a class="btn p-3 pl-4 pr-4 mb-2" href="#商品介绍">
            <h5 class="text-dark mb-0k">
              <img
                src="/img/product_detail/product_detail_icon_t_1.png"
                alt=""
              />
              商品介绍
            </h5>
          </a>
          <a class="btn p-3 pl-4 pr-4 mb-2" href="#售后保障">
            <h5 class="text-dark mb-0">
              <img
                src="/img/product_detail/product_detail_icon_d_1.png"
                alt=""
              />
              售后保障
            </h5>
          </a>
          <a class="btn p-3 pl-4 pr-4 mb-2" href="#包装清单">
            <h5 class="text-dark mb-0">
              <img
                src="/img/product_detail/product_detail_icon_bao_1.png"
                alt=""
              />
              包装清单
            </h5>
          </a>
          <a class="btn p-3 pl-4 pr-4 mb-2" href="#header">
            <h5 class="text-dark mb-0">
              <img
                src="/img/product_detail/product_detail_icon_up_1.png"
                alt=""
              />
              回到顶部
            </h5>
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  //要接地址栏中的参数值: 
  props:["lid"],
  //因为界面上需要一个商品对象和两个数组(规格列表和图片列表)
  data(){
    return {
      product:{ price:0 },//商品对象
      pics:[],//图片列表
      specs:[]//规格参数对象列表
    }
  },
  methods:{
    loadPage(){
    //窗口    滚动  到 水平的滚动位置, 垂直的滚动位置
      window.scrollTo(     0       ,       0      );
      //复习前天的axios
      this.axios.get("/details",{
      //       参数名     props中的变量
        params:{ lid: this.lid }
      }).then(result=>{
        console.log(result.data);
        this.product=result.data.product;
        this.pics=result.data.pics;
        this.specs=result.data.specs;
      })
    }
  },
  mounted(){
    this.loadPage()
  },
  watch:{
    //本例中:希望地址栏参数值一变，自动自行一次axios请求
    //地址栏的参数值会自动交给props中的lid
    //所以应该监控props中的lid
    lid(){
      this.loadPage();
    }
  }
}
</script>

<style>
/*定制规格参数按钮的颜色*/
#details > div:nth-child(5) > div .btn-outline-secondary:hover {
  color: #0069d9;
  background-color: #f5f5f5;
  border-color: #e4393c;
}
#details > div:nth-child(5) > div .btn-outline-secondary.active {
  color: #6c757d;
  background-color: #f5f5f5;
  border-color: #e4393c;
  border-width: 2px;
}
/*定制数量按钮的颜色*/
#details > div:nth-child(6) .btn-outline-secondary {
  width: 30px;
}
#details > div:nth-child(6) .btn-outline-secondary:hover,
#details > div:nth-child(6) .btn-outline-secondary:active,
#details > div:nth-child(6) .btn-outline-secondary:focus {
  color: #6c757d;
  background-color: #f5f5f5;
  border-color: #0069d9;
  box-shadow: none;
}
/*定制立即购买按钮背景色*/
#details > div:nth-child(7) > a:first-child {
  background: linear-gradient(to bottom, #f0f0f0, #e0e0e0);
}

/*定制放大镜样式*/
#preview > .card > .card-body > div {
  width: 248px;
  overflow: hidden;
}
#preview > .card > .card-body > div > ul {
  transition: margin-left 0.5s linear;
}
#preview > .card > .card-body > div > ul > li {
  width: 62px;
  height: 62px;
}
#preview > .card > .card-body > div > ul img {
  width: 52px;
  height: 52px;
}
#preview > .card > .card-body > div > ul img:hover {
  border: 1px solid #e4393c;
}
#mask {
  width: 176px;
  height: 176px;
  background-color: #ffa;
  opacity: 0.5;
}
#super-mask {
  width: 352px;
  height: 352px;
}
#div-lg {
  width: 400px;
  height: 400px;
  left: 354px;
  z-index: 1000;
  border: 1px solid rgba(0, 0, 0, 0.125);
}
/*定制为你推荐部分的样式*/
#recommend {
  width: 915px;
  border-color: 1px solid rgba(0, 0, 0, 0.125);
  overflow: hidden;
}
#recommend > ul > li {
  width: 220px;
}
/*订制商品详情部分的样式*/
#main > nav.navbar {
  background: linear-gradient(to bottom, #f0f0f0, #e0e0e0);
  box-shadow: 0px 3px 6px #ccc;
}
#main > nav.navbar .active {
  margin-top: 2px;
  border-bottom: 3px solid #0069d9;
}
#params .col-md-2 > .btn {
  background: linear-gradient(to bottom, #f0f0f0, #e0e0e0);
  box-shadow: 0px 3px 4px #ccc;
}
#params .col-md-10 > div > ul > li {
  width: 237px;
}
</style>