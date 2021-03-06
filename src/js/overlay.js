/*$(document).ready(function () {
  $(".menu-btn").click(function () {
    $(".overlay").fadeToggle(200);
  });
  $(".remove-icon-mobile").click(function () {
    $(this).siblings().find(".move").removeClass("move");
    $(".overlay").fadeToggle(200);
  });

  $(".menu_mobile .item-level-1 a").on("click", function () {
    const servizi = $("#servizi");
    const soluzioni = $("#soluzioni");
    var value = $(this).text().toLowerCase();
    if (value === "servizi") {
      servizi.show();
      soluzioni.hide();
    }
    if (value === "soluzioni") {
      soluzioni.show();
      servizi.hide();
    }
    $(this).parent().parent().toggleClass("move");
  });

  $(".menu_mobile .item-level-1 .sub .return-level-1 a").on(
    "click",
    function () {
      $(this).parent().parent().parent().parent().removeClass("move");
    }
  );
});

--------------------OLD HTML---------------------------
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Menu Overlay</title>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700&display=swap"
    />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <header>
      <nav class="navbar">
        <div class="container">
          <a class="navbar-brand" href="#"> </a>

          <span class="navbar-text">
            <div class="menu-btn">
              <span><img src="assets/imgs/menu.svg" /></span>
            </div>
          </span>
        </div>
      </nav>
    </header>
    <div class="overlay">
      <div class="remove-icon-mobile">
        <img src="assets/imgs/close.svg" alt="image"/>
      </div>
      <div class="menu_mobile">
        <div class="container_mobile">
          <ul>
            <li>
              <ul id="lista">
                <li><a href="/chi-siamo-2">Chi siamo</a></li>
                <li class="item-level-1">
                  <a href="#">Soluzioni</a>
                  <ul class="sub" id="soluzioni">
                    <span class="return-level-1"
                      ><a href="#"><i class="fa fa-angle-left"></i></a
                    ></span>
                    <h3>Soluzioni</h3>
                    <li>
                      <a href="/soluzioni/video">
                        <h4>Video</h4>
                        <p>Gestisci i tuoi video</p>
                      </a>
                    </li>
                    <li>
                      <a href="/soluzioni/immagini">
                        <h4>Immagini</h4>
                        <p>Gestisci le tue immagini</p>
                      </a>
                    </li>
                    <li>
                      <a href="/soluzioni/gallery">
                        <h4>Gallerie</h4>
                        <p>Gestisci le tue Gallery</p>
                      </a>
                    </li>
                    <li>
                      <a href="/soluzioni/siti-web">
                        <h4>Siti Web</h4>
                        <p>Crea i tuoi siti web</p>
                      </a>
                    </li>
                    <li>
                      <a href="/soluzioni/applicazioni">
                        <h4>Applicazioni</h4>
                        <p>Arricchisci l'offerta digitale</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="item-level-1">
                  <a href="#">Servizi</a>
                  <ul class="sub" id="servizi">
                    <span class="return-level-1">
                      <a href="#">
                        <i class="fa fa-angle-left"></i>
                      </a>
                    </span>
                    <h3>Servizi</h3>
                    <li>
                      <a href="/servizi/comunicazione">
                        <h4>Comunicazione</h4>
                        <p>Lorem ipsum dolor sit amet dor</p>
                      </a>
                    </li>
                    <li>
                      <a href="/servizi/fruizione">
                        <h4>Fruizione</h4>
                        <p>Lorem ipsum dolor sit amet dor</p>
                      </a>
                    </li>
                    <li>
                      <a href="/servizi/formazione-e-consulenza">
                        <h4>Formazione e consulenza</h4>
                        <p>Lorem ipsum dolor sit amet dor</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li><a href="/i-nostri-clienti">I nostri clienti</a></li>
                <li><a href="/lavora-con-noi">Lavora con noi</a></li>
                <li><a href="/contatti">Contatti</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <script
      src="https://code.jquery.com/jquery-3.1.0.js"
      integrity="sha256-slogkvB1K3VOkzAI8QITxV3VzpOnkeNVsKvtkYLMjfk="
      crossorigin="anonymous"
    ></script>
  </body>
</html>

*/
