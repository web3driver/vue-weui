<template>
  <yv-page type="input" title="Input" name="表单输入">
    <yv-radio title="单选列表项" name="radio" :lists="lists1"></yv-radio>
    <yv-checkbox title="复选列表项" name="checkbox" :lists="lists2"></yv-checkbox>

    <div class="weui-cells__title">表单</div>
    <div class="weui-cells weui-cells_form">
      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">qq</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入qq号" />
        </div>
      </div>
      <div class="weui-cell weui- ">
        <div class="weui-cell__hd">
          <label class="weui-label">手机号</label>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="tel" placeholder="请输入手机号">
        </div>
        <div class="weui-cell__ft">
          <button class="weui-vcode-btn">获取验证码</button>
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd"><label for="" class="weui-label">日期</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="date" value="" />
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd"><label for="" class="weui-label">时间</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="datetime-local" value="" placeholder="" />
        </div>
      </div>
      <div class="weui-cell weui-cell_vcode">
        <div class="weui-cell__hd"><label class="weui-label">验证码</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="number" placeholder="请输入验证码" />
        </div>
        <div class="weui-cell__ft">
          <img class="weui-vcode-img" src="./images/vcode.jpg" />
        </div>
      </div>
    </div>
    <div class="weui-cells__tips">底部说明文字底部说明文字</div>

    <div class="weui-cells__title">表单报错</div>
    <div class="weui-cells weui-cells_form">
      <div class="weui-cell weui-cell_warn">
        <div class="weui-cell__hd"><label for="" class="weui-label">卡号</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="number" pattern="[0-9]*" value="weui input error" placeholder="请输入卡号" />
        </div>
        <div class="weui-cell__ft">
          <i class="weui-icon-warn"></i>
        </div>
      </div>
    </div>



    <yv-switchbar title="开关" name="switch" :lists="lists3"></yv-switchbar>
    <yv-input title="文本框" placeholder="请输入文本" name="text"></yv-input>
    <yv-textarea title="文本域" :placeholder="'请输入文本'" name="textarea" :limit="150"></yv-textarea>

    <yv-select title="选择" name="select1" :lists="lists4"></yv-select>
    <yv-select name="select2" :lists="lists5"></yv-select>
    
    <div class="weui-cells__title">选择</div>
    <div class="weui-cells">
      <div class="weui-cell weui-cell_select weui-cell_select-before">
        <div class="weui-cell__hd">
          <select class="weui-select" name="select2">
                        <option value="1">+86</option>
                        <option value="2">+80</option>
                        <option value="3">+84</option>
                        <option value="4">+87</option>
                    </select>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入号码" />
        </div>
      </div>
    </div>
    <div class="weui-cells__title">选择</div>
    <div class="weui-cells">
      <div class="weui-cell weui-cell_select">
        <div class="weui-cell__bd">
          <select class="weui-select" name="select1">
                        <option selected="" value="1">微信号</option>
                        <option value="2">QQ号</option>
                        <option value="3">Email</option>
                    </select>
        </div>
      </div>
      <div class="weui-cell weui-cell_select weui-cell_select-after">
        <div class="weui-cell__hd">
          <label for="" class="weui-label">国家/地区</label>
        </div>
        <div class="weui-cell__bd">
          <select class="weui-select" name="select2">
                        <option value="1">中国</option>
                        <option value="2">美国</option>
                        <option value="3">英国</option>
                    </select>
        </div>
      </div>
    </div>

    <label for="weuiAgree" class="weui-agree">
            <input id="weuiAgree" type="checkbox" class="weui-agree__checkbox">
            <span class="weui-agree__text">
                阅读并同意<a href="javascript:void(0);">《相关条款》</a>
            </span>
        </label>



    <div class="weui-btn-area">
      <a class="weui-btn weui-btn_primary" href="javascript:" id="showTooltips">确定</a>
    </div>
  </yv-page>
</template>

<script>
  export default {
    name: 'input',
    data() {
      return {
        lists1: [
          'cell standard',
          'cell standard'
        ],
        lists2: [
          'standard is dealt for u.',
          'standard is dealicient for u.'
        ],
        lists3: [
          '标题文字'
        ],
        lists4: [
          '微信号1',
          '微信号2',
          '微信号3',
          '微信号4',
          '微信号5',
        ],
        lists5: [
          {
            value:0,
            text:'微信号1'
          },
          {
            value:1,
            text:'微信号2'
          },
          {
            value:2,
            text:'微信号3'
          },
          {
            value:3,
            text:'微信号4'
          },
          {
            value:4,
            text:'微信号5'
          },
        ]
      };
    },
  };

</script>

<style scoped>


</style>
