(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4552e6ee"],{"22e1":function(t,n,e){"use strict";function r(t){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}e.d(n,"a",(function(){return r}))},"4ec3":function(t,n,e){"use strict";e.d(n,"D",(function(){return o})),e.d(n,"G",(function(){return a})),e.d(n,"k",(function(){return i})),e.d(n,"j",(function(){return s})),e.d(n,"E",(function(){return f})),e.d(n,"q",(function(){return l})),e.d(n,"v",(function(){return d})),e.d(n,"d",(function(){return p})),e.d(n,"F",(function(){return m})),e.d(n,"x",(function(){return g})),e.d(n,"M",(function(){return b})),e.d(n,"h",(function(){return v})),e.d(n,"g",(function(){return h})),e.d(n,"i",(function(){return y})),e.d(n,"C",(function(){return _})),e.d(n,"p",(function(){return z})),e.d(n,"u",(function(){return k})),e.d(n,"c",(function(){return j})),e.d(n,"L",(function(){return w})),e.d(n,"S",(function(){return $})),e.d(n,"s",(function(){return x})),e.d(n,"f",(function(){return S})),e.d(n,"A",(function(){return q})),e.d(n,"V",(function(){return E})),e.d(n,"O",(function(){return O})),e.d(n,"B",(function(){return C})),e.d(n,"R",(function(){return V})),e.d(n,"r",(function(){return F})),e.d(n,"l",(function(){return J})),e.d(n,"Q",(function(){return N})),e.d(n,"e",(function(){return I})),e.d(n,"N",(function(){return P})),e.d(n,"z",(function(){return T})),e.d(n,"U",(function(){return A})),e.d(n,"K",(function(){return B})),e.d(n,"H",(function(){return D})),e.d(n,"I",(function(){return G})),e.d(n,"J",(function(){return H})),e.d(n,"m",(function(){return K})),e.d(n,"n",(function(){return L})),e.d(n,"a",(function(){return M})),e.d(n,"y",(function(){return Q})),e.d(n,"T",(function(){return R})),e.d(n,"w",(function(){return U})),e.d(n,"o",(function(){return W})),e.d(n,"t",(function(){return X})),e.d(n,"b",(function(){return Y})),e.d(n,"P",(function(){return Z}));var r=e("f753"),u=e.n(r),c="http://api.keyou.site:8000",o=function(t){return u.a.post("".concat(c,"/user/login/"),t)},a=function(t){return u.a.post("".concat(c,"/user/register/"),t)},i=function(t){return u.a.get("".concat(c,"/user/")+t+"/count/")},s=function(t){return u.a.get("".concat(c,"/user/")+t+"/count/")},f=function(t){return u.a.get("".concat(c,"/projects/?page=")+t.page+"&size="+t.size)},l=function(t){return u.a.delete("".concat(c,"/projects/")+t+"/")},d=function(t,n){return u.a.put("".concat(c,"/projects/")+t+"/",n)},p=function(t){return u.a.post("".concat(c,"/projects/"),t)},m=function(){return u.a.get("".concat(c,"/projects/names/"))},g=function(){return u.a.get("".concat(c,"/envs/names/"))},b=function(t,n){return u.a.post("".concat(c,"/projects/")+t+"/run/",{env_id:n})},v=function(t){return u.a.get("".concat(c,"/debugtalks/?page=")+t.page+"&size="+t.size)},h=function(t){return u.a.get("".concat(c,"/debugtalks/")+t+"/")},y=function(t,n){return u.a.put("".concat(c,"/debugtalks/")+t+"/",{debugtalk:n})},_=function(t){return u.a.get("".concat(c,"/interfaces/?page=")+t.page+"&size="+t.size)},z=function(t){return u.a.delete("".concat(c,"/interfaces/")+t+"/")},k=function(t,n){return u.a.put("".concat(c,"/interfaces/")+t+"/",n)},j=function(t){return u.a.post("".concat(c,"/interfaces/"),t)},w=function(t,n){return u.a.post("".concat(c,"/interfaces/")+t+"/run/",{env_id:n})},$=function(t){return u.a.get("".concat(c,"/testsuits/?page=")+t.page+"&size="+t.size)},x=function(t){return u.a.delete("".concat(c,"/testsuits/")+t+"/")},S=function(t){return u.a.post("".concat(c,"/testsuits/"),t)},q=function(t){return u.a.get("".concat(c,"/testsuits/")+t+"/")},E=function(t,n){return u.a.put("".concat(c,"/testsuits/")+t+"/",n)},O=function(t,n){return u.a.post("".concat(c,"/testsuits/")+t+"/run/",{env_id:n})},C=function(t){return u.a.get("".concat(c,"/projects/")+t+"/interfaces/")},V=function(t){return u.a.get("".concat(c,"/testcases/?page=")+t.page+"&size="+t.size)},F=function(t){return u.a.delete("".concat(c,"/testcases/")+t+"/")},J=function(t){return u.a.get("".concat(c,"/interfaces/")+t+"/configs/")},N=function(t){return u.a.get("".concat(c,"/interfaces/")+t+"/testcases/")},I=function(t){return u.a.post("".concat(c,"/testcases/"),t)},P=function(t,n){return u.a.post("".concat(c,"/testcases/")+t+"/run/",{env_id:n})},T=function(t){return u.a.get("".concat(c,"/testcases/")+t+"/")},A=function(t,n){return u.a.put("".concat(c,"/testcases/")+t+"/",n)},B=function(t){return u.a.get("".concat(c,"/reports/?page=")+t.page+"&size="+t.size)},D=function(t){return u.a.delete("".concat(c,"/reports/")+t+"/")},G=function(t){return u.a.get("".concat(c,"/reports/")+t+"/download/",{responseType:"blob"})},H=function(t){return u.a.get("".concat(c,"/reports/")+t+"/")},K=function(t){return u.a.get("".concat(c,"/configures/?page=")+t.page+"&size="+t.size)},L=function(t){return u.a.delete("".concat(c,"/configures/")+t+"/")},M=function(t){return u.a.post("".concat(c,"/configures/"),t)},Q=function(t){return u.a.get("".concat(c,"/configures/")+t+"/")},R=function(t,n){return u.a.put("".concat(c,"/configures/")+t+"/",n)},U=function(t){return u.a.get("".concat(c,"/envs/?page=")+t.page+"&size="+t.size)},W=function(t){return u.a.delete("".concat(c,"/envs/")+t+"/")},X=function(t,n){return u.a.put("".concat(c,"/envs/")+t+"/",n)},Y=function(t){return u.a.post("".concat(c,"/envs/"),t)},Z=function(){return u.a.get("".concat(c,"/summary/"))}},"5a7e":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"crumbs"},[e("el-breadcrumb",{attrs:{separator:"/"}},[e("el-breadcrumb-item",[e("i",{staticClass:"el-icon-lx-calendar"}),t._v(" 环境管理")]),e("el-breadcrumb-item",[t._v("新增环境")])],1)],1),e("div",{staticClass:"container"},[e("div",{staticClass:"form-box"},[e("el-form",{ref:"form",attrs:{rules:t.rules,model:t.form,"label-width":"100px"}},[e("el-form-item",{attrs:{label:"环境名称",prop:"name",required:""}},[e("el-input",{attrs:{"suffix-icon":"el-icon-menu",clearable:""},on:{focus:function(n){return t.clearValidate("name")}},model:{value:t.form.name,callback:function(n){t.$set(t.form,"name",n)},expression:"form.name"}})],1),e("el-form-item",{attrs:{label:"请求base url",prop:"base_url",required:""}},[e("el-input",{attrs:{"suffix-icon":"el-icon-user-solid",clearable:""},on:{focus:function(n){return t.clearValidate("tester")}},model:{value:t.form.base_url,callback:function(n){t.$set(t.form,"base_url",n)},expression:"form.base_url"}})],1),e("el-form-item",{attrs:{label:"简要描述",prop:"desc",required:""}},[e("el-input",{attrs:{type:"textarea",rows:"4",clearable:""},model:{value:t.form.desc,callback:function(n){t.$set(t.form,"desc",n)},expression:"form.desc"}})],1),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.onSubmit("form")}}},[t._v("提交")]),e("el-button",{on:{click:function(n){return t.resetForm("form")}}},[t._v("取消")])],1)],1)],1)])])},u=[],c=e("22e1"),o=(e("a450"),e("4ec3")),a={name:"baseform",data:function(){var t=this,n=function(n,e,r){var u=e.length;if(u<=0)r(new Error("请输入环境名称"));else{for(var c=0;c<t.env_names.length;c++){var o=t.env_names[c];if(o.name===e){r(new Error("环境名称已存在"));break}}r()}};return{form:{name:"",base_url:"",desc:""},rules:{name:[{validator:n,trigger:"blur"}],base_url:[{required:!0,message:"请输入请求base url",trigger:"blur"}],desc:[{required:!0,message:"请输入简要描述",trigger:"blur"}]},env_names:[]}},created:function(){this.getEnvNames()},methods:{onSubmit:function(t){var n=this;this.$refs[t].validate((function(t){if(!t)return n.$message.error("参数有误"),!1;var e=n;Object(o["b"])(n.form).then((function(t){n.$message.success("新增配置成功！"),setInterval((function(){e.$router.go()}),1e3)})).catch((function(t){"object"===Object(c["a"])(t)&&t.hasOwnProperty("name")?n.$message.error("配置名称已存在"):n.$message.error("服务器错误")}))}))},clearValidate:function(t){this.$refs["form"].clearValidate(t)},resetForm:function(t){this.$refs[t].resetFields()},getEnvNames:function(){var t=this;Object(o["x"])().then((function(n){t.env_names=n.data})).catch((function(t){that.$message.error("服务器错误")}))}}},i=a,s=e("4ac2"),f=Object(s["a"])(i,r,u,!1,null,null,null);n["default"]=f.exports}}]);