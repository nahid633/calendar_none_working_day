  !function(e){"function"==typeof define&&define.amd?define(["jquery","moment"],e):"object"==typeof exports?module.exports=e(require("jquery"),require("moment")):e(jQuery,moment)}(function(e,a){!function(){a.defineLocale("aze",{months:"Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avqust_Sentyabr_Octyabr_Noyabr_Dekabr".split("_"),monthsShort:"Yan_Fev_Mar_Apr_May_Iyn_Iyl_Avq_Sen_Okt_Noy_Dek".split("_"),weekdays:"Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),weekdaysShort:"Baz_B.E_Ç.A_Çərş_C.A_Cümə_Şən".split("_"),weekdaysMin:"B_B.E_Ç.A_Ç_C.A_C_Ş".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Bugün] LT",nextDay:"[Sabah] LT",nextWeek:"dddd [at] LT",lastDay:"[Dünən ] LT",lastWeek:"[Keçmiş] dddd [də] LT",sameElse:"L"},relativeTime:{future:" %s də",past:"%s saniyə",s:"saniyələr",m:"dəqiqə",mm:"%d dəqiqələr",h:"saat",hh:"%d saatlar",d:"gün",dd:"%d günlər",M:"ay",MM:"%d aylar",y:"il",yy:"%d illər"},dayOfMonthOrdinalParse:/\d{1,2}(ci|cı|cü|cu)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"cu":1===a?"ci":2===a?"ci":3===a?"cü":"cu")},week:{dow:1,doy:4}})}(),e.fullCalendar.datepickerLocale("aze","aze",{closeText:"Hazır",prevText:"Əvvəlki",nextText:"Növbəti",currentText:"Bugün",monthNames:["Yanvar","Fevral","Mart","Aprel","May","Iyun","Iyul","Avqust","Sentyabr","Octyabr","Noyabr","Dekabr"],monthNamesShort:["Yan","Fev","Mar","Apr","May","Iyn","Iyl","Avq","Sen","Okt","Noy","Dek"],dayNames:["Bazar","Bazar ertəsi","Çərşənbə axşamı","Çərşənbə","Cümə axşamı","Cümə","Şənbə"],dayNamesShort:["Baz.","B.E","Ç.A","Çərş.","C.A","Cümə","Şən."],dayNamesMin:["Baz.", "B.e.", "Ç.a.", "Çərş.", "C.a.", "Cümə", "Şən."],weekHeader:"Hf",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),e.fullCalendar.locale("aze",{buttonText:{next:"növbəti",month:"Ay",week:"Həftə",day:"Gün",list:"Agenda"},allDayText:"Bütün gün",eventLimitText:"daha çox",noEventsMessage:"Tədbir tapılmadı"})});
