<template>
<div class="home">
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="医药公司" name="first">
            <div class="cmTop">
                <div class="tTop">
                    <h2>中泽医药（湖北）有限公司</h2>
                    <p>萎缩性胃炎是胃腺癌发生的重要危险因素，胃黏膜萎缩被认为是癌变的土壤。当萎缩性胃炎合并肠化和异型增生时称之为胃癌前病变，癌变风险明显增加。有报道慢性萎缩性胃炎每年的癌变率为 0.5%～1%，伴有异型增生时癌变率更高。但绝大多数慢性萎缩性胃炎病情稳定，不会进展为胃癌。</p>
                </div>
                <div class="ddown">
                    <ul>
                        <li>
                            <i class="el-icon-phone-outline"></i>
                            <p>销售部</p>
                        </li>
                        <li>
                            <i class="el-icon-mobile-phone"></i>
                            <p>采购部</p>
                        </li>
                        <li>
                            <i class="el-icon-tickets"></i>
                            <p>信息表</p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <i class="el-icon-goods"></i>
                            <p>热产品</p>
                        </li>
                        <li>
                            <i class="el-icon-service"></i>
                            <p>速客服</p>
                        </li>
                        <li>
                            <i class="el-icon-news"></i>
                            <p>新消息</p>
                        </li>
                    </ul>
                </div>
            </div>
        </el-tab-pane>
        <el-tab-pane label="连锁药店" name="second">药店</el-tab-pane>
        <el-tab-pane label="单体药房" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="我的" name="fourth">an</el-tab-pane>
    </el-tabs>
</div>
</template>

<script>

export default {
  data() {
        return {
        activeName: 'first'
        };
    },
    methods: {
        handleClick(tab, event) {
        console.log(tab, event);
        }
    }
}
</script>

<style scoped lang="scss">
.el-tabs.el-tabs--top{
    margin: 7px;
    padding: 7px;
    border-radius: 4px;
}
.cmTop{
    background: #fff;
    border-radius: 4px;
    overflow: hidden;
    .tTop{
        background:#28b7a3;
        color:#fff;
        padding: 15px;
        h2{
            margin: 7px 0;
            font-size: 16px;
        }
        p{
            font-size: 13px;
        }
    }
   
}

.ddown{
    padding: 15px;
    ul{
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        li{
          padding: 10px 0;  
          text-align: center;
          i{
              font-size: 25px;
              color: #606266;
          }
          p{
              margin: 5px;
              font-size: 13px;
          }
        }
    }
}

</style>


