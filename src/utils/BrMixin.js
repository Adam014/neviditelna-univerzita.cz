export default {
  data() {
    return {
      windowWidth: window.innerWidth
    };
  },
  computed: {
    brComputed() {
      return this.windowWidth < 500 ? '<br>' : '';
    }
  },
  mounted() {
    window.addEventListener('resize', this.updateWindowWidth);
  },
  methods: {
    updateWindowWidth() {
      this.windowWidth = window.innerWidth;
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateWindowWidth);
  }
};