<template>
  <div class="dashboard-container">
    <div id="pillar-chart"></div>
    <div id="folding-line-chart"></div>
    <div id="cake-chart"></div>
    <div id="radar-chart"></div>
    <div id="dash-board-chart"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  data() {
    return {
      pillarChartConfig: { // 柱状图 配置项
        title: { // 标题组件
          text: '柱状图' // 主标题
        },
        xAxis: { // 直角坐标系中的 x 轴
          type: 'category', // category：类目轴
          data: ['小明', '小红', '小王'] // x 轴数据
        },
        yAxis: { // 直角坐标系中的 y 轴
          type: 'value' // value：数值轴
        },
        series: [ // 系列列表。每个系列通过 type 决定图表类型
          {
            name: '语文',
            type: 'bar', // bar：柱状图  line：折线图  饼图：pie
            markPoint: { // 标记效果
              data: [
                {
                  type: 'max', name: '最大值'
                },
                {
                  type: 'min', name: '最小值'
                }
              ]
            },
            markLine: {
              data: [
                {
                  type: 'average', name: '平均值'
                }
              ]
            },
            // 显示效果
            label: {
              show: true, // 显示类目的数值
              position: 'top' // 类目数值的位置
            },
            barWidth: '50%', // 柱的宽度
            data: [70, 92, 87] // y 轴数据

          }
        ]
      },
      foldingLineChartConfig: { // 折线图 配置项
        title: { // 标题组件
          text: '折线图' // 主标题
        },
        xAxis: {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          boundaryGap: false // 紧挨边缘
        },
        yAxis: {
          type: 'value',
          scale: true // 脱离 0 值比例（适合值差距不大的情况下使用，从最小的值开始，最大的值结束）
        },
        series: [
          {
            name: '康师傅',
            type: 'line', // 图标类型：折线图
            data: [3005, 3003, 3001, 3002, 3009, 3007, 3003, 3001, 3005, 3004, 3001, 3009], // 值差距不大,
            stack: 'all', // 堆叠图
            markPoint: {
              data: [
                {
                  type: 'max' // 最大值
                },
                {
                  type: 'min' // 最小值
                }
              ]
            },
            markLine: {
              data: [
                {
                  type: 'average' // 平均值
                }
              ]
            },
            markArea: { // 标注区间
              data: [
                [
                  {
                    xAxis: '1月' // 开始值
                  },
                  {
                    xAxis: '2月' // 结束值
                  }
                ],
                [
                  {
                    xAxis: '7月' // 开始值
                  },
                  {
                    xAxis: '8月' // 结束值
                  }
                ]
              ]
            },
            smooth: true, // 线条风格：true（平滑）
            lineStyle: {
              color: 'green', // 线条颜色
              type: 'dashed' // 线条类型：dotted（虚线）solid（点线）
            },
            areaStyle: { // 填充
              color: 'pink' // 填充颜色
            }
          },
          {
            type: 'line',
            data: [2000, 3800, 1900, 500, 900, 1700, 2400, 300, 1900, 1500, 1800, 200],
            stack: 'all', // 堆叠图（基于第一个系列的基础上，进行累加）
            areaStyle: {}
          }
        ]
      },
      cakeChartConfig: { // 饼图 配置项
        title: { // 标题组件
          text: '饼图' // 主标题
        },
        series: [
          {
            type: 'pie', // 饼图
            data: [ // 数据格式：数组中的成员是对象类型，且要包含 name 和 value 属性
              {
                name: '淘宝',
                value: 11231
              },
              {
                name: '京东',
                value: 22673
              },
              {
                name: '唯品会',
                value: 6123
              },
              {
                name: '1号店',
                value: 8989
              },
              {
                name: '聚美优品',
                value: 6700
              }
            ],
            label: {
              formatter: function (arg) { // 格式文本
                return arg.name + '平台' + arg.value + '元\n' + arg.percent + '%'
              }
            },
            radius: 100, // 饼图半径（饼图大小)
            // radius: 20%,  // 饼图半径（饼图大小)：百分比（参照宽度和高度较小的一边的一半来进行百分比设置）
            // radius: ['50%', '75%']  // 饼图半径（饼图大小)：[内圆半径, 外圆半径]
            roseType: 'radius', // 南丁格尔图（类目的半径取决于占比）
            selectedMode: 'single', // 选中效果：single（当前选中的类目分离）multiple（选中的类目分离）
            selectedOffset: 30 // 选中分离距离
          }
        ]
      },
      radarChartConfig: { // 雷达图 配置项
        title: { // 标题组件
          text: '雷达图' // 主标题
        },
        radar: { // 各个维度的最大值
          indicator: [{
            name: '易用性',
            max: 100
          },
          {
            name: '功能',
            max: 100
          },
          {
            name: '拍照',
            max: 100
          },
          {
            name: '跑分',
            max: 100
          },
          {
            name: '续航',
            max: 100
          }],
          shape: 'polygon' // 配置雷达图最外层的图形：polygon（多边形）（默认值）circle （圆形）
        },
        series: [
          {
            type: 'radar', // 图标类型：雷达图
            label: { // 设置标签的样式
              show: true // 显示数值
            },
            areaStyle: {}, // 填充
            data: [ // （3）配置数据
              {
                name: '华为手机1',
                value: [80, 90, 80, 82, 90]
              },
              {
                name: '中兴手机1',
                value: [70, 82, 75, 70, 78]
              }
            ]
          }
        ]
      },
      dashBoardChartConfig: { // 仪表盘 配置项
        title: { // 标题组件
          text: '仪表盘' // 主标题
        },
        series: [
          {
            type: 'gauge', // 图表类型：仪表盘
            data: [ // 每一个对象就代表一个指针
              {
                value: 88,
                itemStyle: { // 指针的样式
                  color: 'red' // 指针的颜色
                }
              }
            ],
            min: 50, // 仪表盘数值范围
            max: 100
          }
        ]
      }
    }
  },
  mounted() {
    this.pillarChart()
    this.foldingLineChart()
    this.cakeChart()
    this.radarChart()
    this.dashBoardChart()
  },
  methods: {
    pillarChart() { // 柱状图
      const echarts = this.$echarts.init(document.getElementById('pillar-chart')) // 初始化 eacharts 实例
      echarts.setOption(this.pillarChartConfig) // 将图表配置项设置给 echarts 实例
    },
    foldingLineChart() { // 折线图
      const echarts = this.$echarts.init(document.getElementById('folding-line-chart')) // 初始化 eacharts 实例
      echarts.setOption(this.foldingLineChartConfig) // 将图表配置项设置给 echarts 实例
    },
    cakeChart() { //  饼图
      const echarts = this.$echarts.init(document.getElementById('cake-chart')) // 初始化 eacharts 实例
      echarts.setOption(this.cakeChartConfig) // 将图表配置项设置给 echarts 实例
    },
    radarChart() { // 雷达图
      const echarts = this.$echarts.init(document.getElementById('radar-chart')) // 初始化 eacharts 实例

      echarts.setOption(this.radarChartConfig) // 将图表配置项设置给 echarts 实例
    },
    dashBoardChart() { // 仪表盘
      const echarts = this.$echarts.init(document.getElementById('dash-board-chart')) // 初始化 eacharts 实例
      echarts.setOption(this.dashBoardChartConfig) // 将图表配置项设置给 echarts 实例
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-container {
  display: flex;
  flex-wrap: wrap;
  > div {
    height: 400px;
    width: calc(100% / 3);  // 这里的10px = (分布个数3-1)*间隙5px, 可以根据实际的分布个数和间隙区调整
    min-width: calc(100% / 3); // 加入这两个后每个item的宽度就生效了
    max-width: calc(100% / 3);
  }
}
</style>
