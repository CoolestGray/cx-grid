export default [
  {
    "resourcecolumnName": "序号",//label
    "resourcecolumnNameEn": "index",//model-key
    "resourcecolumnCode": "index",
    "resourcecolumnXtype": "text",//筛选列 类型
    "resourcecolumnWidth": "80",//列的宽度
    "resourcecolumnOrder": "1",//列的序号
    "resourcecolumnHidden": "0", //是否隐藏
    "fixed": 'left',//是否为固定列（false left right 三选一)
    "eidtConfig": null,//是否为编辑单元格列 （如若是，则补充对应信息，否则为null)
  },
  {
    "resourcecolumnName": "项目名称",//label
    "resourcecolumnNameEn": "taskName",//model-key
    "resourcecolumnCode": "taskName",
    "resourcecolumnXtype": "text",//筛选列 类型
    "resourcecolumnWidth": "100",//列的宽度
    "resourcecolumnOrder": "2",//列的序号
    "resourcecolumnHidden": "0", //是否隐藏
    "fixed": false,//是否为固定列（false left right 三选一)
    "eidtConfig": null,//是否为编辑单元格列 （如若是，则补充对应信息，否则为null)
  },
  {
    "resourcecolumnName": "成立日期",//label
    "resourcecolumnNameEn": "date",//model-key
    "resourcecolumnCode": "date",
    "resourcecolumnXtype": "text",//筛选列 类型
    "resourcecolumnWidth": "150",//列的宽度
    "resourcecolumnOrder": "3",//列的序号
    "resourcecolumnHidden": "0", //是否隐藏
    "fixed": false,//是否为固定列（false left right 三选一)
    "eidtConfig": {
      "switchType": true,
      "type": "date",
      "decimal": 2,
      "disabled": false,
      "maxlength": null,
      "max": 100,
      "min": 0,
      "placeHolder": null,
      "require": true,
      "validateRule": null
    },
  },
  {
    "resourcecolumnName": "总金额",//label
    "resourcecolumnNameEn": "sum",//model-key
    "resourcecolumnCode": "sum",
    "resourcecolumnXtype": "number",//筛选列 类型
    "resourcecolumnWidth": "100",//列的宽度
    "resourcecolumnOrder": "4",//列的序号
    "resourcecolumnHidden": "0", //是否隐藏
    "fixed": false,//是否为固定列（false left right 三选一)
    "eidtConfig": null,//是否为编辑单元格列 （如若是，则补充对应信息，否则为null)
  },
  {
    "resourcecolumnName": "实际金额",//label
    "resourcecolumnNameEn": "actualSum",//model-key
    "resourcecolumnCode": "actualSum",
    "resourcecolumnXtype": "number",//筛选列 类型
    "resourcecolumnWidth": "100",//列的宽度
    "resourcecolumnOrder": "5",//列的序号
    "resourcecolumnHidden": "0", //是否隐藏
    "fixed": false,//是否为固定列（false left right 三选一)
    "eidtConfig": null,//是否为编辑单元格列 （如若是，则补充对应信息，否则为null)
  },
  {
    "resourcecolumnName": "税率%",//label
    "resourcecolumnNameEn": "TaxRate",//model-key
    "resourcecolumnCode": "TaxRate",
    "resourcecolumnXtype": "text",//筛选列 类型
    "resourcecolumnWidth": "120",//列的宽度
    "resourcecolumnOrder": "6",//列的序号
    "resourcecolumnHidden": "0", //是否隐藏
    "fixed": false,//是否为固定列（false left right 三选一)
    "eidtConfig": {
      "switchType": true,
      "type": "rate",
      "decimal": 2,
      "disabled": false,
      "maxlength": null,
      "max": 100,
      "min": 0,
      "placeHolder": null,
      "require": true,
      "validateRule": null
    },
  },
  {
    "resourcecolumnName": "使用人",//label
    "resourcecolumnNameEn": "ownerName",//model-key
    "resourcecolumnCode": "ownerName",
    "resourcecolumnXtype": "text",//筛选列 类型
    "resourcecolumnWidth": "120",//列的宽度
    "resourcecolumnOrder": "7",//列的序号
    "resourcecolumnHidden": "0", //是否隐藏
    "fixed": false,//是否为固定列（false left right 三选一)
    "eidtConfig": null,//是否为编辑单元格列 （如若是，则补充对应信息，否则为null)
  },
  {
    "resourcecolumnName": "省份",//label
    "resourcecolumnNameEn": "province",//model-key
    "resourcecolumnCode": "province",
    "resourcecolumnXtype": "text",//筛选列 类型
    "resourcecolumnWidth": "120",//列的宽度
    "resourcecolumnOrder": "8",//列的序号
    "resourcecolumnHidden": "0", //是否隐藏
    "fixed": false,//是否为固定列（false left right 三选一)
    "eidtConfig": null,//是否为编辑单元格列 （如若是，则补充对应信息，否则为null)
  },
  {
    "resourcecolumnName": "市区",//label
    "resourcecolumnNameEn": "city",//model-key
    "resourcecolumnCode": "city",
    "resourcecolumnXtype": "text",//筛选列 类型
    "resourcecolumnWidth": "100",//列的宽度
    "resourcecolumnOrder": "9",//列的序号
    "resourcecolumnHidden": "0", //是否隐藏
    "fixed": false,//是否为固定列（false left right 三选一)
    "eidtConfig": null,//是否为编辑单元格列 （如若是，则补充对应信息，否则为null)
  },
  {
    "resourcecolumnName": "地址",//label
    "resourcecolumnNameEn": "address",//model-key
    "resourcecolumnCode": "address",
    "resourcecolumnXtype": "text",//筛选列 类型
    "resourcecolumnWidth": "200",//列的宽度
    "resourcecolumnOrder": "10",//列的序号
    "resourcecolumnHidden": "0", //是否隐藏
    "fixed": false,//是否为固定列（false left right 三选一)
    "eidtConfig": null,//是否为编辑单元格列 （如若是，则补充对应信息，否则为null)
  },
  {
    "resourcecolumnName": "邮编",//label
    "resourcecolumnNameEn": "zip",//model-key
    "resourcecolumnCode": "zip",
    "resourcecolumnXtype": "text",//筛选列 类型
    "resourcecolumnWidth": "100",//列的宽度
    "resourcecolumnOrder": "11",//列的序号
    "resourcecolumnHidden": "0", //是否隐藏
    "fixed": false,//是否为固定列（false left right 三选一)
    "eidtConfig": null,//是否为编辑单元格列 （如若是，则补充对应信息，否则为null)
  },
  {
    "resourcecolumnName": "备注",//label
    "resourcecolumnNameEn": "Remark",//model-key
    "resourcecolumnCode": "Remark",
    "resourcecolumnXtype": "text",//筛选列 类型
    "resourcecolumnWidth": "200",//列的宽度
    "resourcecolumnOrder": "12",//列的序号
    "resourcecolumnHidden": "0", //是否隐藏
    "fixed": 'right',//是否为固定列（false left right 三选一)
    "eidtConfig": {
      "switchType": true,
      "type": "input",
      "decimal": 2,
      "disabled": false,
      "maxlength": null,
      "max": 0,
      "min": 0,
      "placeHolder": null,
      "require": true,
      "validateRule": null
    },
  },
]
