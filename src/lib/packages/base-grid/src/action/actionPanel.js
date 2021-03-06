//pagination modules
export default {
  name: 'action-panel',
  data() {
    return {
      totalKey: 'total'
    }
  },
  props: {
    gridID: {type: String},
    //搜索条件 searchConditions
    searchConditions: {
      type: Object, default() {
        return {
          pageNum: 1, //当前页数
          pageSize: 10, //每页显示条目个数
        }
      }
    },
    total: {type: Number},//总条目数
    layout: {type: String, default: "total, sizes, prev, pager, next, jumper"},//组件布局，子组件名用逗号分隔
    pagerCount: {type: Number, default: 7},//页码按钮的数量，当总页数超过该值时会折叠
    //每页显示个数选择器的选项设置
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 50, 100];
      }
    }
  },
  computed: {
    //pagination total information
    panelDescribe() {
      const page = Math.ceil(this.total / this.searchConditions.pageSize);
      return "共" + this.total + "条" + "/" + page + "页";
    },
    //judge total modules in panel is show or not
    showTotal() {
      return this.layout.indexOf(this.totalKey) !== -1;
    },

  },
  render(h) {
    return (
      <div class={"panel-page clear"} id={this.gridID + '-panel'}>
        {
          this.showTotal ? <span class="panel-pre_text fl">{this.panelDescribe}</span> : null
        }
        {
          <el-pagination class="fl" current-page={this.searchConditions.pageNum} page-sizes={this.pageSizes} page-size={this.searchConditions.pageSize}
                         total={this.total} layout={this.layout} pager-count={this.pagerCount}
                         on-size-change={this.sizeChange} on-current-change={this.currentChange}>
          </el-pagination>
        }
        {/*{*/}
        {/*<el-button class="fl panel-po_btn" size="small">确定</el-button>*/}
        {/*}*/}
      </div>
    )
  },
  created() {
  },
  mounted() {

  },
  methods: {
    //page-size change
    sizeChange(val) {
      this.searchConditions.pageSize = val;
      this.$emit("refreshGrid");
    },
    /**
     * current-page change
     * @param val
     */
    currentChange(val) {
      this.searchConditions.pageNum = val;
      this.$emit("refreshGrid");
    },
  },
};

