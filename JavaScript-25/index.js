// 获取时间数据
function getTime(){
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var data = date.getDate();

    var hours = date.getHours();
    var minutes = date.getMinutes();
    var miao = date.getSeconds();

    var datelist = [year, month, data, hours, minutes, miao];
    alert(date);

}



$(function(){

      $(".main a").click(function(){
          var ul = $(this).next("ul.left-ul2");
          if(ul.css('display') == 'none'){
              ul.css('display', 'block');
          }else{
              ul.css("display" , "none");
          }
      });

      $(".rbox1 h2").animate({
          'right':'100px'
      },2000);

      // 表单页面显示部分
      $("#submit1").click(function(){
          var youxiang = $("input:text[name='youxiang']").val();
          var nicheng = $("input:text[name='nicheng']").val();
          var jiejian = $("input:text[name='jiejian']").val();
          var zhuzhi = $("input:text[name='zhuzhi']").val();
          var select1 = $("#selectYs1").val();
          var select2 = $("#selectYs2").val();
          var select3 = $("#selectYs3").val();

          $(".tangchuang1").css("display","block");
          $(".tangchuang1 table").css("display","block");
          $("#t_youxiang").html(youxiang);
          $("#t_nicheng").html(nicheng);
          $("#t_jiejian").html(jiejian);
          $("#t_zhuzhi1").html(select1 + "/" + select2 + "/" + select3);
          $("#t_zhuzhi2").html(zhuzhi);

      });
      // 表单页面隐藏部分
      $("#submit2").click(function(){
        $(".tangchuang1").css("display","none");
        $(".tangchuang1 table").css("display","none");
        $("#t_youxiang").html("");
        $("#t_nicheng").html("");
        $("#t_jiejian").html("");
        $("#t_zhuzhi1").html("");
        $("#t_zhuzhi2").html("");
      });


      // 设置图片旋转
      $(".rbox3_11 li img").on({

          mouseover : function(){
            $(this).animate({
              'width':"370px",
              'height':"180px"
            },200);
          },
          mouseout : function(){

            $(this).animate({
              'width':'346px',
              'height':'164px'
            },200);
          }
      });


      // 操作数据
      var checkboxs = $("input:checkbox[name='fx']");

      $("#add").click(function(){
        $(".tangchuang2").css("display","block");
        $(".tangchuang2 table").css("display","block");

      });

      $("#delete").click(function(){
          alert("多选删除暂未实现");
       });
       $(".del_dange").click(function(){
           $(this).parent().parent().css('display','none');
        });

      $("#submit5").click(function(){
        var jijiang = $("input:text[name='jijiang']").val();
        var time = $("input:text[name='time']").val();
        var renqi = $("input:text[name='renqi']").val();
        var $jiedian = $("<tr><td><input type='checkbox' name='fx' value='今日话题'/></td><td>" + jijiang + "<td>2017-07-23 08:00:00</td><td>运行中&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button'  style='width:50px;height:25px;font-size:8px;background-color:rgb(148, 98, 99);margin-left:3px;'class='btn btn-default dropdown-toggle del_dange'>delete</button></td></tr>");
        $("#dom_table").show().append($jiedian);
        $(".tangchuang2").css("display","none");
        $(".tangchuang2 table").css("display","none");
        $("#t_nicheng").html("");
        $("#t_shengfeng").html("");
        $("#t_password").html("");
        $("#t_xingbie").html("");
      });




});
