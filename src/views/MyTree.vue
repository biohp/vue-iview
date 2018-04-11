<template>
  <div id="mytree">
    <Row>
      <Col span="6" style="text-align:center">
        <Button type="primary" @click="query">查询</Button>
        <Button type="primary" @click="edit">编辑</Button>
        <Button @click="reset">重置</Button>
      </Col>
      <Col span="6">
        <Tree ref="tree" :data="data" multiple show-checkbox></Tree>
      </Col>
      <Col span="12">
        <Card :bordered="false">
            <p slot="title">结果</p>
            <p>length：{{ res.length }}</p>
            <p>level：{{ res.level }}</p>
            <p>all：{{ res.all }}</p>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
import { getTreeValue, resetTree, setTree } from '../utils/tree'
export default {
  name: 'mytree',
  data () {
    return {
      res: {
        length: -1,
        level: [],
        all: [],
      },
      data: [
        {
          level: 1,
          title: '湖南',
          value: 'Hunan',
          expand: true,
          children: [
            {
              level: 2,
              title: '长沙',
              value: 'Changsha',
              expand: true,
              children: [
                {
                  level: 3,
                  title: '浏阳',
                  value: 'Liuyang'
                },
                {
                  level: 3,
                  title: '星沙',
                  value: 'Xingsha'
                }
              ]
            },
            {
              level: 2,
              title: '永州',
              expand: true,
              value: 'Yongzhou',
              children: [
                {
                  level: 3,
                  title: '祁阳',
                  value: 'Qiyang',
                  children: [
                    {
                      level: 4,
                      title: '八宝',
                      value: 'Babao'
                    },
                    {
                      level: 4,
                      title: '白水',
                      value: 'Baishui'
                    }
                  ]
                },
                {
                  level: 3,
                  title: '蓝山',
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
      this.res = {
        length: -1,
        level: [],
        all: []
      }
      const data = this.$refs.tree.getCheckedNodes();
      this.res.length = data.length;
      let level = [1,4];
      this.res.level = getTreeValue(data, level);
      this.res.all = getTreeValue(data, []);
    },
    edit() {
      resetTree(this.data);
      const value = ['Babao','Lanshan'];
      this.data = setTree(this.data, value);
    },
    reset() {
      resetTree(this.data);
    }
  }
}
</script>

<style>

</style>