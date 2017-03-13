<template>
  <div class="weui-slider-box">
    <div class="weui-slider">
      <div class="weui-slider__inner">
        <div 
          class="weui-slider__track" 
          :style="{width:currentPosition}"
        >
        </div>
        <div 
          class="weui-slider__handler" 
          :style="{left:currentPosition}"
          @mouseenter="handleMouseEnter"
          @mouseleave="handleMouseLeave" 
          @mousedown="onButtonDown"
        >
        </div>
      </div>
    </div>
    <div class="weui-slider-box__value">{{value}}</div>
  </div>
</template>
<script>
  export default {
    props: {
      value: {
        type: Number,
        default: 0
      },
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 100
      }
    },
    data() {
      return {
        dragging: false,
        startX: 0,
        currentX: 0,
        startPos: 0,
        newPos: 0,
        currentPosition: (this.value - this.min) / (this.max - this.value) * 100 + '%'
      }
    },
    computed: {
      sliderWidth() {
        return (this.value - this.min) / (this.max - this.value)
      }
    },
    methods: {
      handleMouseEnter() {
        this.dragging = true
      },
      handleMouseLeave() {
        this.dragging = false
      },
      onDragStart(event) {
        this.dragging = true;
        this.startX = event.clientX;
        this.startPos = parseInt(this.currentPosition, 10);
      },
      setPosition(newPos) {
        if (newPos < 0) {
          newPos = 0;
        } else if (newPos > 100) {
          newPos = 100;
        }
        this.value = newPos * (this.max - this.min) * 0.01 + this.min 
        this.currentPosition = (this.value - this.min) / (this.max - this.min) * 100 + '%';
      },
      onDragging(event) {
        if (this.dragging) {
          this.currentX = event.clientX;
          const diff = (this.currentX - this.startX);
          this.newPos = this.startPos + diff;
          this.setPosition(this.newPos);
          console.log(this.newPos)
        }
      },
      onDragEnd() {
        if(this.dragging){
          this.dragging = false;
          window.removeEventListener('mousemove', this.onDragging);
          window.removeEventListener('mouseup', this.onDragEnd);
        }
      },
      onButtonDown(event) {
        if(this.dragging){
          this.onDragStart(event);
          window.addEventListener('mousemove', this.onDragging);
          window.addEventListener('mouseup', this.onDragEnd);
        }
      }
    }
  }

</script>
