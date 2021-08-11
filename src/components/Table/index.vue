<template>
  <div>
    <div
      class="block"
      v-for="(ele,index) in data"
      :key="index"
    >
      <div class="top">
        <div class="competitionType">
          <p>{{ele.competitionType}}</p>
          <span></span>
        </div>
        <div class="level">
          <span>{{ele.level}}</span>
          <span>{{ele.matchTime}}</span>
        </div>
        <div class="teams">
          <span class="team1">{{ele.teamNameH}}</span>
          <span class="icon-vs"></span>
          <span class="team2">{{ele.teamNameA}}</span>
        </div>
      </div>
      <div class="bot">
        <table v-if='isIndex'>
          <tr class="head">
            <th
              width="50%"
              colspan="4"
            >
              体彩
              <span>{{ele.jzRateType ? ('（' + ele.jzRateType + '）') : ''}}</span>
            </th>
            <th
              width="37%"
              colspan="3"
            >
              皇冠
              <span>{{ele.hgRateType ? ('（' + ele.hgRateType + '）') : ''}}</span>
            </th>
            <th
              width="23%"
              colspan="1"
            >利润</th>
          </tr>
          <tr>
            <td
              :class="ele.jzPValue == 0 ? '' : (ele.jzPValue < 0 ? 'green' : 'red')"
              width="6%"
            >{{ele.jzPValue > 0 ? "+" + ele.jzPValue : ele.jzPValue}}</td>
            <td
              :class="(ele.jzWHighlight?'red':'')"
              width="16%"
            >{{ele.jzWRate}}</td>
            <td
              :class="(ele.jzDHighlight?'red':'')"
              width="10%"
            >{{ele.jzDRate}}</td>
            <td
              :class="(ele.jzLHighlight?'red':'')"
              width="11%"
            >{{ele.jzLRate}}</td>
            <td
              :class="(ele.hgWHighlight?'red':'')"
              width="11%"
            >{{ele.hgWRate}}</td>
            <td
              :class="(ele.hgDHighlight?'red':'')"
              width="20%"
            >{{ele.hgPDisplay == ''? ele.hgDRate : ele.hgPDisplay}}</td>
            <td
              :class="(ele.hgLHighlight?'red':'')"
              width="10%"
            >{{ele.hgLRate}}</td>
            <td width="18%">{{ele.totalBenefitPoint}}</td>
          </tr>
          <tr>
            <td
              class="hide"
              width="6%"
            >{{}}</td>
            <td
              class="bold"
              width="16%"
            >{{ele.jzWPayAmount>0? ele.jzWPayAmount : ''}}</td>
            <td
              class="bold"
              width="10%"
            >{{ele.jzDPayAmount>0? ele.jzDPayAmount : ''}}</td>
            <td
              class="bold"
              width="11%"
            >{{ele.jzLPayAmount>0? ele.jzLPayAmount : ''}}</td>
            <td
              class="bold"
              width="11%"
            >{{ele.hgWPayAmount>0? ele.hgWPayAmount : ''}}</td>
            <td
              class="bold"
              width="20%"
            >{{ele.hgDPayAmount>0? ele.hgDPayAmount : ''}}</td>
            <td
              class="bold"
              width="10%"
            >{{ele.hgLPayAmount>0? ele.hgLPayAmount : ''}}</td>
            <td
              class="bold"
              width="18%"
            >{{ele.totalBenefitAmount!=0? ele.totalBenefitAmount : ''}}</td>
          </tr>
        </table>
        <table v-else>
          <tr class="head">
            <th
              width="50%"
              colspan="4"
            >
              体彩
              <span>{{ele.jzRateType ? ('（' + ele.jzRateType + '）') : ''}}</span>
            </th>
            <th
              width="37%"
              colspan="3"
            >
              皇冠
              <span>{{ele.hgRateType ? ('（' + ele.hgRateType + '）') : ''}}</span>
            </th>
            <th
              width="23%"
              colspan="1"
            >利润</th>
          </tr>
          <tr>
            <td
              class=""
              width="6%"
            ></td>
            <td width="16%"></td>
            <td width="10%"></td>
            <td width="11%"></td>
            <td width="11%"></td>
            <td width="20%"></td>
            <td width="10%"></td>
            <td width="18%"></td>
          </tr>
          <tr>
            <td
              class=""
              width="6%"
            >{{ele.jzPValue > 0 ? "+" + ele.jzPValue : ele.jzPValue}}</td>
            <td width="16%">{{ele.jzWRate}}</td>
            <td width="10%">{{ele.jzDRate}}</td>
            <td width="11%">{{ele.jzLRate}}</td>
            <td width="11%">{{ele.hgWRate}}</td>
            <td width="20%">{{ele.hgPDisplay == ''? ele.hgDRate : ele.hgPDisplay}}</td>
            <td width="10%">{{ele.hgLRate}}</td>
            <td width="18%">{{ele.totalBenefitPoint}}</td>
          </tr>
          <tr>
            <td
              class="hide"
              width="6%"
            >{{}}</td>
            <td
              class="bold"
              width="16%"
            >{{ele.jzWPayAmount>0? ele.jzWPayAmount : ''}}</td>
            <td
              class="bold"
              width="10%"
            >{{ele.jzDPayAmount>0? ele.jzDPayAmount : ''}}</td>
            <td
              class="bold"
              width="11%"
            >{{ele.jzLPayAmount>0? ele.jzLPayAmount : ''}}</td>
            <td
              class="bold"
              width="11%"
            >{{ele.hgWPayAmount>0? ele.hgWPayAmount : ''}}</td>
            <td
              class="bold"
              width="20%"
            >{{ele.hgDPayAmount>0? ele.hgDPayAmount : ''}}</td>
            <td
              class="bold"
              width="10%"
            >{{ele.hgLPayAmount>0? ele.hgLPayAmount : ''}}</td>
            <td
              class="bold"
              width="18%"
            >{{ele.totalBenefitAmount!=0? ele.totalBenefitAmount : ''}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'f-table',
  components: {},
  data () {
    return {
      isIndex: true,
    }
  },
  props: {},
  computed: {
    data () {
      return this.$store.state.response.data.slice();
    },
    ttgData () {
      return this.$store.state.response.ttgData.slice();
    },
  },
  watch: {},
  created () { },
  mounted () {
  },
  destroyed () { },
  methods: {},
}
</script>
<style lang="scss" scoped>
.block {
  min-height: 165px;
  height: auto;
  border: 1px solid #eee;
  padding: 15px 30px 5px 30px;
  box-shadow: 1px 1px 1px 1px #eee;
  margin-bottom: 2px;
  background-color: transparent;
  text-align: center;
}

.block > .top {
  height: 30px;
  line-height: 30px;
  padding: 0 6px;
  position: relative;
}

.block > .top > div {
  float: left;
}

.block > .top > div.competitionType {
  height: 30px;
  line-height: 30px;
  background-color: #4579c3;
  color: #fff;
  text-align: center;
  min-width: 60px;
  padding: 0 10px;
  margin-right: 24px;
  position: relative;
}

.block > .top > div.competitionType > span {
  height: 0;
  width: 0;
  position: absolute;
  right: -30px;
  top: 0px;
  z-index: 1;
  width: 0;
  height: 0;
  border-bottom: 30px solid #4579c3;
  border-right: 30px solid transparent;
}

.block > .top > div.level {
  min-width: 150px;
  width: auto;
  color: #0259b2;
  margin-left: 10px;
}

.block > .top > div.teams {
  color: #3c7db8;
  font-size: 14px;
  font-weight: bold;
  width: 60%;
}

.block > .top > div.teams > .icon-vs {
  display: inline-block;
  width: 22px;
  height: 22px;
  background: url("../../assets/images/icon-vs.png") repeat-x left top;
  margin: 0 3px;
}

.block table {
  width: 100%;
  line-height: 28px;
  font-size: 12px;
  text-align: center;
  border-spacing: 5px;
  border-collapse: inherit;
  th,
  td {
    text-align: center;
  }
}

.block table > tbody {
  width: 100%;
}

.block table tr {
  width: 100%;
  line-height: 28px;
  height: 30px;
}

.block table tr.head {
  background-color: #5484d0;
  color: #ffffff;
  font-weight: 400;
}

.block table tr.head th {
  border: 1px solid #dddddd;
  color: #fff;
  font-weight: bold;
}

.block table tr td {
  background: url("../../assets/images/td.png") repeat-x left top;
}

.block table tr td.red {
  color: #ff0102;
}

.block table tr td.green {
  color: #57a87b;
}

.block table tr td.yellow {
  color: #ffaf01;
}

.block table tr td.bold {
  font-weight: bold;
}

.block table tr td.hide {
  visibility: hidden;
}

.block table tr td.tips::after {
  content: "";
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
  margin-left: 5px;
  margin-bottom: -2px;
}

.block table tr td.tips.red::after {
  background: #ff0102;
  animation: blockAlert 1.5s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-play-state: running;
}

.block table tr td.tips.yellow::after {
  background: #ffaf01;
}

@keyframes blockAlert {
  0% {
    background-color: pink;
  }

  100% {
    background-color: #ff0102;
  }
}
</style>