// declare module "*.vue" {
//   import type { ComponentOptions, DefineComponent } from "vue";
//   const component: ComponentOptions | ComponentOptions["setup"];
//   export default component;
// }
declare module "*.vue" {
  import { App, defineComponent } from "vue";
  const component: ReturnType<typeof defineComponent> & {
    install(app: App): void;
  };
  export default component;
}
