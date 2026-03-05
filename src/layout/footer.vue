<template>
  <div></div>
</template>

<style lang="scss" scoped>
.footer {
  justify-content: space-around;
  padding: 20px;
  max-width: var(--max-width);
  margin: 0 auto;

  ul {
    flex-direction: column;
    list-style: none;
    line-height: 30px;
    margin-top: 20px;
    .title {
      margin-bottom: 10px;
    }
    &.row {
      flex-direction: row;
      text-align: center;
      li {
        display: inline-block;
        margin: 0 10px;
        font-size: 12px;
        &:first-child {
          margin-left: 0;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
    strong {
      display: block;
    }
    img {
      width: 80px;
    }
    li {
      cursor: pointer;
      letter-spacing: 0.5px;

      a {
        text-decoration: none;
        color: #999;
        font-size: 14px;
      }
      &:hover {
        opacity: 0.6;
      }
      .icon-juejin {
        color: #2582ff;
      }
      .icon-bilibili {
        color: #00a1d6;
      }
      .icon-zhihu {
        color: #066de8;
      }
      .icon-gitee {
        color: #c71d23;
      }
      .icon-github {
        color: #777;
      }
    }
  }
}
</style>
