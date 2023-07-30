<!DOCTYPE html>

<html data-wf-domain="alexaandig.github.io" data-wf-page="alexafse"
  data-wf-site="alexafse">

<head>
  <meta charset="utf-8" />
  <title>AlexaFSE Theme</title>
  <meta content="AlexaFSE Theme" property="og:title" />
  <meta content="AlexaFSE Theme" property="twitter:title" />
  <meta content="width=device-width, initial-scale=1" name="viewport" />
  <meta content="AlexaFSE" name="generator" />

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  
  <script type="text/javascript">
    !(function (o, c) {
      var n = c.documentElement,
        t = " w-mod-";
      (n.className += t + "js"),
        ("ontouchstart" in o ||
          (o.DocumentTouch && c instanceof DocumentTouch)) &&
        (n.className += t + "touch");
    })(window, document);
  </script>

  <link href="<?php echo get_stylesheet_directory_uri (); ?>/assets/favicon.png" rel="shortcut icon" type="image/x-icon" />
  <link href="<?php echo get_stylesheet_directory_uri (); ?>/assets/favicon.png" rel="apple-touch-icon" />

  <?php wp_head(); ?>

</head>

<body>
  <div class="main-wrapper">
    <div class="header wf-section">
      <div data-animation="default" data-collapse="small" data-duration="400" data-easing="ease" data-easing2="ease"
        role="banner" class="navbar-no-shadow-container w-nav">
        <div class="navbar-wrapper">
          <a href="index.html" aria-current="page" class="navbar-brand w-nav-brand w--current"><img
              src="<?php echo get_stylesheet_directory_uri (); ?>/assets/logo-white.png" loading="lazy" width="80" sizes="(max-width: 479px) 42vw, 100px" srcset="<?php echo get_stylesheet_directory_uri (); ?>/assets/logo-white.png" 500w, " alt=" AlexaFSE Logo" class="header-logo" /></a>
          <nav role="navigation" class="nav-menu-wrapper w-nav-menu">
            <ul role="list" class="nav-menu w-list-unstyled">
              <li class="nav-list-item">
                <a href="#works" class="nav-link">Works</a>
              </li>
              <li class="nav-list-item">
                <a href="#process" class="nav-link">Process</a>
              </li>
              <li class="nav-list-item">
                <a href="#testimonials" class="nav-link">Testimonials</a>
              </li>
              <li class="nav-list-item">
                <a href="#pricing" class="nav-link">Pricing</a>
              </li>
              <li class="mobile-margin-top">
                <div class="nav-button-wrapper">
                  <a href="mailto:andigalexa@gmail.com" class="button nav-btn w-button">Schedule a meeting</a>
                </div>
              </li>
            </ul>
          </nav>
          <div class="menu-button w-nav-button">
            <div class="icon w-icon-nav-menu"></div>
          </div>
        </div>
      </div>
    </div>