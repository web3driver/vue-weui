<template>
  <div class="page js_show" :class="[type ? type : '']">
    <div class="page__hd">
      <h1 class="page__title">{{title}}</h1>
      <p class="page__desc">{{name}}</p>
    </div>
    <div class="page__bd" :class="[
       nospacing ? 'page__bd_spacing' : ''
      ]">
      <slot></slot>
    </div>
    <slot name="mask"></slot>
    <div class="page__ft">
      <a href="javascript:"><img src="../images/icon_footer_link.png" /></a>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      name: String,
      type: String,
      nospacing: {
        Style: String,
        default: false,
      },
    },
  };

</script>
