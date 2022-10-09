import Vue from "vue";
import App from "@/components/App.vue";
import type {CreateElement, VNode} from "vue";
// import "@/assets/sass/globals.sass";

const vue: Vue = new Vue({
    render: (createElement: CreateElement): VNode => createElement(App),
});
vue.$mount("#app");
