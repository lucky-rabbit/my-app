# 这是一个失败案例（react+node+MongoDB实现注册并跳转）。。。

>主体思路是前端react注册页面以ajax/fetch发送post请求，后端node拿到数据写入MongoDB，并返回一个1/-1作为状态码，前端页面以此来做router路由的跳转。但是失败在请求一直是以get方式发送的，而且更主要的是后端始终拿不到数据。。。那么只好想象着正确的样子写伪码了o(╥﹏╥)o
>案例是用的create-react-app脚手架。其中，/src下的app.js改为了rej.js，并复制了一份为login.js作为注册后的跳转页，相应的引用也做了修改。此外，/目录下新建了app.js作为node的入口、models文件夹存放着接连启动数据库、logindb文件夹作为数据库。
>作为新人，案例成功与否不重要，关键是明白了自己的不足。在做这个案例的过程还是学到了很多新知识，这是一种愉快的体验。总之，以后还得继续深入学习。

*以此自勉*
