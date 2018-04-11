<template>
  <div id="cascader">
    <Row>
      <Col span="6" style="text-align:center">
        <Button type="primary" @click="query">查询</Button>
        <Button type="primary" @click="edit">编辑</Button>
        <Button @click="reset">重置</Button>
      </Col>
      <Col span="6">
        <Cascader v-model="value" :data="data" :render-format="format" change-on-select filterable></Cascader>
      </Col>
      <Col span="12">
        <Card :bordered="false">
            <p slot="title">结果</p>
            <p>value：{{ value }}</p>
            <p>query：{{ res.query }}</p>
            <p>edit：{{ res.edit }}</p>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'cascader',
  data () {
    return {
      single: false,
      value: [],
      res: {
        query: '',
        edit: []
      },
      data: [
        {
          father: 'China',
          label: '湖南',
          value: 'Hunan',
          expand: true,
          children: [
            {
              father: 'Hunan',
              label: '长沙',
              value: 'Changsha',
              expand: true,
              children: [
                {
                  father: 'Changsha',
                  label: '浏阳',
                  value: 'Liuyang'
                },
                {
                  father: 'Changsha',
                  label: '星沙',
                  value: 'Xingsha'
                }
              ]
            },
            {
              father: 'Hunan',
              label: '永州',
              expand: true,
              value: 'Yongzhou',
              children: [
                {
                  father: 'Yongzhou',
                  label: '祁阳',
                  value: 'Qiyang',
                  children: [
                    {
                      father: 'Qiyang',
                      label: '八宝',
                      value: 'Babao'
                    },
                    {
                      father: 'Qiyang',
                      label: '白水',
                      value: 'Baishui'
                    }
                  ]
                },
                {
                  father: 'Yongzhou',
                  label: '蓝山',
                  value: 'Lanshan'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    query() {
      this.res.query = this.value[this.value.length-1];
    },
    edit() {
      this.value = ['Hunan','Yongzhou','Qiyang','Baishui'];
    },
    reset() {
      this.value = [];
    },
    format(label) {
      return label.pop();
    }
  }
}
</script>

<style scoped>
    
</style>
