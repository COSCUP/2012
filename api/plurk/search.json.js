<!--
  ===                   =========
 ==               =====888888888=====
=8=          ====8888888888888=========
=8==      ===8888888888888888===========
==88==    ==88888888888888888=============         ===   
===888====888888888888888888======8888=====      ==000== 
 ==888888888888888888888888=====888888=====     =00000= 
   ===888888888888888888888=====8888============00000=  
     =888888888888888888888====888===000000000000000=   
     =888888888888888888888====88===00000000000000000=  
    ==888888888888888888888====888===============000000=
     ==88888888888888888888=====88888888====      ==000==
      =88888888888888888888=====888888888===        ===
      ==88888888888888888888=====8888888====
       =88888888888888888888=========8======
        =88888888888888888888==============
        
 00000000   0000      0000    0000  000000000  0000     00
00000000000 0000      0000    0000 00000 00000 0000    0000
000    0000 0000      0000    0000 0000    000 0000   00000
00000000000 0000      0000    0000 00000000000 00000000000
0000000000  0000      0000    0000 0000000000  00000000000
000         000000000 00000000000  0000  00000 0000   00000
000         000000000   00000000   0000   0000 0000    00000
-->
<!DOCTYPE html>
<html lang="en">
<head>
    <title>We'll be right back!</title>
    <link rel="shortcut icon" type="image/png" href="//s.plurk.com/b9d08226518da8fcd48ecd0e372d6c5b.png">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="//s.plurk.com/maintenance/js/jquery.min.js"></script>
    <script src="//s.plurk.com/maintenance/js/jquery.transit.min.js"></script>
    <script src="//s.plurk.com/maintenance/js/main.js"></script>
    <link href="//s.plurk.com/maintenance/style.css" rel="stylesheet">
    <style>
        body {background:#555;}
        #bar {font: 12px 'Helvetica Neue',Helvetica,Arial,'lucida grande',tahoma,verdana,arial,sans-serif; background: #cf682f; box-shadow: 0 0 3px rgba(32,32,32,0.2); height: 42px; font-size: 15px; white-space: nowrap; }
        #bar .logo_img {height:30px; margin-top:6px; margin-left:12px;}
        #board { margin:40px auto; max-width: 100%; text-align:center; color:#FFF;}
        #board h2 {font-family:'Helvetica Neue',Helvetica,Arial,'lucida grande',tahoma,verdana,arial,sans-serif;}
        #downimg {cursor:pointer; max-width: 100%;}
        #main {display:none;}
        #copyright {color:#FFF; font-size:13px; text-align:center;font-family:'Helvetica Neue',Helvetica,Arial,'lucida grande',tahoma,verdana,arial,sans-serif;}
    </style>
    <script>
        $(document).ready(function(){
            $("#downimg").click(function(){
                $("#board").css('display','none');
                $("#main").css('display','block');
            });
        });
    </script>
</head>
<body>
    <div id="bar"><img class="logo_img" src="//s.plurk.com/833da16b117cda62279a3eca137e5008.png"></div>
    <div id="board">
        <h2>We'll be right back!</h2><br />
        <img src="//s.plurk.com/maintenance/img/plurkdown.png" alt="We are working on making Plurk better. Hang on there, we will have service restored shortly!" id="downimg"/>
    </div>
    <div id="main">
        <div id="timeline"></div>
        <div id="player"><img src="//s.plurk.com/maintenance/img/fly.gif" class="playerImg"><img src="//s.plurk.com/maintenance/img/die.gif" class="playerDieImg"></div>
        <div id="footer"><div class="footer"></div></div>
        <div id="score"></div>
        <div id="startScreen">Click Mouse<br />or<br />Press Space<br />to<br />Start</div>
        <div id="endScreen">
             <div class="gameover"></div>
             <img src="//s.plurk.com/maintenance/img/die.gif" class="dieImage" />
             <div class="scoreTitle">Score</div>
             <div class="scoreNumber"></div>
             <div class="gameoverHint">Click to Play Again</div>
        </div>
    </div>
    <div id="copyright">&copy; 2008-2018 Plurk</div>
</body>
</html>
