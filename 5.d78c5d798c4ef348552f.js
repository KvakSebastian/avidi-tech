(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{wxRm:function(n,t,e){"use strict";e.r(t),e.d(t,"DepotubersichtModule",(function(){return g}));var o=e("fXoL"),i=e("tyNb"),c=e("ofXK"),a=e("LPYB");const r=function(){return["/depotubersicht-info"]};function s(n,t){if(1&n){const n=o.Xb();o.Wb(0,"div",18),o.Wb(1,"div",19),o.cc("click",(function(){o.jc(n);const e=t.$implicit;return o.ec().chartDataHandler(e)})),o.Wb(2,"h4"),o.nc(3,"Continental AG"),o.Vb(),o.Wb(4,"p"),o.nc(5,"10 Stck"),o.Vb(),o.Vb(),o.Wb(6,"div",20),o.Wb(7,"div",21),o.Wb(8,"p",22),o.Wb(9,"strong"),o.nc(10,"81.76"),o.Vb(),o.Vb(),o.Wb(11,"p",23),o.nc(12,"12:13:11"),o.Vb(),o.Vb(),o.Wb(13,"div",24),o.Wb(14,"p",25),o.Wb(15,"strong"),o.nc(16,"+0.55%"),o.Vb(),o.Vb(),o.Wb(17,"p",26),o.nc(18,"+0.23%"),o.Vb(),o.Vb(),o.Wb(19,"div",27),o.nc(20," > "),o.Vb(),o.Vb(),o.Vb()}2&n&&(o.Kb(19),o.fc("routerLink",o.gc(1,r)))}const b=[{path:"",component:(()=>{class n{constructor(){this.date=["Jan 20","Feb 20","Mar 20","Apr 20","May 20","Jun 20","Lul 20","Aug 20","Sep 20","Nov 20","Oct 20","Dec 20"],this.chartData=[[1250,1235,1238,2258,1578,1290,2450,1650,1558,1348,2045,1e3],[2450,1650,1558,2258,1578,1290,2450,1650,1558,1348,2045,1500],[1250,1235,1238,2258,1578,1290,2450,1650,1558,1348,2045,1800],[1250,1235,1250,1235,1238,1290,2450,1650,1558,2450,1650,1558],[1250,1235,1238,2258,1578,1290,2450,1650,1558,1250,1235,1238],[1250,1235,1238,2258,1578,1290,2450,1250,1235,1238,1e3,2345],[1250,1235,1238,2258,1250,1235,1238,1650,1558,1348,2045,2135],[1250,1235,1238,2258,1578,1290,2450,1650,1558,1348,2045,1e3],[2450,1650,1558,1235,1238,1290,2450,1650,1558,1348,2045,2314]],this.lineChartData=[{data:this.chartData[0],fill:!1}],this.lineChartLabels=this.date,this.lineChartOptions={legend:{display:!1},tooltips:{callbacks:{label:n=>n.yLabel}},scales:{xAxes:[{ticks:{autoSkip:!0,maxTicksLimit:6},gridLines:{display:!1}}],yAxes:[{id:"y-axis-0",position:"left"}]},annotation:{annotations:[{type:"line",mode:"vertical",scaleID:"x-axis-0",value:"March",borderColor:"orange",borderWidth:2,label:{enabled:!0,fontColor:"orange",content:"LineAnno"}}]}},this.lineChartColors=[{backgroundColor:"rgb(226, 132, 8)",borderColor:"rgb(226, 132, 8)"}],this.lineChartLegend=!0,this.lineChartType="line",this.lineChartPlugins=[],this.chartDataHandler=n=>{this.lineChartData[0].data=n}}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=o.Nb({type:n,selectors:[["app-depotubersicht"]],viewQuery:function(n,t){if(1&n&&o.oc(a.a,3),2&n){let n;o.hc(n=o.dc())&&(t.chart=n.first)}},decls:38,vars:8,consts:[[1,"depotub"],[1,"canvas",2,"display","block"],["baseChart","","width","1200px","height","800px",3,"datasets","labels","options","colors","legend","chartType","plugins"],[1,"wrapper"],[1,"general-info"],[1,"general-info__global"],[1,"depot"],[1,"add-text","orange"],[1,"main-text"],[1,"gesamit"],[1,"profit-value"],[1,"green"],[1,"general-info__local"],[1,"general-info__local-container"],[1,"mitel"],[1,"heute"],[1,"investments-container"],["class","investments-container__item",4,"ngFor","ngForOf"],[1,"investments-container__item"],[1,"investments-container__item-name",3,"click"],[1,"investments-container__item-info"],[1,"investments-container__item-value"],[1,"item-value"],[1,"item-value__add"],[1,"investments-container__item-percentage"],[1,"item-percentage"],[1,"item-percentage__add"],[1,"investments-container__item-arrow",3,"routerLink"]],template:function(n,t){1&n&&(o.Wb(0,"div",0),o.Wb(1,"div",1),o.Ub(2,"canvas",2),o.Vb(),o.Wb(3,"div",3),o.Wb(4,"div",4),o.Wb(5,"div",5),o.Wb(6,"div",6),o.Wb(7,"p",7),o.nc(8,"DEPOT"),o.Vb(),o.Wb(9,"p",8),o.Wb(10,"strong"),o.nc(11," 115.584,25 $"),o.Vb(),o.Vb(),o.Vb(),o.Wb(12,"div",9),o.Wb(13,"p",7),o.nc(14,"GESAMIT"),o.Vb(),o.Wb(15,"p",10),o.Wb(16,"strong"),o.nc(17,"+ 47.235,14 $"),o.Vb(),o.Vb(),o.Wb(18,"p",11),o.nc(19,"+ 23%"),o.Vb(),o.Vb(),o.Vb(),o.Wb(20,"div",12),o.Wb(21,"div",13),o.Wb(22,"div",14),o.Wb(23,"p",7),o.nc(24,"LIQUIDE MITTEL"),o.Vb(),o.Wb(25,"p",8),o.Wb(26,"strong"),o.nc(27,"7.584,25 $"),o.Vb(),o.Vb(),o.Vb(),o.Wb(28,"div",15),o.Wb(29,"p",7),o.nc(30,"HEUTE"),o.Vb(),o.Wb(31,"p",10),o.Wb(32,"strong"),o.nc(33,"+ 7,235,14 $"),o.Vb(),o.Vb(),o.Wb(34,"p",11),o.nc(35,"+5%"),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Wb(36,"div",16),o.mc(37,s,21,2,"div",17),o.Vb(),o.Vb(),o.Vb()),2&n&&(o.Kb(2),o.fc("datasets",t.lineChartData)("labels",t.lineChartLabels)("options",t.lineChartOptions)("colors",t.lineChartColors)("legend",t.lineChartLegend)("chartType",t.lineChartType)("plugins",t.lineChartPlugins),o.Kb(35),o.fc("ngForOf",t.chartData))},directives:[a.a,c.h,i.a],styles:[".depotub[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;flex-direction:column}.depotub[_ngcontent-%COMP%]   .investments-container[_ngcontent-%COMP%]{margin-top:1rem;width:100%}.depotub[_ngcontent-%COMP%]   .investments-container__item[_ngcontent-%COMP%]{margin:1rem;display:flex;justify-content:space-between;border-bottom:1px solid #ebebeb;height:4rem;font-size:1.6rem}.depotub[_ngcontent-%COMP%]   .investments-container__item-name[_ngcontent-%COMP%]{cursor:pointer}.depotub[_ngcontent-%COMP%]   .investments-container__item-name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem;color:#515151}.depotub[_ngcontent-%COMP%]   .investments-container__item-info[_ngcontent-%COMP%]{display:flex;align-items:center}.depotub[_ngcontent-%COMP%]   .investments-container__item-info[_ngcontent-%COMP%]   .investments-container__item-value[_ngcontent-%COMP%]   .item-value__add[_ngcontent-%COMP%]{font-size:1rem;color:#515151}.depotub[_ngcontent-%COMP%]   .investments-container__item-info[_ngcontent-%COMP%]   .investments-container__item-percentage[_ngcontent-%COMP%]{padding-left:1rem}.depotub[_ngcontent-%COMP%]   .investments-container__item-info[_ngcontent-%COMP%]   .investments-container__item-percentage[_ngcontent-%COMP%]   .item-percentage[_ngcontent-%COMP%]{color:#035503}.depotub[_ngcontent-%COMP%]   .investments-container__item-info[_ngcontent-%COMP%]   .investments-container__item-percentage[_ngcontent-%COMP%]   .item-percentage__add[_ngcontent-%COMP%]{font-size:1rem}.depotub[_ngcontent-%COMP%]   .investments-container__item-info[_ngcontent-%COMP%]   .investments-container__item-percentage[_ngcontent-%COMP%]   .green[_ngcontent-%COMP%]{color:#1ee01e}.depotub[_ngcontent-%COMP%]   .investments-container__item-info[_ngcontent-%COMP%]   .investments-container__item-arrow[_ngcontent-%COMP%]{padding-left:1rem;color:#515151;padding-right:1rem;cursor:pointer}.depotub[_ngcontent-%COMP%]   .general-info[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:space-between;padding:1.6rem 2rem;background:#ebebeb}.depotub[_ngcontent-%COMP%]   .general-info[_ngcontent-%COMP%]   .add-text[_ngcontent-%COMP%]{font-size:.8rem}.depotub[_ngcontent-%COMP%]   .general-info[_ngcontent-%COMP%]   .main-text[_ngcontent-%COMP%]{font-size:2rem}.depotub[_ngcontent-%COMP%]   .general-info[_ngcontent-%COMP%]   .profit-value[_ngcontent-%COMP%]{font-size:1.6rem}.depotub[_ngcontent-%COMP%]   .general-info[_ngcontent-%COMP%]   .green[_ngcontent-%COMP%]{color:#16ac16}.depotub[_ngcontent-%COMP%]   .general-info[_ngcontent-%COMP%]   .orange[_ngcontent-%COMP%]{color:#e28408}.depotub[_ngcontent-%COMP%]   .general-info__global[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between}.depotub[_ngcontent-%COMP%]   .general-info__global[_ngcontent-%COMP%]   .depot[_ngcontent-%COMP%]{margin-bottom:2rem}.depotub[_ngcontent-%COMP%]   .general-info__local[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between}.depotub[_ngcontent-%COMP%]   .general-info__local[_ngcontent-%COMP%]   .mitel[_ngcontent-%COMP%]{margin-bottom:2rem}@media (min-width:60rem){body[_ngcontent-%COMP%]{font-size:16px}.depotub[_ngcontent-%COMP%]{display:flex;flex-direction:row}.depotub[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]{width:50%;height:50%}.depotub[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:50%}.depotub[_ngcontent-%COMP%]   .general-info[_ngcontent-%COMP%]{width:80%}}@media (min-width:35rem){.depotub[_ngcontent-%COMP%]   .investments-container[_ngcontent-%COMP%]{width:80%}}"]}),n})()}];let g=(()=>{class n{}return n.\u0275mod=o.Rb({type:n}),n.\u0275inj=o.Qb({factory:function(t){return new(t||n)},imports:[[c.b,a.b,i.c.forChild(b)]]}),n})()}}]);