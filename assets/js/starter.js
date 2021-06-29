// Importing JavaScript
//
// You have two choices for including Bootstrap's JS files—the whole thing,
// or just the bits that you need.


// Option 1
//
// Import Bootstrap's bundle (all of Bootstrap's JS + Popper.js dependency)

// import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


// Option 2
//
// Import just what we need

// If you're importing tooltips or popovers, be sure to include our Popper.js dependency
// import "../../node_modules/popper.js/dist/popper.min.js";

// import "../../node_modules/bootstrap/js/dist/util.js";
// import "../../node_modules/bootstrap/js/dist/modal.js";
import "../js/aos.js"; // 滚动页面加载
import "../js/skitter.js"; // 轮播特效
import "../js/fullScreen.js"; // 全屏
import "../js/sidebar.js"; // 带本地存储功能的显示/隐藏侧栏
import "../js/bootstrap-components.js"; // bootstrap组件
import "../js/masonry.js"; // 多个分页合并成瀑布流页面
