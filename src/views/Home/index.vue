<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <TodayRecommend></TodayRecommend>
    <Rank></Rank>
    <Like></Like>
    <FloorOne></FloorOne>
    <FloorTwo></FloorTwo>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from "./ListContainer";
import TodayRecommend from "./TodayRecommend";
import Rank from "./Rank";
import Like from "./Like";
import FloorOne from "./FloorOne";
import FloorTwo from "./FloorTwo";
import Brand from "./Brand";

export default {
  name: "Home",
  //注册局部组件
  components: {
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    FloorOne,
    FloorTwo,
    Brand,
  },
};
</script>

<style lang="less" scoped></style>
