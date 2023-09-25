"use strict";(self["webpackChunkoats2022"]=self["webpackChunkoats2022"]||[]).push([[505],{2505:function(e,l,s){s.r(l),s.d(l,{default:function(){return E}});var a=s(3396),t=s(7139),r=s(9242);const c={class:"container-fluid"},o={class:"customer-card container"},m=(0,a._)("h4",{class:"fw-bold text-center"},"輸入您的訂單資料",-1),n=(0,a._)("ul",{class:"progress"},[(0,a._)("li",{class:"is-complete"},"訂單資訊"),(0,a._)("li",null,"確認"),(0,a._)("li",{class:"progress__last"},"訂單")],-1),u={class:"row"},i={class:"col-6"},d=(0,a._)("label",{class:"form-label mt-3"},"顧客姓名",-1),f=(0,a._)("span",{class:"required"},"※必填",-1),_=(0,a._)("label",{class:"form-label mt-3"},"電話",-1),p=(0,a._)("span",{class:"required"},"※必填",-1),v={class:"col-12"},b=(0,a._)("label",{class:"form-label mt-3"},"電子郵件",-1),h=(0,a._)("span",{class:"required"},"※必填",-1),k=(0,a._)("p",{class:"fw-bold mt-5"},"送貨資訊",-1),V={class:"col-12"},g={class:"form-check"},x=(0,a._)("label",{class:"form-check-label",for:"flexCheckDefault"}," 同顧客資料 ",-1),w={class:"col-6"},y=(0,a._)("label",{class:"form-label mt-3"},"收件人姓名",-1),U=(0,a._)("span",{class:"required"},"※必填",-1),q=(0,a._)("label",{class:"form-label mt-3"},"收件人電話",-1),W=(0,a._)("span",{class:"required"},"※必填",-1),C={class:"col-12"},D=(0,a._)("label",{class:"form-label mt-3"},"地址",-1),S=(0,a._)("span",{class:"required"},"※必填",-1),F=(0,a._)("option",{selected:""},"城市/ 縣",-1),I=["value"],M=(0,a._)("p",{class:"fw-bold mt-5"},"付款資訊",-1),T=(0,a._)("div",{class:"form-text"}," 已選擇的付款方式: ATM 虛擬代碼繳費（需持代碼至實體ATM或網路銀行繳費） ",-1),A=(0,a._)("p",{class:"fw-bold mt-5"},"訂單備註",-1),N=(0,a._)("div",{class:"col"},[(0,a._)("textarea",{class:"form-control mb-3",id:"exampleFormControlTextarea1",rows:"3",placeholder:"有什麼想告訴賣家的嗎?"})],-1),$={class:"col-12"},z={class:"form-check"},H={class:"form-check-label",for:"flexCheckDefault"},J=(0,a._)("button",{type:"button",class:"btn btn-link ml-1"}," 服務條款及隱私權政策 ",-1),K={class:"mt-5 text-center"};function O(e,l,s,O,Y,Z){const j=(0,a.up)("font-awesome-icon"),B=(0,a.up)("router-link"),E=(0,a.up)("Field"),G=(0,a.up)("Form");return(0,a.wg)(),(0,a.iD)("div",c,[(0,a._)("div",o,[m,n,(0,a._)("div",null,[(0,a.Wm)(B,{to:"/cart"},{default:(0,a.w5)((()=>[(0,a.Wm)(j,{icon:"fa-solid fa-chevron-left"}),(0,a.Uk)(" 回到購物車")])),_:1})]),(0,a.Wm)(G,{onSubmit:Z.onSubmit,class:"mt-3"},{default:(0,a.w5)((()=>[(0,a._)("div",u,[(0,a._)("div",i,[d,f,(0,a.Wm)(E,{name:"name",type:"text",class:"form-control",modelValue:Y.user.name,"onUpdate:modelValue":l[0]||(l[0]=e=>Y.user.name=e),rules:"required"},null,8,["modelValue"]),_,p,(0,a.Wm)(E,{name:"tel",type:"text",class:"form-control",modelValue:Y.user.tel,"onUpdate:modelValue":l[1]||(l[1]=e=>Y.user.tel=e),rules:"required"},null,8,["modelValue"])]),(0,a._)("div",v,[b,h,(0,a.Wm)(E,{name:"email",class:"form-control",modelValue:Y.user.email,"onUpdate:modelValue":l[2]||(l[2]=e=>Y.user.email=e),rules:"email"},null,8,["modelValue"])]),k,(0,a._)("div",V,[(0,a._)("div",g,[(0,a._)("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault",onClick:l[3]||(l[3]=e=>Z.toggleInfo())}),x])]),(0,a._)("div",w,[y,U,(0,a.Wm)(E,{name:"receiver_name",type:"text",class:"form-control",modelValue:Y.receiver.name,"onUpdate:modelValue":l[4]||(l[4]=e=>Y.receiver.name=e),rules:"required"},null,8,["modelValue"]),q,W,(0,a.Wm)(E,{name:"receiver_tel",type:"text",class:"form-control",modelValue:Y.receiver.tel,"onUpdate:modelValue":l[5]||(l[5]=e=>Y.receiver.tel=e),rules:"required"},null,8,["modelValue"])]),(0,a._)("div",C,[D,S,(0,a.wy)((0,a._)("select",{class:"form-select mb-3","aria-label":"Default select example","onUpdate:modelValue":l[6]||(l[6]=e=>Y.receiver.county=e)},[F,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(Y.county,((e,l)=>((0,a.wg)(),(0,a.iD)("option",{key:l,value:e},(0,t.zw)(e),9,I)))),128))],512),[[r.bM,Y.receiver.county]]),(0,a.Wm)(E,{name:"receiver_address",type:"text ",class:"form-control",placeholder:"地址",modelValue:Y.receiver.address,"onUpdate:modelValue":l[7]||(l[7]=e=>Y.receiver.address=e),rules:"required"},null,8,["modelValue"])]),M,T,A,N,(0,a._)("div",$,[(0,a._)("div",z,[(0,a.wy)((0,a._)("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":l[8]||(l[8]=e=>Y.receiver.message=e)},null,512),[[r.e8,Y.receiver.message]]),(0,a._)("label",H,[(0,a.Uk)(" 我同意網站 "),(0,a.Wm)(B,{to:"/customer_term",target:"_blank"},{default:(0,a.w5)((()=>[J])),_:1})])])])]),(0,a._)("div",K,[(0,a._)("button",{type:"submit",class:"btn btn-outline-light text-center checkout",onClick:l[9]||(l[9]=(...l)=>e.sendUser&&e.sendUser(...l))}," 提交訂單 ")])])),_:1},8,["onSubmit"])])])}s(7658);var Y=s(5708),Z={components:{Form:Y.l0,Field:Y.gN},data(){return{county:["臺北市","新北市","桃園市","臺中市","臺南市","高雄市","新竹縣","苗栗縣","彰化縣","南投縣","雲林縣","嘉義縣","屏東縣","宜蘭縣","花蓮縣","臺東縣","澎湖縣","金門縣","連江縣","基隆市","新竹市","嘉義市"],user:{name:"李潔明",email:"leeming413@gmail.com",tel:"0933728990"},receiver:{name:"",tel:"",county:"",address:"板橋區四川路二段3號",message:""},checked:!1}},methods:{toggleInfo(){this.checked?(this.checked=!1,this.receiver.name="",this.receiver.tel=""):(this.checked=!0,this.receiver.name=this.user.name,this.receiver.tel=this.user.tel)},onSubmit(){localStorage.setItem("customerInfo",JSON.stringify(this.$store.state.customerInfo={user:this.user,receiver:this.receiver})),this.$router.push("/confirmed_order")}}},j=s(89);const B=(0,j.Z)(Z,[["render",O]]);var E=B}}]);
//# sourceMappingURL=505.7855da62.js.map