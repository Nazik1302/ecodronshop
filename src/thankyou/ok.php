 <!doctype html>
 <html>
 <head>

<!-- сюда пиксель -->

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width" />
  <title>Спасибо</title> 
    <link rel="stylesheet" href="css/bootstrap.css">
  <style>
    body {
        background: #eeeeee url(/thankyou/pattern.png);
        font-family: Tahoma;
        font-size: 14px;
    }
    h1 {
        text-align: center;
        color: #ff7200;
        font-size: 50px; 
        text-transform: uppercase;
        line-height: 49px;
        margin-top: 0;
        padding-top: 0;
    }
    h2 {
        text-transform: none;
        text-align: center;
        font-size: 30px;
        color: black;
    }
    h3 {
        text-align: center;
        color: #111;
    }
    #parent {
        padding: 0 20px 0 20px;
    }
    #content {
        font-size: 1em;
        margin: 0 auto;
        margin-top: 10%;
        background: white; 
        max-width: 650px;
        // min-width: 300px;
        -moz-border-radius: 14px;
        border-radius: 14px;
        padding: 20px;
    }
  </style> 


</head>
<body> 

    <div id="parent">
        <div id="content">
            <h1>Спасибо! <p>Ваш заказ принят</p></h1>
			<h2>Наш менеджер свяжется с Вами в ближайшее время, чтобы уточнить данные и подтвердить заказ. </h2>
            </br>
        <a class="btn btn-primary" 
            href="javascript:history.go(-1)"
            style="width: 22%;margin: auto;">
            Вернуться назад
        </a>
        </div>
    </div>



</body>
</html>
