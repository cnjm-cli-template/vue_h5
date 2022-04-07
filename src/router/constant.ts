export const REDIRECT_NAME = "Redirect";

export const PARENT_LAYOUT_NAME = "ParentLayout";

export const PAGE_NOT_FOUND_NAME = "PageNotFound";

// 错误页
export const EXCEPTION_COMPONENT = () => import("/@/views/basic/exception/exception.vue");

/**
 * @description: default layout
 */
export const LAYOUT = () => import("/@/layouts/default/index.vue");

/**
 * @description: parent-layout
 */
export const getParentLayout = (_name?: string) => {
  return () =>
    new Promise((resolve) => {
      resolve({
        name: PARENT_LAYOUT_NAME,
      });
    });
};
