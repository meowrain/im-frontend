# ElementPlus Form表单校验

我们在前端完成表单校验可以省去很多错误的请求，节省后端接口的压力

## 校验实现步骤

1. 声明表单对象并绑定到`el-form`上
    - 声明的表单对象的属性，一般情况下和接口所需要的字段一致
    - 准备`规则对象`,使用`prop`属性绑定在`el-form-item`上，属性值是规则对象中对应的属性名
    - 使用`v-model`将表单对象的属性绑定在`el-input`等表单元素上

![](https://blog.meowrain.cn/api/i/2024/08/28/tbVtKQ1724852308975099017.webp)



> https://juejin.cn/post/7253115535483453497