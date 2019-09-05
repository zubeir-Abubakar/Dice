//BUSINESS LOGIC
$().ready(()=>{
  var name = 0;
  var name2 =0;
  var rollScoreOne = [];
  var rollScoreTwo = [];
  var fav = [];
  var total= 0;
  var total2= 0;
  var subTotal=0;
  var subTotal2=0;
    grayer('form2',true);

    function PlayersInfo(Name, score, totalScore) {
        this.playerNames = Name;
        this.playerScore = score;
        this.totalScores = totalScore;
    }

    PlayersInfo.prototype.Total = function (total) {
        return this.totalScores = this.totalScores + total;
    }

    $("#rollOne").click(()=>{
      event.preventDefault();
      var randomNo1 = Math.floor((Math.random() * 6) + 1); //Random no generator from 1-6
      rollScoreOne.push(randomNo1);


      if (randomNo1===1){
        alert("oops. you got a one");
        subTotal= 0;
        $(".output").text(subTotal);
        $(".p1Out").text(subTotal);
        grayer('form2',false);
        grayer('form1',true);
      }

      else {
        subTotal = subTotal +randomNo1;
        $(".p1Out").text(randomNo1);
        $(".output").text(subTotal);
      }

    });
    $("#rollTwo").click(()=>{
      event.preventDefault();
      var randomNo2 = Math.floor((Math.random() * 6) + 1); //Random no generator from 1-6
        rollScoreTwo.push(randomNo2);
        $(".p2Out").text(randomNo2);

        if (randomNo2===1){
          alert("oops. you got a one");
          subTotal2= 0;
          $(".output").text(subTotal2);
          $(".p2Out").text(subTotal2);
          grayer('form1',false);
          grayer('form2',true);

        }
        else {
          subTotal2 = subTotal2 +randomNo2;
          $(".p2Out").text(randomNo2);
          $(".output").text(subTotal2);
        }
    });

    $("#hold").click(()=>{
       total = total+ subTotal;
       $(".output2").text("Your score Is " +total);
       subTotal=0;
       $(".output").text(subTotal);
       $(".p1Out").text(subTotal);
       grayer('form1',true);
       grayer('form2',false);
       if (total>99){
         total =100;
         $(".output2").text("Your score Is " +total);
         grayer('form2',true);
         $(".winner").fadeIn();
          $(".win").text(name);
       }
    });

    $("#hold2").click(()=>{
       total2 = total2+ subTotal2;
       $(".output3").text("Your score Is " +total2);
       subTotal2=0;
       $(".output").text(subTotal2);
       $(".p2Out").text(subTotal2);
       grayer('form1',false);
       grayer('form2',true);

       if (total2>99) {
         total2=100;
         $(".output3").text("Your score Is " +total2);
         grayer('form1',true);
         $(".winner").fadeIn();
         $(".win").text(name2);
       }

     });



    function grayer(formId, yesNo) {
     var f = document.getElementById(formId), s, opacity;
     s = f.style;
     opacity = yesNo? '40' : '100';
     s.opacity = s.MozOpacity = s.KhtmlOpacity = opacity/100;
     s.filter = 'alpha(opacity='+opacity+')';
     for(var i=0; i<f.length; i++) f[i].disabled = yesNo;
    }


  //USER LOGIC
  $("#play1").click(function(){
  var player = $("#victim1").val();
  name = player.toUpperCase();
  $(".playerNameOne").text(name);
  $(".vic1").fadeOut();
  $(".vic2").fadeIn();


  });
  $("#play2").click(function(){
  var player2 = $("#victim2").val();
  name2 = player2.toUpperCase();
  $(".playerNameTwo").text(name2);
  $(".vic2").fadeOut();
  $(".container").fadeIn();
  });


});
